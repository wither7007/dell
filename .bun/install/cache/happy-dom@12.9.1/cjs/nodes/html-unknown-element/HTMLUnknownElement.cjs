"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const NodeList_js_1 = __importDefault(require("../node/NodeList.cjs"));
const HTMLCollection_js_1 = __importDefault(require("../element/HTMLCollection.cjs"));
const HTMLElementNamedNodeMap_js_1 = __importDefault(require("../html-element/HTMLElementNamedNodeMap.cjs"));
/**
 * HTML Unknown Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement.
 */
class HTMLUnknownElement extends HTMLElement_js_1.default {
    constructor() {
        super(...arguments);
        this._customElementDefineCallback = null;
    }
    /**
     * Connects this element to another element.
     *
     * @param parentNode Parent node.
     */
    _connectToNode(parentNode = null) {
        const tagName = this.tagName;
        // This element can potentially be a custom element that has not been defined yet
        // Therefore we need to register a callback for when it is defined in CustomElementRegistry and replace it with the registered element (see #404)
        if (tagName.includes('-') && this.ownerDocument.defaultView.customElements._callbacks) {
            const callbacks = this.ownerDocument.defaultView.customElements._callbacks;
            if (parentNode && !this._customElementDefineCallback) {
                const callback = () => {
                    if (this.parentNode) {
                        const newElement = this.ownerDocument.createElement(tagName);
                        newElement._childNodes = this._childNodes;
                        newElement._children = this._children;
                        newElement.isConnected = this.isConnected;
                        newElement._rootNode = this._rootNode;
                        newElement._formNode = this._formNode;
                        newElement._selectNode = this._selectNode;
                        newElement._textAreaNode = this._textAreaNode;
                        newElement._observers = this._observers;
                        newElement._isValue = this._isValue;
                        for (let i = 0, max = this.attributes.length; i < max; i++) {
                            newElement.attributes.setNamedItem(this.attributes[i]);
                        }
                        this._childNodes = new NodeList_js_1.default();
                        this._children = new HTMLCollection_js_1.default();
                        this._rootNode = null;
                        this._formNode = null;
                        this._selectNode = null;
                        this._textAreaNode = null;
                        this._observers = [];
                        this._isValue = null;
                        this.attributes = new HTMLElementNamedNodeMap_js_1.default(this);
                        for (let i = 0, max = this.parentNode._childNodes.length; i < max; i++) {
                            if (this.parentNode._childNodes[i] === this) {
                                this.parentNode._childNodes[i] = newElement;
                                break;
                            }
                        }
                        if (this.parentNode._children) {
                            for (let i = 0, max = this.parentNode._children.length; i < max; i++) {
                                if (this.parentNode._children[i] === this) {
                                    this.parentNode._children[i] = newElement;
                                    break;
                                }
                            }
                        }
                        if (newElement.isConnected && newElement.connectedCallback) {
                            newElement.connectedCallback();
                        }
                        this._connectToNode(null);
                    }
                };
                callbacks[tagName] = callbacks[tagName] || [];
                callbacks[tagName].push(callback);
                this._customElementDefineCallback = callback;
            }
            else if (!parentNode && callbacks[tagName] && this._customElementDefineCallback) {
                const index = callbacks[tagName].indexOf(this._customElementDefineCallback);
                if (index !== -1) {
                    callbacks[tagName].splice(index, 1);
                }
                if (!callbacks[tagName].length) {
                    delete callbacks[tagName];
                }
                this._customElementDefineCallback = null;
            }
        }
        super._connectToNode(parentNode);
    }
}
exports.default = HTMLUnknownElement;
//# sourceMappingURL=HTMLUnknownElement.cjs.map