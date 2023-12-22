import Event from '../../event/Event.cjs';
import IWindow from '../../window/IWindow.cjs';
import IDocument from '../document/IDocument.cjs';
import HTMLElement from '../html-element/HTMLElement.cjs';
import INode from '../node/INode.cjs';
import IFrameCrossOriginWindow from './IFrameCrossOriginWindow.cjs';
import IHTMLIFrameElement from './IHTMLIFrameElement.cjs';
import INamedNodeMap from '../../named-node-map/INamedNodeMap.cjs';
/**
 * HTML Iframe Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement.
 */
export default class HTMLIFrameElement extends HTMLElement implements IHTMLIFrameElement {
    readonly attributes: INamedNodeMap;
    onload: (event: Event) => void | null;
    onerror: (event: Event) => void | null;
    _contentWindow: IWindow | IFrameCrossOriginWindow | null;
    /**
     * Returns source.
     *
     * @returns Source.
     */
    get src(): string;
    /**
     * Sets source.
     *
     * @param src Source.
     */
    set src(src: string);
    /**
     * Returns allow.
     *
     * @returns Allow.
     */
    get allow(): string;
    /**
     * Sets allow.
     *
     * @param allow Allow.
     */
    set allow(allow: string);
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height(): string;
    /**
     * Sets height.
     *
     * @param height Height.
     */
    set height(height: string);
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width(): string;
    /**
     * Sets width.
     *
     * @param width Width.
     */
    set width(width: string);
    /**
     * Returns name.
     *
     * @returns Name.
     */
    get name(): string;
    /**
     * Sets name.
     *
     * @param name Name.
     */
    set name(name: string);
    /**
     * Returns sandbox.
     *
     * @returns Sandbox.
     */
    get sandbox(): string;
    /**
     * Sets sandbox.
     *
     * @param sandbox Sandbox.
     */
    set sandbox(sandbox: string);
    /**
     * Returns srcdoc.
     *
     * @returns Srcdoc.
     */
    get srcdoc(): string;
    /**
     * Sets sandbox.
     *
     * @param srcdoc Srcdoc.
     */
    set srcdoc(srcdoc: string);
    /**
     * Returns content document.
     *
     * @returns Content document.
     */
    get contentDocument(): IDocument | null;
    /**
     * Returns content window.
     *
     * @returns Content window.
     */
    get contentWindow(): IWindow | IFrameCrossOriginWindow | null;
    /**
     * @override
     */
    _connectToNode(parentNode?: INode): void;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IHTMLIFrameElement;
}
//# sourceMappingURL=HTMLIFrameElement.d.ts.map