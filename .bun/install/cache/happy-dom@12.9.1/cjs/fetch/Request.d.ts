/// <reference types="node" />
/// <reference types="node" />
import IBlob from '../file/IBlob.cjs';
import IDocument from '../nodes/document/IDocument.cjs';
import IRequestInit from './types/IRequestInit.cjs';
import URL from '../url/URL.cjs';
import IRequestInfo from './types/IRequestInfo.cjs';
import IRequest from './types/IRequest.cjs';
import Headers from './Headers.cjs';
import AbortSignal from './AbortSignal.cjs';
import Stream from 'stream';
import IRequestReferrerPolicy from './types/IRequestReferrerPolicy.cjs';
import IRequestRedirect from './types/IRequestRedirect.cjs';
import IRequestCredentials from './types/IRequestCredentials.cjs';
import FormData from '../form-data/FormData.cjs';
/**
 * Fetch request.
 *
 * Based on:
 * https://github.com/node-fetch/node-fetch/blob/main/src/request.js
 *
 * @see https://fetch.spec.whatwg.org/#request-class
 */
export default class Request implements IRequest {
    static _ownerDocument: IDocument;
    readonly _ownerDocument: IDocument;
    readonly method: string;
    readonly body: Stream.Readable | null;
    readonly headers: Headers;
    readonly redirect: IRequestRedirect;
    readonly referrerPolicy: IRequestReferrerPolicy;
    readonly signal: AbortSignal;
    readonly bodyUsed: boolean;
    readonly credentials: IRequestCredentials;
    readonly _contentLength: number | null;
    readonly _contentType: string | null;
    _referrer: '' | 'no-referrer' | 'client' | URL;
    readonly _url: URL;
    readonly _bodyBuffer: Buffer | null;
    /**
     * Constructor.
     *
     * @param input Input.
     * @param [init] Init.
     */
    constructor(input: IRequestInfo, init?: IRequestInit);
    /**
     * Returns referrer.
     *
     * @returns Referrer.
     */
    get referrer(): string;
    /**
     * Returns URL.
     *
     * @returns URL.
     */
    get url(): string;
    /**
     * Returns string tag.
     *
     * @returns String tag.
     */
    get [Symbol.toStringTag](): string;
    /**
     * Returns array buffer.
     *
     * @returns Array buffer.
     */
    arrayBuffer(): Promise<ArrayBuffer>;
    /**
     * Returns blob.
     *
     * @returns Blob.
     */
    blob(): Promise<IBlob>;
    /**
     * Returns buffer.
     *
     * @returns Buffer.
     */
    buffer(): Promise<Buffer>;
    /**
     * Returns text.
     *
     * @returns Text.
     */
    text(): Promise<string>;
    /**
     * Returns json.
     *
     * @returns JSON.
     */
    json(): Promise<string>;
    /**
     * Returns FormData.
     *
     * @returns FormData.
     */
    formData(): Promise<FormData>;
    /**
     * Clones request.
     *
     * @returns Clone.
     */
    clone(): IRequest;
}
//# sourceMappingURL=Request.d.ts.map