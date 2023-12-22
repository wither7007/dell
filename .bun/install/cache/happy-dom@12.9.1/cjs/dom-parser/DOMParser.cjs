"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const XMLParser_js_1 = __importDefault(require("../xml-parser/XMLParser.cjs"));
const Node_js_1 = __importDefault(require("../nodes/node/Node.cjs"));
const DOMException_js_1 = __importDefault(require("../exception/DOMException.cjs"));
const HTMLDocument_js_1 = __importDefault(require("../nodes/html-document/HTMLDocument.cjs"));
const XMLDocument_js_1 = __importDefault(require("../nodes/xml-document/XMLDocument.cjs"));
const SVGDocument_js_1 = __importDefault(require("../nodes/svg-document/SVGDocument.cjs"));
/**
 * DOM parser.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/DOMParser.
 */
class DOMParser {
    /**
     * Constructor.
     */
    constructor() {
        this._ownerDocument = null;
        this._ownerDocument = this.constructor._ownerDocument;
    }
    /**
     * Parses HTML and returns a root element.
     *
     * @param string HTML data.
     * @param mimeType Mime type.
     * @returns Root element.
     */
    parseFromString(string, mimeType) {
        if (!mimeType) {
            throw new DOMException_js_1.default('Second parameter "mimeType" is mandatory.');
        }
        const ownerDocument = this._ownerDocument;
        const newDocument = this._createDocument(mimeType);
        newDocument.defaultView = ownerDocument.defaultView;
        newDocument._childNodes.length = 0;
        newDocument._children.length = 0;
        const root = XMLParser_js_1.default.parse(newDocument, string, { evaluateScripts: true });
        let documentElement = null;
        let documentTypeNode = null;
        for (const node of root._childNodes) {
            if (node['tagName'] === 'HTML') {
                documentElement = node;
            }
            else if (node.nodeType === Node_js_1.default.DOCUMENT_TYPE_NODE) {
                documentTypeNode = node;
            }
            if (documentElement && documentTypeNode) {
                break;
            }
        }
        if (documentElement) {
            if (documentTypeNode) {
                newDocument.appendChild(documentTypeNode);
            }
            newDocument.appendChild(documentElement);
            const body = newDocument.body;
            if (body) {
                for (const child of root._childNodes.slice()) {
                    body.appendChild(child);
                }
            }
        }
        else {
            switch (mimeType) {
                case 'image/svg+xml':
                    {
                        for (const node of root._childNodes.slice()) {
                            newDocument.appendChild(node);
                        }
                    }
                    break;
                case 'text/html':
                default:
                    {
                        const documentElement = newDocument.createElement('html');
                        const bodyElement = newDocument.createElement('body');
                        const headElement = newDocument.createElement('head');
                        documentElement.appendChild(headElement);
                        documentElement.appendChild(bodyElement);
                        newDocument.appendChild(documentElement);
                        for (const node of root._childNodes.slice()) {
                            bodyElement.appendChild(node);
                        }
                    }
                    break;
            }
        }
        return newDocument;
    }
    /**
     *
     * @param mimeType Mime type.
     * @returns IDocument.
     */
    _createDocument(mimeType) {
        switch (mimeType) {
            case 'text/html':
                HTMLDocument_js_1.default._defaultView = this._ownerDocument.defaultView;
                return new HTMLDocument_js_1.default();
            case 'image/svg+xml':
                SVGDocument_js_1.default._defaultView = this._ownerDocument.defaultView;
                return new SVGDocument_js_1.default();
            case 'text/xml':
            case 'application/xml':
            case 'application/xhtml+xml':
                XMLDocument_js_1.default._defaultView = this._ownerDocument.defaultView;
                return new XMLDocument_js_1.default();
            default:
                throw new DOMException_js_1.default(`Unknown mime type "${mimeType}".`);
        }
    }
}
// Owner document is set by a sub-class in the Window constructor
DOMParser._ownerDocument = null;
exports.default = DOMParser;
//# sourceMappingURL=DOMParser.cjs.map