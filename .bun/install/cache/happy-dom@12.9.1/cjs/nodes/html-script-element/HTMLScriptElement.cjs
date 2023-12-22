"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const HTMLScriptElementUtility_js_1 = __importDefault(require("./HTMLScriptElementUtility.cjs"));
const HTMLScriptElementNamedNodeMap_js_1 = __importDefault(require("./HTMLScriptElementNamedNodeMap.cjs"));
const WindowErrorUtility_js_1 = __importDefault(require("../../window/WindowErrorUtility.cjs"));
/**
 * HTML Script Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement.
 */
class HTMLScriptElement extends HTMLElement_js_1.default {
    constructor() {
        super(...arguments);
        this.attributes = new HTMLScriptElementNamedNodeMap_js_1.default(this);
        this.onerror = null;
        this.onload = null;
        this._evaluateScript = true;
    }
    /**
     * Returns type.
     *
     * @returns Type.
     */
    get type() {
        return this.getAttribute('type') || '';
    }
    /**
     * Sets type.
     *
     * @param type Type.
     */
    set type(type) {
        this.setAttribute('type', type);
    }
    /**
     * Returns source.
     *
     * @returns Source.
     */
    get src() {
        return this.getAttribute('src') || '';
    }
    /**
     * Sets source.
     *
     * @param source Source.
     */
    set src(src) {
        this.setAttribute('src', src);
    }
    /**
     * Returns charset.
     *
     * @returns Charset.
     */
    get charset() {
        return this.getAttribute('charset') || '';
    }
    /**
     * Sets charset.
     *
     * @param charset Charset.
     */
    set charset(charset) {
        this.setAttribute('charset', charset);
    }
    /**
     * Returns lang.
     *
     * @returns Lang.
     */
    get lang() {
        return this.getAttribute('lang') || '';
    }
    /**
     * Sets lang.
     *
     * @param lang Lang.
     */
    set lang(lang) {
        this.setAttribute('lang', lang);
    }
    /**
     * Returns async.
     *
     * @returns Async.
     */
    get async() {
        return this.getAttribute('async') !== null;
    }
    /**
     * Sets async.
     *
     * @param async Async.
     */
    set async(async) {
        if (!async) {
            this.removeAttribute('async');
        }
        else {
            this.setAttribute('async', '');
        }
    }
    /**
     * Returns defer.
     *
     * @returns Defer.
     */
    get defer() {
        return this.getAttribute('defer') !== null;
    }
    /**
     * Sets defer.
     *
     * @param defer Defer.
     */
    set defer(defer) {
        if (!defer) {
            this.removeAttribute('defer');
        }
        else {
            this.setAttribute('defer', '');
        }
    }
    /**
     * Returns text.
     *
     * @returns Text.
     */
    get text() {
        return this.textContent;
    }
    /**
     * Sets text.
     *
     * @param text Text.
     */
    set text(text) {
        this.textContent = text;
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        return super.cloneNode(deep);
    }
    /**
     * @override
     */
    _connectToNode(parentNode = null) {
        const isConnected = this.isConnected;
        const isParentConnected = parentNode ? parentNode.isConnected : false;
        super._connectToNode(parentNode);
        if (isParentConnected && isConnected !== isParentConnected && this._evaluateScript) {
            const src = this.getAttribute('src');
            if (src !== null) {
                HTMLScriptElementUtility_js_1.default.loadExternalScript(this);
            }
            else if (!this.ownerDocument.defaultView.happyDOM.settings.disableJavaScriptEvaluation) {
                const textContent = this.textContent;
                const type = this.getAttribute('type');
                if (textContent &&
                    (type === null ||
                        type === 'application/x-ecmascript' ||
                        type === 'application/x-javascript' ||
                        type.startsWith('text/javascript'))) {
                    this.ownerDocument['_currentScript'] = this;
                    if (this.ownerDocument.defaultView.happyDOM.settings.disableErrorCapturing) {
                        this.ownerDocument.defaultView.eval(textContent);
                    }
                    else {
                        WindowErrorUtility_js_1.default.captureError(this.ownerDocument.defaultView, () => this.ownerDocument.defaultView.eval(textContent));
                    }
                    this.ownerDocument['_currentScript'] = null;
                }
            }
        }
    }
}
exports.default = HTMLScriptElement;
//# sourceMappingURL=HTMLScriptElement.cjs.map