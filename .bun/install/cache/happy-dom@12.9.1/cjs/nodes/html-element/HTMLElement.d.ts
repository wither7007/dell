import Element from '../element/Element.cjs';
import IHTMLElement from './IHTMLElement.cjs';
import CSSStyleDeclaration from '../../css/declaration/CSSStyleDeclaration.cjs';
import Event from '../../event/Event.cjs';
import INamedNodeMap from '../../named-node-map/INamedNodeMap.cjs';
/**
 * HTML Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.
 */
export default class HTMLElement extends Element implements IHTMLElement {
    readonly attributes: INamedNodeMap;
    readonly accessKey = "";
    readonly accessKeyLabel = "";
    readonly contentEditable = "inherit";
    readonly isContentEditable = false;
    readonly offsetHeight = 0;
    readonly offsetWidth = 0;
    readonly offsetLeft = 0;
    readonly offsetTop = 0;
    readonly clientHeight = 0;
    readonly clientWidth = 0;
    readonly clientLeft = 0;
    readonly clientTop = 0;
    _style: CSSStyleDeclaration;
    private _dataset;
    oncopy: (event: Event) => void | null;
    oncut: (event: Event) => void | null;
    onpaste: (event: Event) => void | null;
    oninvalid: (event: Event) => void | null;
    onanimationcancel: (event: Event) => void | null;
    onanimationend: (event: Event) => void | null;
    onanimationiteration: (event: Event) => void | null;
    onanimationstart: (event: Event) => void | null;
    onbeforeinput: (event: Event) => void | null;
    oninput: (event: Event) => void | null;
    onchange: (event: Event) => void | null;
    ongotpointercapture: (event: Event) => void | null;
    onlostpointercapture: (event: Event) => void | null;
    onpointercancel: (event: Event) => void | null;
    onpointerdown: (event: Event) => void | null;
    onpointerenter: (event: Event) => void | null;
    onpointerleave: (event: Event) => void | null;
    onpointermove: (event: Event) => void | null;
    onpointerout: (event: Event) => void | null;
    onpointerover: (event: Event) => void | null;
    onpointerup: (event: Event) => void | null;
    ontransitioncancel: (event: Event) => void | null;
    ontransitionend: (event: Event) => void | null;
    ontransitionrun: (event: Event) => void | null;
    ontransitionstart: (event: Event) => void | null;
    /**
     * Returns tab index.
     *
     * @returns Tab index.
     */
    get tabIndex(): number;
    /**
     * Returns tab index.
     *
     * @param tabIndex Tab index.
     */
    set tabIndex(tabIndex: number);
    /**
     * Returns inner text, which is the rendered appearance of text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @returns Inner text.
     */
    get innerText(): string;
    /**
     * Sets the inner text, which is the rendered appearance of text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @param innerText Inner text.
     */
    set innerText(text: string);
    /**
     * Returns outer text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @returns HTML.
     */
    get outerText(): string;
    /**
     * Sets outer text.
     *
     * @see https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute
     * @param text Text.
     */
    set outerText(text: string);
    /**
     * Returns style.
     *
     * @returns Style.
     */
    get style(): CSSStyleDeclaration;
    /**
     * Sets style.
     *
     * @param cssText Style as text.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#setting_styles
     */
    set style(cssText: string | CSSStyleDeclaration | null);
    /**
     * Returns data set.
     *
     * @returns Data set.
     */
    get dataset(): {
        [key: string]: string;
    };
    /**
     * Returns direction.
     *
     * @returns Direction.
     */
    get dir(): string;
    /**
     * Returns direction.
     *
     * @param direction Direction.
     */
    set dir(direction: string);
    /**
     * Returns hidden.
     *
     * @returns Hidden.
     */
    get hidden(): boolean;
    /**
     * Returns hidden.
     *
     * @param hidden Hidden.
     */
    set hidden(hidden: boolean);
    /**
     * Returns language.
     *
     * @returns Language.
     */
    get lang(): string;
    /**
     * Returns language.
     *
     * @param language Language.
     */
    set lang(lang: string);
    /**
     * Returns title.
     *
     * @returns Title.
     */
    get title(): string;
    /**
     * Returns title.
     *
     * @param title Title.
     */
    set title(title: string);
    /**
     * Triggers a click event.
     */
    click(): void;
    /**
     * Triggers a blur event.
     */
    blur(): void;
    /**
     * Triggers a focus event.
     */
    focus(): void;
    /**
     * @override
     */
    cloneNode(deep?: boolean): IHTMLElement;
}
//# sourceMappingURL=HTMLElement.d.ts.map