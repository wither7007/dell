/// <reference types="node" />
/// <reference types="node" />
import IHeaders from './IHeaders.cjs';
import IBlob from '../../file/IBlob.cjs';
import Stream from 'stream';
/**
 * Fetch response.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
 */
export default interface IResponse {
    readonly headers: IHeaders;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: 'basic' | 'cors' | 'default' | 'error' | 'opaque' | 'opaqueredirect';
    readonly url: string;
    readonly body: Stream.Readable | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<IBlob>;
    buffer(): Promise<Buffer>;
    json(): Promise<unknown>;
    text(): Promise<string>;
    clone(): IResponse;
}
//# sourceMappingURL=IResponse.d.ts.map