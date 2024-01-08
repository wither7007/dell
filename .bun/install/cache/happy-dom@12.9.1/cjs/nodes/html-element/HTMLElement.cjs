"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Element_js_1 = __importDefault(require("../element/Element.cjs"));
const CSSStyleDeclaration_js_1 = __importDefault(require("../../css/declaration/CSSStyleDeclaration.cjs"));
const PointerEvent_js_1 = __importDefault(require("../../event/events/PointerEvent.cjs"));
const Dataset_js_1 = __importDefault(require("../element/Dataset.cjs"));
const NodeTypeEnum_js_1 = __importDefault(require("../node/NodeTypeEnum.cjs"));
const DOMException_js_1 = __importDefault(require("../../exception/DOMException.cjs"));
const HTMLElementUtility_js_1 = __importDefault(require("./HTMLElementUtility.cjs"));
const HTMLElementNamedNodeMap_js_1 = __importDefault(require("./HTMLElementNamedNodeMap.cjs"));
/**
 * HTML Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.
 */
class HTMLElement extends Element_js_1.default {
    constructor() {
        super(...arguments);
        this.attributes = new HTMLElementNamedNodeMap_js_1.default(this);
        this.accessKey = '';
        this.accessKeyLabel = '';
        this.contentEditable = 'inherit';
        this.isContentEditable = false;
        this.offsetHeight = 0;
        this.offsetWidth = 0;
        this.offsetLeft = 0;
        this.offsetTop = 0;
        this.clientHeight = 0;
        this.clientWidth = 0;
        this.clientLeft = 0;
        this.clientTop = 0;
        this._style = null;
        this._dataset = null;
        // Events
        this.oncopy = null;
        this.oncut = null;
        this.onpaste = null;
        this.oninvalid = null;
        this.onanimationcancel = null;
        this.onanimationend = null;
        this.onanimationiteration = null;
        this.onanimationstart = null;
        this.onbeforeinput = null;
        this.oninput = null;
        this.onchange = null;
        this.ongotpointercapture = null;
        this.onlostpointercapture = null;
        this.onpointercancel = null;
        this.onpointerdown = null;
        this.onpointerenter = null;
        this.onpointerleave = null;
        this.onpointermove = null;
        this.onpointerout = null;
        this.onpointerover = null;
        this.onpointerup = null;
        this.ontransitioncancel = null;
        this.ontransitionend = null;
        this.ontransitionrun = null;
        this.ontransitionstart = null;
    }
    /**
     * Returns tab index.
     *
     * @returns Tab index.
     */
    get tabIndex() {
        const tabIndex = this.getAttribute('tabindex');
        return tabIndex !== null ? Number(tabIndex) : -1;
    }
    /**
     * Returns tab index.
     *
     * @param tabIndex Tab index.
     */
    set tabIndex(tabIndex) {
        if (tabIndex === -1) {
            this.removeAttribute('tabindex');
        }
        else {
            this.setAttribute('tabindex', String(tabIndex));
        }
    }
    /**
     * Returns inner text, which is the rendered appearance of text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @returns Inner text.
     */
    get innerText() {
        if (!this.isConnected) {
            return this.textContent;
        }
        let result = '';
        for (const childNode of this._childNodes) {
            if (childNode.nodeType === NodeTypeEnum_js_1.default.elementNode) {
                const childElement = childNode;
                const computedStyle = this.ownerDocument.defaultView.getComputedStyle(childElement);
                if (childElement.tagName !== 'SCRIPT' && childElement.tagName !== 'STYLE') {
                    const display = computedStyle.display;
                    if (display !== 'none') {
                        const textTransform = computedStyle.textTransform;
                        if ((display === 'block' || display === 'flex') && result) {
                            result += '\n';
                        }
                        let text = childElement.innerText;
                        switch (textTransform) {
                            case 'uppercase':
                                text = text.toUpperCase();
                                break;
                            case 'lowercase':
                                text = text.toLowerCase();
                                break;
                            case 'capitalize':
                                text = text.replace(/(^|\s)\S/g, (l) => l.toUpperCase());
                                break;
                        }
                        result += text;
                    }
                }
            }
            else if (childNode.nodeType === NodeTypeEnum_js_1.default.textNode) {
                result += childNode.textContent.replace(/[\n\r]/, '');
            }
        }
        return result;
    }
    /**
     * Sets the inner text, which is the rendered appearance of text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @param innerText Inner text.
     */
    set innerText(text) {
        for (const child of this._childNodes.slice()) {
            this.removeChild(child);
        }
        const texts = text.split(/[\n\r]/);
        for (let i = 0, max = texts.length; i < max; i++) {
            if (i !== 0) {
                this.appendChild(this.ownerDocument.createElement('br'));
            }
            this.appendChild(this.ownerDocument.createTextNode(texts[i]));
        }
    }
    /**
     * Returns outer text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @returns HTML.
     */
    get outerText() {
        return this.innerText;
    }
    /**
     * Sets outer text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @param text Text.
     */
    set outerText(text) {
        if (!this.parentNode) {
            throw new DOMException_js_1.default("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
        }
        const texts = text.split(/[\n\r]/);
        for (let i = 0, max = texts.length; i < max; i++) {
            if (i !== 0) {
                this.parentNode.insertBefore(this.ownerDocument.createElement('br'), this);
            }
            this.parentNode.insertBefore(this.ownerDocument.createTextNode(texts[i]), this);
        }
        this.parentNode.removeChild(this);
    }
    /**
     * Returns style.
     *
     * @returns Style.
     */
    get style() {
        if (!this._style) {
            this._style = new CSSStyleDeclaration_js_1.default(this);
        }
        return this._style;
    }
    /**
     * Sets style.
     *
     * @param cssText Style as text.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#setting_styles
     */
    set style(cssText) {
        this.style.cssText = typeof cssText === 'string' ? cssText : '';
    }
    /**
     * Returns data set.
     *
     * @returns Data set.
     */
    get dataset() {
        return (this._dataset ?? (this._dataset = new Dataset_js_1.default(this))).proxy;
    }
    /**
     * Returns direction.
     *
     * @returns Direction.
     */
    get dir() {
        return this.getAttribute('dir') || '';
    }
    /**
     * Returns direction.
     *
     * @param direction Direction.
     */
    set dir(direction) {
        this.setAttribute('dir', direction);
    }
    /**
     * Returns hidden.
     *
     * @returns Hidden.
     */
    get hidden() {
        return this.getAttribute('hidden') !== null;
    }
    /**
     * Returns hidden.
     *
     * @param hidden Hidden.
     */
    set hidden(hidden) {
        if (!hidden) {
            this.removeAttribute('hidden');
        }
        else {
            this.setAttribute('hidden', '');
        }
    }
    /**
     * Returns language.
     *
     * @returns Language.
     */
    get lang() {
        return this.getAttribute('lang') || '';
    }
    /**
     * Returns language.
     *
     * @param language Language.
     */
    set lang(lang) {
        this.setAttribute('lang', lang);
    }
    /**
     * Returns title.
     *
     * @returns Title.
     */
    get title() {
        return this.getAttribute('title') || '';
    }
    /**
     * Returns title.
     *
     * @param title Title.
     */
    set title(title) {
        this.setAttribute('title', title);
    }
    /**
     * Triggers a click event.
     */
    click() {
        const event = new PointerEvent_js_1.default('click', {
            bubbles: true,
            composed: true
        });
        event._target = this;
        event._currentTarget = this;
        this.dispatchEvent(event);
    }
    /**
     * Triggers a blur event.
     */
    blur() {
        HTMLElementUtility_js_1.default.blur(this);
    }
    /**
     * Triggers a focus event.
     */
    focus() {
        HTMLElementUtility_js_1.default.focus(this);
    }
    /**
     * @override
     */
    cloneNode(deep = false) {
        const clone = super.cloneNode(deep);
        clone.accessKey = this.accessKey;
        clone.accessKeyLabel = this.accessKeyLabel;
        clone.contentEditable = this.contentEditable;
        clone.isContentEditable = this.isContentEditable;
        if (this._style) {
            clone.style.cssText = this._style.cssText;
        }
        return clone;
    }
}
exports.default = HTMLElement;
//# sourceMappingURL=HTMLElement.cjs.map