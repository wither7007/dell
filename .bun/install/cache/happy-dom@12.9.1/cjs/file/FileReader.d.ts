/// <reference types="node" />
import IDocument from '../nodes/document/IDocument.cjs';
import ProgressEvent from '../event/events/ProgressEvent.cjs';
import Blob from './Blob.cjs';
import EventTarget from '../event/EventTarget.cjs';
/**
 * Reference:
 * https://developer.mozilla.org/sv-SE/docs/Web/API/FileReader.
 *
 * Based on:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/file-api/FileReader-impl.js (MIT licensed).
 */
export default class FileReader extends EventTarget {
    static _ownerDocument: IDocument;
    readonly error: Error;
    readonly result: Buffer | ArrayBuffer | string;
    readonly readyState: number;
    readonly onabort: (event: ProgressEvent) => void;
    readonly onerror: (event: ProgressEvent) => void;
    readonly onload: (event: ProgressEvent) => void;
    readonly onloadstart: (event: ProgressEvent) => void;
    readonly onloadend: (event: ProgressEvent) => void;
    readonly onprogress: (event: ProgressEvent) => void;
    readonly _ownerDocument: IDocument;
    private _isTerminated;
    private _loadTimeout;
    private _parseTimeout;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Reads as ArrayBuffer.
     *
     * @param blob Blob.
     */
    readAsArrayBuffer(blob: Blob): void;
    /**
     * Reads as binary string.
     *
     * @param blob Blob.
     */
    readAsBinaryString(blob: Blob): void;
    /**
     * Reads as data URL.
     *
     * @param blob Blob.
     */
    readAsDataURL(blob: Blob): void;
    /**
     * Reads as text.
     *
     * @param blob Blob.
     * @param [encoding] Encoding.
     */
    readAsText(blob: Blob, encoding?: string): void;
    /**
     * Aborts the file reader.
     */
    abort(): void;
    /**
     * Reads a file.
     *
     * @param blob Blob.
     * @param format Format.
     * @param [encoding] Encoding.
     */
    private _readFile;
}
//# sourceMappingURL=FileReader.d.ts.map