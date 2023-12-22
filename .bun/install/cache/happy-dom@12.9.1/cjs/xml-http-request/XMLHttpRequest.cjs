"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const child_process_1 = __importDefault(require("child_process"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const XMLHttpRequestEventTarget_js_1 = __importDefault(require("./XMLHttpRequestEventTarget.cjs"));
const XMLHttpRequestReadyStateEnum_js_1 = __importDefault(require("./XMLHttpRequestReadyStateEnum.cjs"));
const Event_js_1 = __importDefault(require("../event/Event.cjs"));
const XMLHttpRequestUpload_js_1 = __importDefault(require("./XMLHttpRequestUpload.cjs"));
const DOMException_js_1 = __importDefault(require("../exception/DOMException.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../exception/DOMExceptionNameEnum.cjs"));
const URL_js_1 = __importDefault(require("../url/URL.cjs"));
const XMLHttpRequestURLUtility_js_1 = __importDefault(require("./utilities/XMLHttpRequestURLUtility.cjs"));
const ProgressEvent_js_1 = __importDefault(require("../event/events/ProgressEvent.cjs"));
const XMLHttpResponseTypeEnum_js_1 = __importDefault(require("./XMLHttpResponseTypeEnum.cjs"));
const XMLHttpRequestCertificate_js_1 = __importDefault(require("./XMLHttpRequestCertificate.cjs"));
const XMLHttpRequestSyncRequestScriptBuilder_js_1 = __importDefault(require("./utilities/XMLHttpRequestSyncRequestScriptBuilder.cjs"));
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const ErrorEvent_js_1 = __importDefault(require("../event/events/ErrorEvent.cjs"));
// These headers are not user setable.
// The following are allowed but banned in the spec:
// * User-agent
const FORBIDDEN_REQUEST_HEADERS = [
    'accept-charset',
    'accept-encoding',
    'access-control-request-headers',
    'access-control-request-method',
    'connection',
    'content-length',
    'content-transfer-encoding',
    'cookie',
    'cookie2',
    'date',
    'expect',
    'host',
    'keep-alive',
    'origin',
    'referer',
    'te',
    'trailer',
    'transfer-encoding',
    'upgrade',
    'via'
];
// These request methods are not allowed
const FORBIDDEN_REQUEST_METHODS = ['TRACE', 'TRACK', 'CONNECT'];
// Match Content-Type header charset
const CONTENT_TYPE_ENCODING_REGEXP = /charset=([^;]*)/i;
/**
 * XMLHttpRequest.
 *
 * Based on:
 * https://github.com/mjwwit/node-XMLHttpRequest/blob/master/lib/XMLHttpRequest.js
 */
class XMLHttpRequest extends XMLHttpRequestEventTarget_js_1.default {
    /**
     * Constructor.
     */
    constructor() {
        super();
        // Public properties
        this.upload = new XMLHttpRequestUpload_js_1.default();
        // Private properties
        this._ownerDocument = null;
        this._state = {
            incommingMessage: null,
            response: null,
            responseType: '',
            responseText: '',
            responseXML: null,
            responseURL: '',
            readyState: XMLHttpRequestReadyStateEnum_js_1.default.unsent,
            asyncRequest: null,
            asyncTaskID: null,
            requestHeaders: {},
            status: null,
            statusText: null,
            send: false,
            error: false,
            aborted: false
        };
        this._settings = {
            method: null,
            url: null,
            async: true,
            user: null,
            password: null
        };
        this._ownerDocument = XMLHttpRequest._ownerDocument;
    }
    /**
     * Returns the status.
     *
     * @returns Status.
     */
    get status() {
        return this._state.status;
    }
    /**
     * Returns the status text.
     *
     * @returns Status text.
     */
    get statusText() {
        return this._state.statusText;
    }
    /**
     * Returns the response.
     *
     * @returns Response.
     */
    get response() {
        return this._state.response;
    }
    /**
     * Returns the response URL.
     *
     * @returns Response URL.
     */
    get responseURL() {
        return this._state.responseURL;
    }
    /**
     * Returns the ready state.
     *
     * @returns Ready state.
     */
    get readyState() {
        return this._state.readyState;
    }
    /**
     * Get the response text.
     *
     * @throws {DOMException} If the response type is not text or empty.
     * @returns The response text.
     */
    get responseText() {
        if (this.responseType === XMLHttpResponseTypeEnum_js_1.default.text || this.responseType === '') {
            return this._state.responseText;
        }
        throw new DOMException_js_1.default(`Failed to read the 'responseText' property from 'XMLHttpRequest': The value is only accessible if the object's 'responseType' is '' or 'text' (was '${this.responseType}').`, DOMExceptionNameEnum_js_1.default.invalidStateError);
    }
    /**
     * Get the responseXML.
     *
     * @throws {DOMException} If the response type is not text or empty.
     * @returns Response XML.
     */
    get responseXML() {
        if (this.responseType === XMLHttpResponseTypeEnum_js_1.default.document || this.responseType === '') {
            return this._state.responseXML;
        }
        throw new DOMException_js_1.default(`Failed to read the 'responseXML' property from 'XMLHttpRequest': The value is only accessible if the object's 'responseType' is '' or 'document' (was '${this.responseType}').`, DOMExceptionNameEnum_js_1.default.invalidStateError);
    }
    /**
     * Set response type.
     *
     * @param type Response type.
     * @throws {DOMException} If the state is not unsent or opened.
     * @throws {DOMException} If the request is synchronous.
     */
    set responseType(type) {
        // ResponseType can only be set when the state is unsent or opened.
        if (this.readyState !== XMLHttpRequestReadyStateEnum_js_1.default.opened &&
            this.readyState !== XMLHttpRequestReadyStateEnum_js_1.default.unsent) {
            throw new DOMException_js_1.default(`Failed to set the 'responseType' property on 'XMLHttpRequest': The object's state must be OPENED or UNSENT.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        // Sync requests can only have empty string or 'text' as response type.
        if (!this._settings.async) {
            throw new DOMException_js_1.default(`Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be changed for synchronous requests made from a document.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this._state.responseType = type;
    }
    /**
     * Get response Type.
     *
     * @returns Response type.
     */
    get responseType() {
        return this._state.responseType;
    }
    /**
     * Opens the connection.
     *
     * @param method Connection method (eg GET, POST).
     * @param url URL for the connection.
     * @param [async=true] Asynchronous connection.
     * @param [user] Username for basic authentication (optional).
     * @param [password] Password for basic authentication (optional).
     */
    open(method, url, async = true, user, password) {
        this.abort();
        this._state.aborted = false;
        this._state.error = false;
        const upperMethod = method.toUpperCase();
        // Check for valid request method
        if (FORBIDDEN_REQUEST_METHODS.includes(upperMethod)) {
            throw new DOMException_js_1.default('Request method not allowed', DOMExceptionNameEnum_js_1.default.securityError);
        }
        // Check responseType.
        if (!async && !!this.responseType && this.responseType !== XMLHttpResponseTypeEnum_js_1.default.text) {
            throw new DOMException_js_1.default(`Failed to execute 'open' on 'XMLHttpRequest': Synchronous requests from a document must not set a response type.`, DOMExceptionNameEnum_js_1.default.invalidAccessError);
        }
        this._settings = {
            method: upperMethod,
            url: url,
            async: async,
            user: user || null,
            password: password || null
        };
        this._setState(XMLHttpRequestReadyStateEnum_js_1.default.opened);
    }
    /**
     * Sets a header for the request.
     *
     * @param header Header name
     * @param value Header value
     * @returns Header added.
     */
    setRequestHeader(header, value) {
        if (this.readyState !== XMLHttpRequestReadyStateEnum_js_1.default.opened) {
            throw new DOMException_js_1.default(`Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        const lowerHeader = header.toLowerCase();
        if (FORBIDDEN_REQUEST_HEADERS.includes(lowerHeader)) {
            return false;
        }
        if (this._state.send) {
            throw new DOMException_js_1.default(`Failed to execute 'setRequestHeader' on 'XMLHttpRequest': Request is in progress.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this._state.requestHeaders[lowerHeader] = value;
        return true;
    }
    /**
     * Gets a header from the server response.
     *
     * @param header header Name of header to get.
     * @returns string Text of the header or null if it doesn't exist.
     */
    getResponseHeader(header) {
        const lowerHeader = header.toLowerCase();
        // Cookie headers are excluded for security reasons as per spec.
        if (typeof header === 'string' &&
            header !== 'set-cookie' &&
            header !== 'set-cookie2' &&
            this.readyState > XMLHttpRequestReadyStateEnum_js_1.default.opened &&
            this._state.incommingMessage.headers[lowerHeader] &&
            !this._state.error) {
            return Array.isArray(this._state.incommingMessage.headers[lowerHeader])
                ? this._state.incommingMessage.headers[lowerHeader].join(', ')
                : this._state.incommingMessage.headers[lowerHeader];
        }
        return null;
    }
    /**
     * Gets all the response headers.
     *
     * @returns A string with all response headers separated by CR+LF.
     */
    getAllResponseHeaders() {
        if (this.readyState < XMLHttpRequestReadyStateEnum_js_1.default.headersRecieved || this._state.error) {
            return '';
        }
        const result = [];
        for (const name of Object.keys(this._state.incommingMessage.headers)) {
            // Cookie headers are excluded for security reasons as per spec.
            if (name !== 'set-cookie' && name !== 'set-cookie2') {
                result.push(`${name}: ${this._state.incommingMessage.headers[name]}`);
            }
        }
        return result.join('\r\n');
    }
    /**
     * Sends the request to the server.
     *
     * @param data Optional data to send as request body.
     */
    send(data) {
        var _a, _b;
        if (this.readyState != XMLHttpRequestReadyStateEnum_js_1.default.opened) {
            throw new DOMException_js_1.default(`Failed to execute 'send' on 'XMLHttpRequest': Connection must be opened before send() is called.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        if (this._state.send) {
            throw new DOMException_js_1.default(`Failed to execute 'send' on 'XMLHttpRequest': Send has already been called.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        const { location } = this._ownerDocument.defaultView;
        const url = new URL_js_1.default(this._settings.url, location);
        // Security check.
        if (url.protocol === 'http:' && location.protocol === 'https:') {
            throw new DOMException_js_1.default(`Mixed Content: The page at '${location.href}' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint '${url.href}'. This request has been blocked; the content must be served over HTTPS.`, DOMExceptionNameEnum_js_1.default.securityError);
        }
        // Load files off the local filesystem (file://)
        if (XMLHttpRequestURLUtility_js_1.default.isLocal(url)) {
            if (!this._ownerDocument.defaultView.happyDOM.settings.enableFileSystemHttpRequests) {
                throw new DOMException_js_1.default('File system is disabled by default for security reasons. To enable it, set the "window.happyDOM.settings.enableFileSystemHttpRequests" option to true.', DOMExceptionNameEnum_js_1.default.securityError);
            }
            if (this._settings.method !== 'GET') {
                throw new DOMException_js_1.default('Failed to send local file system request. Only "GET" method is supported for local file system requests.', DOMExceptionNameEnum_js_1.default.notSupportedError);
            }
            if (this._settings.async) {
                this._sendLocalAsyncRequest(url).catch((error) => this._onError(error));
            }
            else {
                this._sendLocalSyncRequest(url);
            }
            return;
        }
        // TODO: CORS check.
        const host = XMLHttpRequestURLUtility_js_1.default.getHost(url);
        const ssl = XMLHttpRequestURLUtility_js_1.default.isSSL(url);
        // Default to port 80. If accessing localhost on another port be sure
        // To use http://localhost:port/path
        const port = Number(url.port) || (ssl ? 443 : 80);
        // Add query string if one is used
        const uri = url.pathname + (url.search ? url.search : '');
        // Set the Host header or the server may reject the request
        this._state.requestHeaders['host'] = host;
        if (!((ssl && port === 443) || port === 80)) {
            this._state.requestHeaders['host'] += ':' + url.port;
        }
        // Set Basic Auth if necessary
        if (this._settings.user) {
            (_a = this._settings).password ?? (_a.password = '');
            const authBuffer = Buffer.from(this._settings.user + ':' + this._settings.password);
            this._state.requestHeaders['authorization'] = 'Basic ' + authBuffer.toString('base64');
        }
        // Set the Content-Length header if method is POST
        switch (this._settings.method) {
            case 'GET':
            case 'HEAD':
                data = null;
                break;
            case 'POST':
                (_b = this._state.requestHeaders)['content-type'] ?? (_b['content-type'] = 'text/plain;charset=UTF-8');
                if (data) {
                    this._state.requestHeaders['content-length'] = Buffer.isBuffer(data)
                        ? data.length
                        : Buffer.byteLength(data);
                }
                else {
                    this._state.requestHeaders['content-length'] = 0;
                }
                break;
            default:
                break;
        }
        const options = {
            host: host,
            port: port,
            path: uri,
            method: this._settings.method,
            headers: { ...this._getDefaultRequestHeaders(), ...this._state.requestHeaders },
            agent: false,
            rejectUnauthorized: true
        };
        if (ssl) {
            options.key = XMLHttpRequestCertificate_js_1.default.key;
            options.cert = XMLHttpRequestCertificate_js_1.default.cert;
        }
        // Reset error flag
        this._state.error = false;
        // Handle async requests
        if (this._settings.async) {
            this._sendAsyncRequest(options, ssl, data).catch((error) => this._onError(error));
        }
        else {
            this._sendSyncRequest(options, ssl, data);
        }
    }
    /**
     * Aborts a request.
     */
    abort() {
        if (this._state.asyncRequest) {
            this._state.asyncRequest.destroy();
            this._state.asyncRequest = null;
        }
        this._state.status = null;
        this._state.statusText = null;
        this._state.requestHeaders = {};
        this._state.responseText = '';
        this._state.responseXML = null;
        this._state.aborted = true;
        this._state.error = true;
        if (this.readyState !== XMLHttpRequestReadyStateEnum_js_1.default.unsent &&
            (this.readyState !== XMLHttpRequestReadyStateEnum_js_1.default.opened || this._state.send) &&
            this.readyState !== XMLHttpRequestReadyStateEnum_js_1.default.done) {
            this._state.send = false;
            this._setState(XMLHttpRequestReadyStateEnum_js_1.default.done);
        }
        this._state.readyState = XMLHttpRequestReadyStateEnum_js_1.default.unsent;
        if (this._state.asyncTaskID !== null) {
            this._ownerDocument.defaultView.happyDOM.asyncTaskManager.endTask(this._state.asyncTaskID);
        }
    }
    /**
     * Changes readyState and calls onreadystatechange.
     *
     * @param state
     */
    _setState(state) {
        if (this.readyState === state ||
            (this.readyState === XMLHttpRequestReadyStateEnum_js_1.default.unsent && this._state.aborted)) {
            return;
        }
        this._state.readyState = state;
        if (this._settings.async ||
            this.readyState < XMLHttpRequestReadyStateEnum_js_1.default.opened ||
            this.readyState === XMLHttpRequestReadyStateEnum_js_1.default.done) {
            this.dispatchEvent(new Event_js_1.default('readystatechange'));
        }
        if (this.readyState === XMLHttpRequestReadyStateEnum_js_1.default.done) {
            let fire;
            if (this._state.aborted) {
                fire = new Event_js_1.default('abort');
            }
            else if (this._state.error) {
                fire = new Event_js_1.default('error');
            }
            else {
                fire = new Event_js_1.default('load');
            }
            this.dispatchEvent(fire);
            this.dispatchEvent(new Event_js_1.default('loadend'));
        }
    }
    /**
     * Default request headers.
     *
     * @returns Default request headers.
     */
    _getDefaultRequestHeaders() {
        const { location, navigator, document } = this._ownerDocument.defaultView;
        return {
            accept: '*/*',
            referer: location.href,
            'user-agent': navigator.userAgent,
            cookie: document._cookie.getCookieString(location, false)
        };
    }
    /**
     * Sends a synchronous request.
     *
     * @param options
     * @param ssl
     * @param data
     */
    _sendSyncRequest(options, ssl, data) {
        const scriptString = XMLHttpRequestSyncRequestScriptBuilder_js_1.default.getScript(options, ssl, data);
        // Start the other Node Process, executing this string
        const content = child_process_1.default.execFileSync(process.argv[0], ['-e', scriptString], {
            encoding: 'buffer',
            maxBuffer: 1024 * 1024 * 1024 // TODO: Consistent buffer size: 1GB.
        });
        // If content length is 0, then there was an error
        if (!content.length) {
            throw new DOMException_js_1.default('Synchronous request failed', DOMExceptionNameEnum_js_1.default.networkError);
        }
        const { error, data: response } = JSON.parse(content.toString());
        if (error) {
            this._onError(error);
            return;
        }
        if (response) {
            this._state.incommingMessage = {
                statusCode: response.statusCode,
                headers: response.headers
            };
            this._state.status = response.statusCode;
            this._state.statusText = response.statusMessage;
            // Although it will immediately be set to loading,
            // According to the spec, the state should be headersRecieved first.
            this._setState(XMLHttpRequestReadyStateEnum_js_1.default.headersRecieved);
            this._setState(XMLHttpRequestReadyStateEnum_js_1.default.loading);
            this._state.response = this._decodeResponseText(Buffer.from(response.data, 'base64'));
            this._state.responseText = this._state.response;
            this._state.responseXML = null;
            this._state.responseURL = new URL_js_1.default(this._settings.url, this._ownerDocument.defaultView.location).href;
            // Set Cookies.
            this._setCookies(this._state.incommingMessage.headers);
            // Redirect.
            if (this._state.incommingMessage.statusCode === 301 ||
                this._state.incommingMessage.statusCode === 302 ||
                this._state.incommingMessage.statusCode === 303 ||
                this._state.incommingMessage.statusCode === 307) {
                const redirectUrl = new URL_js_1.default(this._state.incommingMessage.headers['location'], this._ownerDocument.defaultView.location);
                ssl = redirectUrl.protocol === 'https:';
                this._settings.url = redirectUrl.href;
                // Recursive call.
                this._sendSyncRequest(Object.assign(options, {
                    host: redirectUrl.host,
                    path: redirectUrl.pathname + (redirectUrl.search ?? ''),
                    port: redirectUrl.port || (ssl ? 443 : 80),
                    method: this._state.incommingMessage.statusCode === 303 ? 'GET' : this._settings.method,
                    headers: Object.assign(options.headers, {
                        referer: redirectUrl.origin,
                        host: redirectUrl.host
                    })
                }), ssl, data);
            }
            this._setState(XMLHttpRequestReadyStateEnum_js_1.default.done);
        }
    }
    /**
     * Sends an async request.
     *
     * @param options
     * @param ssl
     * @param data
     */
    _sendAsyncRequest(options, ssl, data) {
        return new Promise((resolve) => {
            // Starts async task in Happy DOM
            this._state.asyncTaskID = this._ownerDocument.defaultView.happyDOM.asyncTaskManager.startTask(this.abort.bind(this));
            // Use the proper protocol
            const sendRequest = ssl ? https_1.default.request : http_1.default.request;
            // Request is being sent, set send flag
            this._state.send = true;
            // As per spec, this is called here for historical reasons.
            this.dispatchEvent(new Event_js_1.default('readystatechange'));
            // Create the request
            this._state.asyncRequest = sendRequest(options, async (response) => {
                await this._onAsyncResponse(response, options, ssl, data);
                resolve();
                // Ends async task in Happy DOM
                this._ownerDocument.defaultView.happyDOM.asyncTaskManager.endTask(this._state.asyncTaskID);
            });
            this._state.asyncRequest.on('error', (error) => {
                this._onError(error);
                resolve();
                // Ends async task in Happy DOM
                this._ownerDocument.defaultView.happyDOM.asyncTaskManager.endTask(this._state.asyncTaskID);
            });
            // Node 0.4 and later won't accept empty data. Make sure it's needed.
            if (data) {
                this._state.asyncRequest.write(data);
            }
            this._state.asyncRequest.end();
            this.dispatchEvent(new Event_js_1.default('loadstart'));
        });
    }
    /**
     * Handles an async response.
     *
     * @param options Options.
     * @param ssl SSL.
     * @param data Data.
     * @param response Response.
     * @returns Promise.
     */
    _onAsyncResponse(response, options, ssl, data) {
        return new Promise((resolve) => {
            // Set response var to the response we got back
            // This is so it remains accessable outside this scope
            this._state.incommingMessage = response;
            // Set Cookies
            this._setCookies(this._state.incommingMessage.headers);
            // Check for redirect
            // @TODO Prevent looped redirects
            if (this._state.incommingMessage.statusCode === 301 ||
                this._state.incommingMessage.statusCode === 302 ||
                this._state.incommingMessage.statusCode === 303 ||
                this._state.incommingMessage.statusCode === 307) {
                // TODO: redirect url protocol change.
                // Change URL to the redirect location
                this._settings.url = this._state.incommingMessage.headers.location;
                // Parse the new URL.
                const redirectUrl = new URL_js_1.default(this._settings.url, this._ownerDocument.defaultView.location);
                this._settings.url = redirectUrl.href;
                ssl = redirectUrl.protocol === 'https:';
                // Issue the new request
                this._sendAsyncRequest({
                    ...options,
                    host: redirectUrl.hostname,
                    port: redirectUrl.port,
                    path: redirectUrl.pathname + (redirectUrl.search ?? ''),
                    method: this._state.incommingMessage.statusCode === 303 ? 'GET' : this._settings.method,
                    headers: { ...options.headers, referer: redirectUrl.origin, host: redirectUrl.host }
                }, ssl, data);
                // @TODO Check if an XHR event needs to be fired here
                return;
            }
            this._state.status = this._state.incommingMessage.statusCode;
            this._state.statusText = this._state.incommingMessage.statusMessage;
            this._setState(XMLHttpRequestReadyStateEnum_js_1.default.headersRecieved);
            // Initialize response.
            let tempResponse = Buffer.from(new Uint8Array(0));
            this._state.incommingMessage.on('data', (chunk) => {
                // Make sure there's some data
                if (chunk) {
                    tempResponse = Buffer.concat([tempResponse, Buffer.from(chunk)]);
                }
                // Don't emit state changes if the connection has been aborted.
                if (this._state.send) {
                    this._setState(XMLHttpRequestReadyStateEnum_js_1.default.loading);
                }
                const contentLength = Number(this._state.incommingMessage.headers['content-length']);
                this.dispatchEvent(new ProgressEvent_js_1.default('progress', {
                    lengthComputable: !isNaN(contentLength),
                    loaded: tempResponse.length,
                    total: isNaN(contentLength) ? 0 : contentLength
                }));
            });
            this._state.incommingMessage.on('end', () => {
                if (this._state.send) {
                    // The sendFlag needs to be set before setState is called.  Otherwise, if we are chaining callbacks
                    // There can be a timing issue (the callback is called and a new call is made before the flag is reset).
                    this._state.send = false;
                    // Set response according to responseType.
                    const { response, responseXML, responseText } = this._parseResponseData(tempResponse);
                    this._state.response = response;
                    this._state.responseXML = responseXML;
                    this._state.responseText = responseText;
                    this._state.responseURL = new URL_js_1.default(this._settings.url, this._ownerDocument.defaultView.location).href;
                    // Discard the 'end' event if the connection has been aborted
                    this._setState(XMLHttpRequestReadyStateEnum_js_1.default.done);
                }
                resolve();
            });
            this._state.incommingMessage.on('error', (error) => {
                this._onError(error);
                resolve();
            });
        });
    }
    /**
     * Sends a local file system async request.
     *
     * @param url URL.
     * @returns Promise.
     */
    async _sendLocalAsyncRequest(url) {
        this._state.asyncTaskID = this._ownerDocument.defaultView.happyDOM.asyncTaskManager.startTask(this.abort.bind(this));
        let data;
        try {
            data = await fs_1.default.promises.readFile(decodeURI(url.pathname.slice(1)));
        }
        catch (error) {
            this._onError(error);
            // Release async task.
            this._ownerDocument.defaultView.happyDOM.asyncTaskManager.endTask(this._state.asyncTaskID);
            return;
        }
        const dataLength = data.length;
        // @TODO: set state headersRecieved first.
        this._setState(XMLHttpRequestReadyStateEnum_js_1.default.loading);
        this.dispatchEvent(new ProgressEvent_js_1.default('progress', {
            lengthComputable: true,
            loaded: dataLength,
            total: dataLength
        }));
        if (data) {
            this._parseLocalRequestData(url, data);
        }
        this._setState(XMLHttpRequestReadyStateEnum_js_1.default.done);
        this._ownerDocument.defaultView.happyDOM.asyncTaskManager.endTask(this._state.asyncTaskID);
    }
    /**
     * Sends a local file system synchronous request.
     *
     * @param url URL.
     */
    _sendLocalSyncRequest(url) {
        let data;
        try {
            data = fs_1.default.readFileSync(decodeURI(url.pathname.slice(1)));
        }
        catch (error) {
            this._onError(error);
            return;
        }
        // @TODO: set state headersRecieved first.
        this._setState(XMLHttpRequestReadyStateEnum_js_1.default.loading);
        if (data) {
            this._parseLocalRequestData(url, data);
        }
        this._setState(XMLHttpRequestReadyStateEnum_js_1.default.done);
    }
    /**
     * Parses local request data.
     *
     * @param url URL.
     * @param data Data.
     */
    _parseLocalRequestData(url, data) {
        // Manually set the response headers.
        this._state.incommingMessage = {
            statusCode: 200,
            headers: {
                'content-length': String(data.length),
                'content-type': XMLHttpRequestURLUtility_js_1.default.getMimeTypeFromExt(url)
                // @TODO: 'last-modified':
            }
        };
        this._state.status = this._state.incommingMessage.statusCode;
        this._state.statusText = 'OK';
        const { response, responseXML, responseText } = this._parseResponseData(data);
        this._state.response = response;
        this._state.responseXML = responseXML;
        this._state.responseText = responseText;
        this._state.responseURL = new URL_js_1.default(this._settings.url, this._ownerDocument.defaultView.location).href;
        this._setState(XMLHttpRequestReadyStateEnum_js_1.default.done);
    }
    /**
     * Returns response based to the "responseType" property.
     *
     * @param data Data.
     * @returns Parsed response.
     */
    _parseResponseData(data) {
        switch (this.responseType) {
            case XMLHttpResponseTypeEnum_js_1.default.arraybuffer:
                // See: https://github.com/jsdom/jsdom/blob/c3c421c364510e053478520500bccafd97f5fa39/lib/jsdom/living/helpers/binary-data.js
                const newAB = new ArrayBuffer(data.length);
                const view = new Uint8Array(newAB);
                view.set(data);
                return {
                    response: view,
                    responseText: null,
                    responseXML: null
                };
            case XMLHttpResponseTypeEnum_js_1.default.blob:
                try {
                    return {
                        response: new this._ownerDocument.defaultView.Blob([new Uint8Array(data)], {
                            type: this.getResponseHeader('content-type') || ''
                        }),
                        responseText: null,
                        responseXML: null
                    };
                }
                catch (e) {
                    return { response: null, responseText: null, responseXML: null };
                }
            case XMLHttpResponseTypeEnum_js_1.default.document:
                const window = this._ownerDocument.defaultView;
                const happyDOMSettings = window.happyDOM.settings;
                let response;
                // Temporary disables unsecure features.
                window.happyDOM.settings = {
                    ...happyDOMSettings,
                    enableFileSystemHttpRequests: false,
                    disableJavaScriptEvaluation: true,
                    disableCSSFileLoading: true,
                    disableJavaScriptFileLoading: true
                };
                const domParser = new window.DOMParser();
                try {
                    response = domParser.parseFromString(this._decodeResponseText(data), 'text/xml');
                }
                catch (e) {
                    return { response: null, responseText: null, responseXML: null };
                }
                // Restores unsecure features.
                window.happyDOM.settings = happyDOMSettings;
                return { response, responseText: null, responseXML: response };
            case XMLHttpResponseTypeEnum_js_1.default.json:
                try {
                    return {
                        response: JSON.parse(this._decodeResponseText(data)),
                        responseText: null,
                        responseXML: null
                    };
                }
                catch (e) {
                    return { response: null, responseText: null, responseXML: null };
                }
            case XMLHttpResponseTypeEnum_js_1.default.text:
            case '':
            default:
                const responseText = this._decodeResponseText(data);
                return {
                    response: responseText,
                    responseText: responseText,
                    responseXML: null
                };
        }
    }
    /**
     * Set Cookies from response headers.
     *
     * @param headers Headers.
     */
    _setCookies(headers) {
        const originURL = new URL_js_1.default(this._settings.url, this._ownerDocument.defaultView.location);
        for (const header of ['set-cookie', 'set-cookie2']) {
            if (Array.isArray(headers[header])) {
                for (const cookie of headers[header]) {
                    this._ownerDocument.defaultView.document._cookie.addCookieString(originURL, cookie);
                }
            }
            else if (headers[header]) {
                this._ownerDocument.defaultView.document._cookie.addCookieString(originURL, headers[header]);
            }
        }
    }
    /**
     * Called when an error is encountered to deal with it.
     *
     * @param error Error.
     */
    _onError(error) {
        this._state.status = 0;
        this._state.statusText = error.toString();
        this._state.responseText = error instanceof Error ? error.stack : '';
        this._state.error = true;
        this._setState(XMLHttpRequestReadyStateEnum_js_1.default.done);
        const errorObject = error instanceof Error ? error : new Error(error);
        const event = new ErrorEvent_js_1.default('error', {
            message: errorObject.message,
            error: errorObject
        });
        this._ownerDocument.defaultView.console.error(errorObject);
        this.dispatchEvent(event);
        this._ownerDocument.defaultView.dispatchEvent(event);
    }
    /**
     * Decodes response text.
     *
     * @param data Data.
     * @returns Decoded text.
     **/
    _decodeResponseText(data) {
        const contextTypeEncodingRegexp = new RegExp(CONTENT_TYPE_ENCODING_REGEXP, 'gi');
        // Compatibility with file:// protocol or unpredictable http request.
        const contentType = this.getResponseHeader('content-type') ?? this._state.requestHeaders['content-type'];
        const charset = contextTypeEncodingRegexp.exec(contentType);
        // Default encoding: utf-8.
        return iconv_lite_1.default.decode(data, charset ? charset[1] : 'utf-8');
    }
}
// Owner document is set by a sub-class in the Window constructor
XMLHttpRequest._ownerDocument = null;
// Constants
XMLHttpRequest.UNSENT = XMLHttpRequestReadyStateEnum_js_1.default.unsent;
XMLHttpRequest.OPENED = XMLHttpRequestReadyStateEnum_js_1.default.opened;
XMLHttpRequest.HEADERS_RECEIVED = XMLHttpRequestReadyStateEnum_js_1.default.headersRecieved;
XMLHttpRequest.LOADING = XMLHttpRequestReadyStateEnum_js_1.default.loading;
XMLHttpRequest.DONE = XMLHttpRequestReadyStateEnum_js_1.default.done;
exports.default = XMLHttpRequest;
//# sourceMappingURL=XMLHttpRequest.cjs.map