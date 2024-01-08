import XMLHttpRequestEventTarget from './XMLHttpRequestEventTarget.cjs';
import XMLHttpRequestReadyStateEnum from './XMLHttpRequestReadyStateEnum.cjs';
import IDocument from '../nodes/document/IDocument.cjs';
import Blob from '../file/Blob.cjs';
import XMLHttpRequestUpload from './XMLHttpRequestUpload.cjs';
import XMLHttpResponseTypeEnum from './XMLHttpResponseTypeEnum.cjs';
/**
 * XMLHttpRequest.
 *
 * Based on:
 * https://github.com/mjwwit/node-XMLHttpRequest/blob/master/lib/XMLHttpRequest.js
 */
export default class XMLHttpRequest extends XMLHttpRequestEventTarget {
    static _ownerDocument: IDocument;
    static UNSENT: XMLHttpRequestReadyStateEnum;
    static OPENED: XMLHttpRequestReadyStateEnum;
    static HEADERS_RECEIVED: XMLHttpRequestReadyStateEnum;
    static LOADING: XMLHttpRequestReadyStateEnum;
    static DONE: XMLHttpRequestReadyStateEnum;
    upload: XMLHttpRequestUpload;
    private readonly _ownerDocument;
    private _state;
    private _settings;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Returns the status.
     *
     * @returns Status.
     */
    get status(): number;
    /**
     * Returns the status text.
     *
     * @returns Status text.
     */
    get statusText(): string;
    /**
     * Returns the response.
     *
     * @returns Response.
     */
    get response(): ArrayBuffer | Blob | IDocument | object | string;
    /**
     * Returns the response URL.
     *
     * @returns Response URL.
     */
    get responseURL(): string;
    /**
     * Returns the ready state.
     *
     * @returns Ready state.
     */
    get readyState(): XMLHttpRequestReadyStateEnum;
    /**
     * Get the response text.
     *
     * @throws {DOMException} If the response type is not text or empty.
     * @returns The response text.
     */
    get responseText(): string;
    /**
     * Get the responseXML.
     *
     * @throws {DOMException} If the response type is not text or empty.
     * @returns Response XML.
     */
    get responseXML(): IDocument;
    /**
     * Set response type.
     *
     * @param type Response type.
     * @throws {DOMException} If the state is not unsent or opened.
     * @throws {DOMException} If the request is synchronous.
     */
    set responseType(type: XMLHttpResponseTypeEnum | '');
    /**
     * Get response Type.
     *
     * @returns Response type.
     */
    get responseType(): XMLHttpResponseTypeEnum | '';
    /**
     * Opens the connection.
     *
     * @param method Connection method (eg GET, POST).
     * @param url URL for the connection.
     * @param [async=true] Asynchronous connection.
     * @param [user] Username for basic authentication (optional).
     * @param [password] Password for basic authentication (optional).
     */
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    /**
     * Sets a header for the request.
     *
     * @param header Header name
     * @param value Header value
     * @returns Header added.
     */
    setRequestHeader(header: string, value: string): boolean;
    /**
     * Gets a header from the server response.
     *
     * @param header header Name of header to get.
     * @returns string Text of the header or null if it doesn't exist.
     */
    getResponseHeader(header: string): string;
    /**
     * Gets all the response headers.
     *
     * @returns A string with all response headers separated by CR+LF.
     */
    getAllResponseHeaders(): string;
    /**
     * Sends the request to the server.
     *
     * @param data Optional data to send as request body.
     */
    send(data?: string): void;
    /**
     * Aborts a request.
     */
    abort(): void;
    /**
     * Changes readyState and calls onreadystatechange.
     *
     * @param state
     */
    private _setState;
    /**
     * Default request headers.
     *
     * @returns Default request headers.
     */
    private _getDefaultRequestHeaders;
    /**
     * Sends a synchronous request.
     *
     * @param options
     * @param ssl
     * @param data
     */
    private _sendSyncRequest;
    /**
     * Sends an async request.
     *
     * @param options
     * @param ssl
     * @param data
     */
    private _sendAsyncRequest;
    /**
     * Handles an async response.
     *
     * @param options Options.
     * @param ssl SSL.
     * @param data Data.
     * @param response Response.
     * @returns Promise.
     */
    private _onAsyncResponse;
    /**
     * Sends a local file system async request.
     *
     * @param url URL.
     * @returns Promise.
     */
    private _sendLocalAsyncRequest;
    /**
     * Sends a local file system synchronous request.
     *
     * @param url URL.
     */
    private _sendLocalSyncRequest;
    /**
     * Parses local request data.
     *
     * @param url URL.
     * @param data Data.
     */
    private _parseLocalRequestData;
    /**
     * Returns response based to the "responseType" property.
     *
     * @param data Data.
     * @returns Parsed response.
     */
    private _parseResponseData;
    /**
     * Set Cookies from response headers.
     *
     * @param headers Headers.
     */
    private _setCookies;
    /**
     * Called when an error is encountered to deal with it.
     *
     * @param error Error.
     */
    private _onError;
    /**
     * Decodes response text.
     *
     * @param data Data.
     * @returns Decoded text.
     **/
    private _decodeResponseText;
}
//# sourceMappingURL=XMLHttpRequest.d.ts.map