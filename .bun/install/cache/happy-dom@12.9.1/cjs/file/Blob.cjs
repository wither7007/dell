"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/Blob.
 *
 * Based on:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/file-api/Blob-impl.js (MIT licensed).
 */
class Blob {
    /**
     * Constructor.
     *
     * @param bits Bits.
     * @param [options] Options.
     * @param [options.type] MIME type.
     */
    constructor(bits, options) {
        this._buffer = null;
        this.type = '';
        const buffers = [];
        if (bits) {
            for (const bit of bits) {
                let buffer;
                if (bit instanceof ArrayBuffer) {
                    buffer = Buffer.from(new Uint8Array(bit));
                }
                else if (bit instanceof Blob) {
                    buffer = bit._buffer;
                }
                else if (bit instanceof Buffer) {
                    buffer = bit;
                }
                else if (ArrayBuffer.isView(bit)) {
                    buffer = Buffer.from(new Uint8Array(bit.buffer, bit.byteOffset, bit.byteLength));
                }
                else {
                    buffer = Buffer.from(typeof bit === 'string' ? bit : String(bit));
                }
                buffers.push(buffer);
            }
        }
        this._buffer = Buffer.concat(buffers);
        if (options && options.type && options.type.match(/^[\u0020-\u007E]*$/)) {
            this.type = String(options.type).toLowerCase();
        }
    }
    /**
     * Returns size.
     *
     * @returns Size.
     */
    get size() {
        return this._buffer.length;
    }
    /**
     * Slices the blob.
     *
     * @param start Start.
     * @param end End.
     * @param contentType Content type.
     * @returns New Blob.
     */
    slice(start = 0, end = null, contentType = '') {
        const size = this.size;
        let relativeStart;
        let relativeEnd;
        let relativeContentType;
        if (start === undefined) {
            relativeStart = 0;
        }
        else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        }
        else {
            relativeStart = Math.min(start, size);
        }
        if (end === null) {
            relativeEnd = size;
        }
        else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        }
        else {
            relativeEnd = Math.min(end, size);
        }
        if (contentType === undefined) {
            relativeContentType = '';
        }
        else {
            // Sanitization (lower case and invalid char check) is done in the
            // Constructor
            relativeContentType = contentType;
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this._buffer;
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], { type: relativeContentType });
        blob._buffer = slicedBuffer;
        return blob;
    }
    /**
     * Returns a Promise that resolves to a ArrayBuffer.
     *
     * @returns ArrayBuffer.
     */
    // Reference:
    // https://github.com/web-std/io/blob/c88170bf24f064adfbb3586a21fb76650ca5a9ab/packages/blob/src/blob.js#L139-L148
    // https://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer
    /**
     *
     */
    async arrayBuffer() {
        return new Uint8Array(this._buffer).buffer;
    }
    /**
     * Returns a Promise that resolves to a text.
     *
     * @returns Text.
     */
    async text() {
        return this._buffer.toString();
    }
    /**
     * Returns the object converted to string.
     *
     * @returns String.
     */
    toString() {
        return '[object Blob]';
    }
}
exports.default = Blob;
//# sourceMappingURL=Blob.cjs.map