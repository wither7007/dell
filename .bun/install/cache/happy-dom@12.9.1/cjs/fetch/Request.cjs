"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URL_js_1 = __importDefault(require("../url/URL.cjs"));
const DOMException_js_1 = __importDefault(require("../exception/DOMException.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../exception/DOMExceptionNameEnum.cjs"));
const Headers_js_1 = __importDefault(require("./Headers.cjs"));
const FetchBodyUtility_js_1 = __importDefault(require("./utilities/FetchBodyUtility.cjs"));
const AbortSignal_js_1 = __importDefault(require("./AbortSignal.cjs"));
const Blob_js_1 = __importDefault(require("../file/Blob.cjs"));
const util_1 = require("util");
const FetchRequestValidationUtility_js_1 = __importDefault(require("./utilities/FetchRequestValidationUtility.cjs"));
const FetchRequestReferrerUtility_js_1 = __importDefault(require("./utilities/FetchRequestReferrerUtility.cjs"));
const FetchRequestHeaderUtility_js_1 = __importDefault(require("./utilities/FetchRequestHeaderUtility.cjs"));
const MultipartFormDataParser_js_1 = __importDefault(require("./multipart/MultipartFormDataParser.cjs"));
/**
 * Fetch request.
 *
 * Based on:
 * https://github.com/node-fetch/node-fetch/blob/main/src/request.js
 *
 * @see https://fetch.spec.whatwg.org/#request-class
 */
class Request {
    /**
     * Constructor.
     *
     * @param input Input.
     * @param [init] Init.
     */
    constructor(input, init) {
        this._ownerDocument = null;
        this.bodyUsed = false;
        // Internal properties
        this._contentLength = null;
        this._contentType = null;
        this._referrer = 'client';
        this._ownerDocument = this.constructor._ownerDocument;
        if (!input) {
            throw new TypeError(`Failed to contruct 'Request': 1 argument required, only 0 present.`);
        }
        this.method = (init?.method || input.method || 'GET').toUpperCase();
        const { stream, buffer, contentType, contentLength } = FetchBodyUtility_js_1.default.getBodyStream(input instanceof Request && (input._bodyBuffer || input.body)
            ? input._bodyBuffer || FetchBodyUtility_js_1.default.cloneRequestBodyStream(input)
            : init?.body);
        this._bodyBuffer = buffer;
        this.body = stream;
        this.credentials = init?.credentials || input.credentials || 'same-origin';
        this.headers = new Headers_js_1.default(init?.headers || input.headers || {});
        FetchRequestHeaderUtility_js_1.default.removeForbiddenHeaders(this.headers);
        if (contentLength) {
            this._contentLength = contentLength;
        }
        else if (!this.body && (this.method === 'POST' || this.method === 'PUT')) {
            this._contentLength = 0;
        }
        if (contentType) {
            if (!this.headers.has('Content-Type')) {
                this.headers.set('Content-Type', contentType);
            }
            this._contentType = contentType;
        }
        else if (input instanceof Request && input._contentType) {
            this._contentType = input._contentType;
        }
        this.redirect = init?.redirect || input.redirect || 'follow';
        this.referrerPolicy = ((init?.referrerPolicy || input.referrerPolicy || '').toLowerCase());
        this.signal = init?.signal || input.signal || new AbortSignal_js_1.default();
        this._referrer = FetchRequestReferrerUtility_js_1.default.getInitialReferrer(this._ownerDocument, init?.referrer !== null && init?.referrer !== undefined
            ? init?.referrer
            : input.referrer);
        if (input instanceof URL_js_1.default) {
            this._url = input;
        }
        else {
            try {
                if (input instanceof Request && input.url) {
                    this._url = new URL_js_1.default(input.url, this._ownerDocument.location);
                }
                else {
                    this._url = new URL_js_1.default(input, this._ownerDocument.location);
                }
            }
            catch (error) {
                throw new DOMException_js_1.default(`Failed to construct 'Request. Invalid URL "${input}" on document location '${this._ownerDocument.location}'.${this._ownerDocument.location.origin === 'null'
                    ? ' Relative URLs are not permitted on current document location.'
                    : ''}`, DOMExceptionNameEnum_js_1.default.notSupportedError);
            }
        }
        FetchRequestValidationUtility_js_1.default.validateBody(this);
        FetchRequestValidationUtility_js_1.default.validateURL(this._url);
        FetchRequestValidationUtility_js_1.default.validateReferrerPolicy(this.referrerPolicy);
        FetchRequestValidationUtility_js_1.default.validateRedirect(this.redirect);
    }
    /**
     * Returns referrer.
     *
     * @returns Referrer.
     */
    get referrer() {
        if (!this._referrer || this._referrer === 'no-referrer') {
            return '';
        }
        if (this._referrer === 'client') {
            return 'about:client';
        }
        return this._referrer.toString();
    }
    /**
     * Returns URL.
     *
     * @returns URL.
     */
    get url() {
        return this._url.href;
    }
    /**
     * Returns string tag.
     *
     * @returns String tag.
     */
    get [Symbol.toStringTag]() {
        return 'Request';
    }
    /**
     * Returns array buffer.
     *
     * @returns Array buffer.
     */
    async arrayBuffer() {
        if (this.bodyUsed) {
            throw new DOMException_js_1.default(`Body has already been used for "${this.url}".`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this.bodyUsed = true;
        const taskManager = this._ownerDocument.defaultView.happyDOM.asyncTaskManager;
        const taskID = taskManager.startTask(() => this.signal._abort());
        let buffer;
        try {
            buffer = await FetchBodyUtility_js_1.default.consumeBodyStream(this.body);
        }
        catch (error) {
            taskManager.endTask(taskID);
            throw error;
        }
        taskManager.endTask(taskID);
        return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }
    /**
     * Returns blob.
     *
     * @returns Blob.
     */
    async blob() {
        const type = this.headers.get('content-type') || '';
        const buffer = await this.arrayBuffer();
        return new Blob_js_1.default([buffer], { type });
    }
    /**
     * Returns buffer.
     *
     * @returns Buffer.
     */
    async buffer() {
        if (this.bodyUsed) {
            throw new DOMException_js_1.default(`Body has already been used for "${this.url}".`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this.bodyUsed = true;
        const taskManager = this._ownerDocument.defaultView.happyDOM.asyncTaskManager;
        const taskID = taskManager.startTask(() => this.signal._abort());
        let buffer;
        try {
            buffer = await FetchBodyUtility_js_1.default.consumeBodyStream(this.body);
        }
        catch (error) {
            taskManager.endTask(taskID);
            throw error;
        }
        taskManager.endTask(taskID);
        return buffer;
    }
    /**
     * Returns text.
     *
     * @returns Text.
     */
    async text() {
        if (this.bodyUsed) {
            throw new DOMException_js_1.default(`Body has already been used for "${this.url}".`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this.bodyUsed = true;
        const taskManager = this._ownerDocument.defaultView.happyDOM.asyncTaskManager;
        const taskID = taskManager.startTask(() => this.signal._abort());
        let buffer;
        try {
            buffer = await FetchBodyUtility_js_1.default.consumeBodyStream(this.body);
        }
        catch (error) {
            taskManager.endTask(taskID);
            throw error;
        }
        taskManager.endTask(taskID);
        return new util_1.TextDecoder().decode(buffer);
    }
    /**
     * Returns json.
     *
     * @returns JSON.
     */
    async json() {
        const text = await this.text();
        return JSON.parse(text);
    }
    /**
     * Returns FormData.
     *
     * @returns FormData.
     */
    async formData() {
        if (this.bodyUsed) {
            throw new DOMException_js_1.default(`Body has already been used for "${this.url}".`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this.bodyUsed = true;
        const taskManager = this._ownerDocument.defaultView.happyDOM.asyncTaskManager;
        const taskID = taskManager.startTask(() => this.signal._abort());
        let formData;
        try {
            const type = this._contentType;
            formData = await MultipartFormDataParser_js_1.default.streamToFormData(this.body, type);
        }
        catch (error) {
            taskManager.endTask(taskID);
            throw error;
        }
        taskManager.endTask(taskID);
        return formData;
    }
    /**
     * Clones request.
     *
     * @returns Clone.
     */
    clone() {
        return new Request(this);
    }
}
// Owner document is set by a sub-class in the Window constructor
Request._ownerDocument = null;
exports.default = Request;
//# sourceMappingURL=Request.cjs.map