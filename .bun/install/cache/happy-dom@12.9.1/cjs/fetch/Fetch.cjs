"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_js_1 = __importDefault(require("./Request.cjs"));
const Headers_js_1 = __importDefault(require("./Headers.cjs"));
const FetchRequestReferrerUtility_js_1 = __importDefault(require("./utilities/FetchRequestReferrerUtility.cjs"));
const DOMException_js_1 = __importDefault(require("../exception/DOMException.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../exception/DOMExceptionNameEnum.cjs"));
const Response_js_1 = __importDefault(require("./Response.cjs"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const zlib_1 = __importDefault(require("zlib"));
const URL_js_1 = __importDefault(require("../url/URL.cjs"));
const stream_1 = __importDefault(require("stream"));
const DataURIParser_js_1 = __importDefault(require("./data-uri/DataURIParser.cjs"));
const FetchCORSUtility_js_1 = __importDefault(require("./utilities/FetchCORSUtility.cjs"));
const SUPPORTED_SCHEMAS = ['data:', 'http:', 'https:'];
const REDIRECT_STATUS_CODES = [301, 302, 303, 307, 308];
const LAST_CHUNK = Buffer.from('0\r\n\r\n');
const MAX_REDIRECT_COUNT = 20;
/**
 * Handles fetch requests.
 *
 * Based on:
 * https://github.com/node-fetch/node-fetch/blob/main/src/index.js
 *
 * @see https://fetch.spec.whatwg.org/#http-network-fetch
 */
class Fetch {
    /**
     * Constructor.
     *
     * @param options Options.
     * @param options.document
     * @param options.url URL.
     * @param [options.init] Init.
     * @param [options.ownerDocument] Owner document.
     * @param [options.redirectCount] Redirect count.
     * @param [options.contentType] Content Type.
     */
    constructor(options) {
        this.reject = null;
        this.resolve = null;
        this.listeners = {
            onSignalAbort: this.onSignalAbort.bind(this)
        };
        this.isChunkedTransfer = false;
        this.isProperLastChunkReceived = false;
        this.previousChunk = null;
        this.nodeRequest = null;
        this.response = null;
        this.redirectCount = 0;
        const url = options.url;
        this.ownerDocument = options.ownerDocument;
        this.request =
            typeof options.url === 'string' || options.url instanceof URL_js_1.default
                ? new Request_js_1.default(options.url, options.init)
                : url;
        if (options.contentType) {
            this.request._contentType = options.contentType;
        }
        this.redirectCount = options.redirectCount || 0;
    }
    /**
     * Sends request.
     *
     * @returns Response.
     */
    send() {
        return new Promise((resolve, reject) => {
            const taskManager = this.ownerDocument.defaultView.happyDOM.asyncTaskManager;
            const taskID = taskManager.startTask(() => this.abort());
            if (this.resolve) {
                throw new Error('Fetch already sent.');
            }
            this.resolve = (response) => {
                taskManager.endTask(taskID);
                resolve(response);
            };
            this.reject = (error) => {
                taskManager.endTask(taskID);
                reject(error);
            };
            this.prepareRequest();
            this.validateRequest();
            if (this.request._url.protocol === 'data:') {
                const result = DataURIParser_js_1.default.parse(this.request.url);
                this.response = new Response_js_1.default(result.buffer, {
                    headers: { 'Content-Type': result.type }
                });
                resolve(this.response);
                return;
            }
            if (this.request.signal.aborted) {
                this.abort();
                return;
            }
            this.request.signal.addEventListener('abort', this.listeners.onSignalAbort);
            const send = (this.request._url.protocol === 'https:' ? https_1.default : http_1.default).request;
            this.nodeRequest = send(this.request._url.href, {
                method: this.request.method,
                headers: this.getRequestHeaders()
            });
            this.nodeRequest.on('error', this.onError.bind(this));
            this.nodeRequest.on('socket', this.onSocket.bind(this));
            this.nodeRequest.on('response', this.onResponse.bind(this));
            if (this.request.body === null) {
                this.nodeRequest.end();
            }
            else {
                stream_1.default.pipeline(this.request.body, this.nodeRequest, (error) => {
                    if (error) {
                        this.onError(error);
                    }
                });
            }
        });
    }
    /**
     * Event listener for "socket" event.
     *
     * @param socket Socket.
     */
    onSocket(socket) {
        const onSocketClose = () => {
            if (this.isChunkedTransfer && !this.isProperLastChunkReceived) {
                const error = new DOMException_js_1.default('Premature close.', DOMExceptionNameEnum_js_1.default.networkError);
                if (this.response && this.response.body) {
                    this.response.body.destroy(error);
                }
            }
        };
        const onData = (buffer) => {
            this.isProperLastChunkReceived = Buffer.compare(buffer.slice(-5), LAST_CHUNK) === 0;
            // Sometimes final 0-length chunk and end of message code are in separate packets.
            if (!this.isProperLastChunkReceived && this.previousChunk) {
                this.isProperLastChunkReceived =
                    Buffer.compare(this.previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 &&
                        Buffer.compare(buffer.slice(-2), LAST_CHUNK.slice(3)) === 0;
            }
            this.previousChunk = buffer;
        };
        socket.prependListener('close', onSocketClose);
        socket.on('data', onData);
        this.nodeRequest.on('close', () => {
            socket.removeListener('close', onSocketClose);
            socket.removeListener('data', onData);
        });
    }
    /**
     * Event listener for signal "abort" event.
     */
    onSignalAbort() {
        this.finalizeRequest();
        this.abort();
    }
    /**
     * Event listener for request "error" event.
     *
     * @param error Error.
     */
    onError(error) {
        this.finalizeRequest();
        this.ownerDocument.defaultView.console.error(error);
        this.reject(new DOMException_js_1.default(`Fetch to "${this.request.url}" failed. Error: ${error.message}`, DOMExceptionNameEnum_js_1.default.networkError));
    }
    /**
     * Event listener for request "response" event.
     *
     * @param nodeResponse Node response.
     */
    onResponse(nodeResponse) {
        // Needed for handling bad endings of chunked transfer.
        this.isChunkedTransfer =
            nodeResponse.headers['transfer-encoding'] === 'chunked' &&
                !nodeResponse.headers['content-length'];
        this.nodeRequest.setTimeout(0);
        const headers = this.getResponseHeaders(nodeResponse);
        if (this.handleRedirectResponse(nodeResponse, headers)) {
            return;
        }
        nodeResponse.once('end', () => this.request.signal.removeEventListener('abort', this.listeners.onSignalAbort));
        let body = stream_1.default.pipeline(nodeResponse, new stream_1.default.PassThrough(), (error) => {
            if (error) {
                // Ignore error as it is forwarded to the response body.
            }
        });
        const responseOptions = {
            status: nodeResponse.statusCode,
            statusText: nodeResponse.statusMessage,
            headers
        };
        const contentEncodingHeader = headers.get('Content-Encoding');
        if (this.request.method === 'HEAD' ||
            contentEncodingHeader === null ||
            nodeResponse.statusCode === 204 ||
            nodeResponse.statusCode === 304) {
            this.response = new Response_js_1.default(body, responseOptions);
            this.response.redirected = this.redirectCount > 0;
            this.response.url = this.request.url;
            this.resolve(this.response);
            return;
        }
        // Be less strict when decoding compressed responses.
        // Sometimes servers send slightly invalid responses that are still accepted by common browsers.
        // "cURL" always uses Z_SYNC_FLUSH.
        const zlibOptions = {
            flush: zlib_1.default.constants.Z_SYNC_FLUSH,
            finishFlush: zlib_1.default.constants.Z_SYNC_FLUSH
        };
        // For GZip
        if (contentEncodingHeader === 'gzip' || contentEncodingHeader === 'x-gzip') {
            body = stream_1.default.pipeline(body, zlib_1.default.createGunzip(zlibOptions), (error) => {
                if (error) {
                    // Ignore error as it is forwarded to the response body.
                }
            });
            this.response = new Response_js_1.default(body, responseOptions);
            this.response.redirected = this.redirectCount > 0;
            this.response.url = this.request.url;
            this.resolve(this.response);
            return;
        }
        // For Deflate
        if (contentEncodingHeader === 'deflate' || contentEncodingHeader === 'x-deflate') {
            // Handle the infamous raw deflate response from old servers
            // A hack for old IIS and Apache servers
            const raw = stream_1.default.pipeline(nodeResponse, new stream_1.default.PassThrough(), (error) => {
                if (error) {
                    // Ignore error as it is forwarded to the response body.
                }
            });
            raw.on('data', (chunk) => {
                // See http://stackoverflow.com/questions/37519828
                if ((chunk[0] & 0x0f) === 0x08) {
                    body = stream_1.default.pipeline(body, zlib_1.default.createInflate(), (error) => {
                        if (error) {
                            // Ignore error as the fetch() promise has already been resolved.
                        }
                    });
                }
                else {
                    body = stream_1.default.pipeline(body, zlib_1.default.createInflateRaw(), (error) => {
                        if (error) {
                            // Ignore error as it is forwarded to the response body.
                        }
                    });
                }
                this.response = new Response_js_1.default(body, responseOptions);
                this.response.redirected = this.redirectCount > 0;
                this.response.url = this.request.url;
                this.resolve(this.response);
            });
            raw.on('end', () => {
                // Some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                if (!this.response) {
                    this.response = new Response_js_1.default(body, responseOptions);
                    this.response.redirected = this.redirectCount > 0;
                    this.response.url = this.request.url;
                    this.resolve(this.response);
                }
            });
            return;
        }
        // For BR
        if (contentEncodingHeader === 'br') {
            body = stream_1.default.pipeline(body, zlib_1.default.createBrotliDecompress(), (error) => {
                if (error) {
                    // Ignore error as it is forwarded to the response body.
                }
            });
            this.response = new Response_js_1.default(body, responseOptions);
            this.response.redirected = this.redirectCount > 0;
            this.response.url = this.request.url;
            this.resolve(this.response);
            return;
        }
        // Otherwise, use response as is
        this.response = new Response_js_1.default(body, responseOptions);
        this.response.redirected = this.redirectCount > 0;
        this.response.url = this.request.url;
        this.resolve(this.response);
    }
    /**
     * Handles redirect response.
     *
     * @param nodeResponse Node response.
     * @param responseHeaders Headers.
     * @returns True if redirect response was handled, false otherwise.
     */
    handleRedirectResponse(nodeResponse, responseHeaders) {
        if (!this.isRedirect(nodeResponse.statusCode)) {
            return false;
        }
        switch (this.request.redirect) {
            case 'error':
                this.finalizeRequest();
                this.reject(new DOMException_js_1.default(`URI requested responds with a redirect, redirect mode is set to "error": ${this.request.url}`, DOMExceptionNameEnum_js_1.default.abortError));
                return true;
            case 'manual':
                // Nothing to do
                return false;
            case 'follow':
                const locationHeader = responseHeaders.get('Location');
                const shouldBecomeGetRequest = nodeResponse.statusCode === 303 ||
                    ((nodeResponse.statusCode === 301 || nodeResponse.statusCode === 302) &&
                        this.request.method === 'POST');
                let locationURL = null;
                if (locationHeader !== null) {
                    try {
                        locationURL = new URL_js_1.default(locationHeader, this.request.url);
                    }
                    catch {
                        this.finalizeRequest();
                        this.reject(new DOMException_js_1.default(`URI requested responds with an invalid redirect URL: ${locationHeader}`, DOMExceptionNameEnum_js_1.default.uriMismatchError));
                        return true;
                    }
                }
                if (locationURL === null) {
                    return false;
                }
                if (this.redirectCount >= MAX_REDIRECT_COUNT) {
                    this.finalizeRequest();
                    this.reject(new DOMException_js_1.default(`Maximum redirects reached at: ${this.request.url}`, DOMExceptionNameEnum_js_1.default.networkError));
                    return true;
                }
                const headers = new Headers_js_1.default(this.request.headers);
                let body = this.request._bodyBuffer;
                if (!body && this.request.body) {
                    // Piping a used request body is not possible.
                    if (this.request.bodyUsed) {
                        throw new DOMException_js_1.default('It is not possible to pipe a body after it is used.', DOMExceptionNameEnum_js_1.default.networkError);
                    }
                    body = new stream_1.default.PassThrough();
                    this.request.body.pipe(body);
                }
                const requestInit = {
                    method: this.request.method,
                    signal: this.request.signal,
                    referrer: this.request.referrer,
                    referrerPolicy: this.request.referrerPolicy,
                    credentials: this.request.credentials,
                    headers,
                    body
                };
                // TODO: Maybe we need to add support for OPTIONS request with 'Access-Control-Allow-*' headers?
                if (this.request.credentials === 'omit' ||
                    (this.request.credentials === 'same-origin' &&
                        FetchCORSUtility_js_1.default.isCORS(this.ownerDocument.location, locationURL))) {
                    headers.delete('authorization');
                    headers.delete('www-authenticate');
                    headers.delete('cookie');
                    headers.delete('cookie2');
                }
                if (nodeResponse.statusCode !== 303 && this.request.body && !this.request._bodyBuffer) {
                    this.finalizeRequest();
                    this.reject(new DOMException_js_1.default('Cannot follow redirect with body being a readable stream.', DOMExceptionNameEnum_js_1.default.networkError));
                    return true;
                }
                if (this.request.signal.aborted) {
                    this.abort();
                    return true;
                }
                if (shouldBecomeGetRequest) {
                    requestInit.method = 'GET';
                    requestInit.body = undefined;
                    headers.delete('Content-Length');
                    headers.delete('Content-Type');
                }
                const responseReferrerPolicy = FetchRequestReferrerUtility_js_1.default.getReferrerPolicyFromHeader(headers);
                if (responseReferrerPolicy) {
                    requestInit.referrerPolicy = responseReferrerPolicy;
                }
                const fetch = new this.constructor({
                    ownerDocument: this.ownerDocument,
                    url: locationURL,
                    init: requestInit,
                    redirectCount: this.redirectCount + 1,
                    contentType: !shouldBecomeGetRequest ? this.request._contentType : undefined
                });
                this.finalizeRequest();
                this.resolve(fetch.send());
                return true;
            default:
                this.finalizeRequest();
                this.reject(new DOMException_js_1.default(`Redirect option '${this.request.redirect}' is not a valid value of RequestRedirect`));
                return true;
        }
    }
    /**
     * Prepares the request before being sent.
     */
    prepareRequest() {
        if (!this.request.referrerPolicy) {
            this.request.referrerPolicy = 'strict-origin-when-cross-origin';
        }
        if (this.request.referrer && this.request.referrer !== 'no-referrer') {
            this.request._referrer = FetchRequestReferrerUtility_js_1.default.getSentReferrer(this.ownerDocument, this.request);
        }
        else {
            this.request._referrer = 'no-referrer';
        }
    }
    /**
     * Validates the request.
     *
     * @throws {Error} Throws an error if the request is invalid.
     */
    validateRequest() {
        if (!SUPPORTED_SCHEMAS.includes(this.request._url.protocol)) {
            throw new DOMException_js_1.default(`Failed to fetch from "${this.request.url}": URL scheme "${this.request._url.protocol.replace(/:$/, '')}" is not supported.`, DOMExceptionNameEnum_js_1.default.notSupportedError);
        }
    }
    /**
     * Returns request headers.
     *
     * @returns Headers.
     */
    getRequestHeaders() {
        const headers = new Headers_js_1.default(this.request.headers);
        const document = this.ownerDocument;
        const isCORS = FetchCORSUtility_js_1.default.isCORS(document.location, this.request._url);
        // TODO: Maybe we need to add support for OPTIONS request with 'Access-Control-Allow-*' headers?
        if (this.request.credentials === 'omit' ||
            (this.request.credentials === 'same-origin' && isCORS)) {
            headers.delete('authorization');
            headers.delete('www-authenticate');
        }
        headers.set('Accept-Encoding', 'gzip, deflate, br');
        headers.set('Connection', 'close');
        if (!headers.has('User-Agent')) {
            headers.set('User-Agent', document.defaultView.navigator.userAgent);
        }
        if (this.request._referrer instanceof URL_js_1.default) {
            headers.set('Referer', this.request._referrer.href);
        }
        if (this.request.credentials === 'include' ||
            (this.request.credentials === 'same-origin' && !isCORS)) {
            const cookie = document.defaultView.document._cookie.getCookieString(this.ownerDocument.defaultView.location, false);
            if (cookie) {
                headers.set('Cookie', cookie);
            }
        }
        if (!headers.has('Accept')) {
            headers.set('Accept', '*/*');
        }
        if (!headers.has('Content-Length') && this.request._contentLength !== null) {
            headers.set('Content-Length', String(this.request._contentLength));
        }
        if (!headers.has('Content-Type') && this.request._contentType) {
            headers.set('Content-Type', this.request._contentType);
        }
        // We need to convert the headers to Node request headers.
        const httpRequestHeaders = {};
        for (const header of Object.values(headers._entries)) {
            httpRequestHeaders[header.name] = header.value;
        }
        return httpRequestHeaders;
    }
    /**
     * Returns "true" if redirect.
     *
     * @param statusCode Status code.
     * @returns "true" if redirect.
     */
    isRedirect(statusCode) {
        return REDIRECT_STATUS_CODES.includes(statusCode);
    }
    /**
     * Appends headers to response.
     *
     * @param nodeResponse HTTP request.
     * @returns Headers.
     */
    getResponseHeaders(nodeResponse) {
        const headers = new Headers_js_1.default();
        let key = null;
        for (const header of nodeResponse.rawHeaders) {
            if (!key) {
                key = header;
            }
            else {
                const lowerKey = key.toLowerCase();
                // Handles setting cookie headers to the document.
                // "set-cookie" and "set-cookie2" are not allowed in response headers according to spec.
                if (lowerKey === 'set-cookie' || lowerKey === 'set-cookie2') {
                    this.ownerDocument['_cookie'].addCookieString(this.request._url, header);
                }
                else {
                    headers.append(key, header);
                }
                key = null;
            }
        }
        return headers;
    }
    /**
     * Finalizes the request.
     */
    finalizeRequest() {
        this.request.signal.removeEventListener('abort', this.listeners.onSignalAbort);
        this.nodeRequest.destroy();
    }
    /**
     * Aborts the request.
     */
    abort() {
        const error = new DOMException_js_1.default('The operation was aborted.', DOMExceptionNameEnum_js_1.default.abortError);
        if (this.request.body) {
            this.request.body.destroy(error);
        }
        if (!this.response || !this.response.body) {
            if (this.reject) {
                this.reject(error);
            }
            return;
        }
        this.response.body.emit('error', error);
        if (this.reject) {
            this.reject(error);
        }
    }
}
exports.default = Fetch;
//# sourceMappingURL=Fetch.cjs.map