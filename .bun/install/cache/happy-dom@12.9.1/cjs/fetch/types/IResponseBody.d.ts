/// <reference types="node" />
/// <reference types="node" />
import { URLSearchParams } from 'url';
import FormData from '../../form-data/FormData.cjs';
import Blob from '../../file/Blob.cjs';
type IResponseBody = ArrayBuffer | ArrayBufferView | NodeJS.ReadableStream | string | URLSearchParams | Blob | FormData | null;
export default IResponseBody;
//# sourceMappingURL=IResponseBody.d.ts.map