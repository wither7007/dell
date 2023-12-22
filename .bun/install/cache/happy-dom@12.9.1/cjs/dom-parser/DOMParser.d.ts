import IDocument from '../nodes/document/IDocument.cjs';
/**
 * DOM parser.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/DOMParser.
 */
export default class DOMParser {
    static _ownerDocument: IDocument;
    readonly _ownerDocument: IDocument;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Parses HTML and returns a root element.
     *
     * @param string HTML data.
     * @param mimeType Mime type.
     * @returns Root element.
     */
    parseFromString(string: string, mimeType: string): IDocument;
    /**
     *
     * @param mimeType Mime type.
     * @returns IDocument.
     */
    private _createDocument;
}
//# sourceMappingURL=DOMParser.d.ts.map