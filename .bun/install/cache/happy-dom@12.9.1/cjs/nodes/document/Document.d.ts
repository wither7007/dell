import IWindow from '../../window/IWindow.cjs';
import Node from '../node/Node.cjs';
import NodeIterator from '../../tree-walker/NodeIterator.cjs';
import TreeWalker from '../../tree-walker/TreeWalker.cjs';
import Event from '../../event/Event.cjs';
import DOMImplementation from '../../dom-implementation/DOMImplementation.cjs';
import INodeFilter from '../../tree-walker/INodeFilter.cjs';
import IDocument from './IDocument.cjs';
import CSSStyleSheet from '../../css/CSSStyleSheet.cjs';
import CookieJar from '../../cookie/CookieJar.cjs';
import IElement from '../element/IElement.cjs';
import IHTMLScriptElement from '../html-script-element/IHTMLScriptElement.cjs';
import IHTMLElement from '../html-element/IHTMLElement.cjs';
import IDocumentType from '../document-type/IDocumentType.cjs';
import INode from '../node/INode.cjs';
import IComment from '../comment/IComment.cjs';
import IText from '../text/IText.cjs';
import IDocumentFragment from '../document-fragment/IDocumentFragment.cjs';
import INodeList from '../node/INodeList.cjs';
import IHTMLCollection from '../element/IHTMLCollection.cjs';
import DocumentReadyStateEnum from './DocumentReadyStateEnum.cjs';
import DocumentReadyStateManager from './DocumentReadyStateManager.cjs';
import Location from '../../location/Location.cjs';
import Selection from '../../selection/Selection.cjs';
import Range from '../../range/Range.cjs';
import IAttr from '../attr/IAttr.cjs';
import IProcessingInstruction from '../processing-instruction/IProcessingInstruction.cjs';
import VisibilityStateEnum from './VisibilityStateEnum.cjs';
import NodeTypeEnum from '../node/NodeTypeEnum.cjs';
/**
 * Document.
 */
export default class Document extends Node implements IDocument {
    static _defaultView: IWindow;
    static _windowClass: {} | null;
    nodeType: NodeTypeEnum;
    adoptedStyleSheets: CSSStyleSheet[];
    implementation: DOMImplementation;
    readonly readyState = DocumentReadyStateEnum.interactive;
    readonly isConnected: boolean;
    readonly defaultView: IWindow;
    readonly referrer = "";
    readonly _windowClass: {} | null;
    readonly _readyStateManager: DocumentReadyStateManager;
    readonly _children: IHTMLCollection<IElement>;
    _activeElement: IHTMLElement;
    _nextActiveElement: IHTMLElement;
    _currentScript: IHTMLScriptElement;
    _cacheID: number;
    _cookie: CookieJar;
    protected _isFirstWrite: boolean;
    protected _isFirstWriteAfterOpen: boolean;
    private _selection;
    onreadystatechange: (event: Event) => void;
    onpointerlockchange: (event: Event) => void;
    onpointerlockerror: (event: Event) => void;
    onbeforecopy: (event: Event) => void;
    onbeforecut: (event: Event) => void;
    onbeforepaste: (event: Event) => void;
    onfreeze: (event: Event) => void;
    onresume: (event: Event) => void;
    onsearch: (event: Event) => void;
    onvisibilitychange: (event: Event) => void;
    onfullscreenchange: (event: Event) => void;
    onfullscreenerror: (event: Event) => void;
    onwebkitfullscreenchange: (event: Event) => void;
    onwebkitfullscreenerror: (event: Event) => void;
    onbeforexrselect: (event: Event) => void;
    onabort: (event: Event) => void;
    onbeforeinput: (event: Event) => void;
    onblur: (event: Event) => void;
    oncancel: (event: Event) => void;
    oncanplay: (event: Event) => void;
    oncanplaythrough: (event: Event) => void;
    onchange: (event: Event) => void;
    onclick: (event: Event) => void;
    onclose: (event: Event) => void;
    oncontextlost: (event: Event) => void;
    oncontextmenu: (event: Event) => void;
    oncontextrestored: (event: Event) => void;
    oncuechange: (event: Event) => void;
    ondblclick: (event: Event) => void;
    ondrag: (event: Event) => void;
    ondragend: (event: Event) => void;
    ondragenter: (event: Event) => void;
    ondragleave: (event: Event) => void;
    ondragover: (event: Event) => void;
    ondragstart: (event: Event) => void;
    ondrop: (event: Event) => void;
    ondurationchange: (event: Event) => void;
    onemptied: (event: Event) => void;
    onended: (event: Event) => void;
    onerror: (event: Event) => void;
    onfocus: (event: Event) => void;
    onformdata: (event: Event) => void;
    oninput: (event: Event) => void;
    oninvalid: (event: Event) => void;
    onkeydown: (event: Event) => void;
    onkeypress: (event: Event) => void;
    onkeyup: (event: Event) => void;
    onload: (event: Event) => void;
    onloadeddata: (event: Event) => void;
    onloadedmetadata: (event: Event) => void;
    onloadstart: (event: Event) => void;
    onmousedown: (event: Event) => void;
    onmouseenter: (event: Event) => void;
    onmouseleave: (event: Event) => void;
    onmousemove: (event: Event) => void;
    onmouseout: (event: Event) => void;
    onmouseover: (event: Event) => void;
    onmouseup: (event: Event) => void;
    onmousewheel: (event: Event) => void;
    onpause: (event: Event) => void;
    onplay: (event: Event) => void;
    onplaying: (event: Event) => void;
    onprogress: (event: Event) => void;
    onratechange: (event: Event) => void;
    onreset: (event: Event) => void;
    onresize: (event: Event) => void;
    onscroll: (event: Event) => void;
    onsecuritypolicyviolation: (event: Event) => void;
    onseeked: (event: Event) => void;
    onseeking: (event: Event) => void;
    onselect: (event: Event) => void;
    onslotchange: (event: Event) => void;
    onstalled: (event: Event) => void;
    onsubmit: (event: Event) => void;
    onsuspend: (event: Event) => void;
    ontimeupdate: (event: Event) => void;
    ontoggle: (event: Event) => void;
    onvolumechange: (event: Event) => void;
    onwaiting: (event: Event) => void;
    onwebkitanimationend: (event: Event) => void;
    onwebkitanimationiteration: (event: Event) => void;
    onwebkitanimationstart: (event: Event) => void;
    onwebkittransitionend: (event: Event) => void;
    onwheel: (event: Event) => void;
    onauxclick: (event: Event) => void;
    ongotpointercapture: (event: Event) => void;
    onlostpointercapture: (event: Event) => void;
    onpointerdown: (event: Event) => void;
    onpointermove: (event: Event) => void;
    onpointerrawupdate: (event: Event) => void;
    onpointerup: (event: Event) => void;
    onpointercancel: (event: Event) => void;
    onpointerover: (event: Event) => void;
    onpointerout: (event: Event) => void;
    onpointerenter: (event: Event) => void;
    onpointerleave: (event: Event) => void;
    onselectstart: (event: Event) => void;
    onselectionchange: (event: Event) => void;
    onanimationend: (event: Event) => void;
    onanimationiteration: (event: Event) => void;
    onanimationstart: (event: Event) => void;
    ontransitionrun: (event: Event) => void;
    ontransitionstart: (event: Event) => void;
    ontransitionend: (event: Event) => void;
    ontransitioncancel: (event: Event) => void;
    oncopy: (event: Event) => void;
    oncut: (event: Event) => void;
    onpaste: (event: Event) => void;
    onbeforematch: (event: Event) => void;
    /**
     * Creates an instance of Document.
     *
     */
    constructor();
    /**
     * Returns document children.
     */
    get children(): IHTMLCollection<IElement>;
    /**
     * Returns character set.
     *
     * @deprecated
     * @returns Character set.
     */
    get charset(): string;
    /**
     * Returns character set.
     *
     * @returns Character set.
     */
    get characterSet(): string;
    /**
     * Returns title.
     *
     * @returns Title.
     */
    get title(): string;
    /**
     * Returns set title.
     *
     */
    set title(title: string);
    /**
     * Returns a collection of all area elements and a elements in a document with a value for the href attribute.
     */
    get links(): IHTMLCollection<IHTMLElement>;
    /**
     * Last element child.
     *
     * @returns Element.
     */
    get childElementCount(): number;
    /**
     * First element child.
     *
     * @returns Element.
     */
    get firstElementChild(): IElement;
    /**
     * Last element child.
     *
     * @returns Element.
     */
    get lastElementChild(): IElement;
    /**
     * Returns cookie string.
     *
     * @returns Cookie.
     */
    get cookie(): string;
    /**
     * Sets a cookie string.
     *
     * @param cookie Cookie string.
     */
    set cookie(cookie: string);
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName(): string;
    /**
     * Returns <html> element.
     *
     * @returns Element.
     */
    get documentElement(): IHTMLElement;
    /**
     * Returns document type element.
     *
     * @returns Document type.
     */
    get doctype(): IDocumentType;
    /**
     * Returns <body> element.
     *
     * @returns Element.
     */
    get body(): IHTMLElement;
    /**
     * Returns <head> element.
     *
     * @returns Element.
     */
    get head(): IHTMLElement;
    /**
     * Returns CSS style sheets.
     *
     * @returns CSS style sheets.
     */
    get styleSheets(): CSSStyleSheet[];
    /**
     * Returns active element.
     *
     * @returns Active element.
     */
    get activeElement(): IHTMLElement;
    /**
     * Returns scrolling element.
     *
     * @returns Scrolling element.
     */
    get scrollingElement(): IHTMLElement;
    /**
     * Returns location.
     *
     * @returns Location.
     */
    get location(): Location;
    /**
     * Returns scripts.
     *
     * @returns Scripts.
     */
    get scripts(): IHTMLCollection<IHTMLScriptElement>;
    /**
     * Returns base URI.
     *
     * @override
     * @returns Base URI.
     */
    get baseURI(): string;
    /**
     * Returns URL.
     *
     * @returns the URL of the current document.
     * */
    get URL(): string;
    /**
     * Returns document URI.
     *
     * @returns the URL of the current document.
     * */
    get documentURI(): string;
    /**
     * Returns document visibility state.
     *
     * @returns the visibility state of the current document.
     * */
    get visibilityState(): VisibilityStateEnum;
    /**
     * Returns document hidden state.
     *
     * @returns the hidden state of the current document.
     * */
    get hidden(): boolean;
    /**
     * Gets the currently executing script element.
     *
     * @returns the currently executing script element.
     */
    get currentScript(): IHTMLScriptElement;
    /**
     * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    append(...nodes: (INode | string)[]): void;
    /**
     * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    prepend(...nodes: (INode | string)[]): void;
    /**
     * Replaces the existing children of a node with a specified new set of children.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceChildren(...nodes: (INode | string)[]): void;
    /**
     * Query CSS selector to find matching elments.
     *
     * @param selector CSS selector.
     * @returns Matching elements.
     */
    querySelectorAll(selector: string): INodeList<IElement>;
    /**
     * Query CSS Selector to find a matching element.
     *
     * @param selector CSS selector.
     * @returns Matching element.
     */
    querySelector(selector: string): IElement;
    /**
     * Returns an elements by class name.
     *
     * @param className Tag name.
     * @returns Matching element.
     */
    getElementsByClassName(className: string): IHTMLCollection<IElement>;
    /**
     * Returns an elements by tag name.
     *
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagName(tagName: string): IHTMLCollection<IElement>;
    /**
     * Returns an elements by tag name and namespace.
     *
     * @param namespaceURI Namespace URI.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagNameNS(namespaceURI: string, tagName: string): IHTMLCollection<IElement>;
    /**
     * Returns an element by ID.
     *
     * @param id ID.
     * @returns Matching element.
     */
    getElementById(id: string): IElement;
    /**
     * Returns an element by Name.
     *
     * @returns Matching element.
     * @param name
     */
    getElementsByName(name: string): INodeList<IElement>;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IDocument;
    /**
     * @override
     */
    appendChild(node: INode): INode;
    /**
     * @override
     */
    removeChild(node: INode): INode;
    /**
     * @override
     */
    insertBefore(newNode: INode, referenceNode: INode | null): INode;
    /**
     * Replaces the document HTML with new HTML.
     *
     * @param html HTML.
     */
    write(html: string): void;
    /**
     * Opens the document.
     *
     * @returns Document.
     */
    open(): IDocument;
    /**
     * Closes the document.
     */
    close(): void;
    /**
     * Creates an element.
     *
     * @param qualifiedName Tag name.
     * @param [options] Options.
     * @param [options.is] Tag name of a custom element previously defined via customElements.define().
     * @returns Element.
     */
    createElement(qualifiedName: string, options?: {
        is?: string;
    }): IElement;
    /**
     * Creates an element with the specified namespace URI and qualified name.
     *
     * @param namespaceURI Namespace URI.
     * @param qualifiedName Tag name.
     * @param [options] Options.
     * @param [options.is] Tag name of a custom element previously defined via customElements.define().
     * @returns Element.
     */
    createElementNS(namespaceURI: string, qualifiedName: string, options?: {
        is?: string;
    }): IElement;
    /**
     * Creates a text node.
     *
     * @param [data] Text data.
     * @returns Text node.
     */
    createTextNode(data?: string): IText;
    /**
     * Creates a comment node.
     *
     * @param [data] Text data.
     * @returns Text node.
     */
    createComment(data?: string): IComment;
    /**
     * Creates a document fragment.
     *
     * @returns Document fragment.
     */
    createDocumentFragment(): IDocumentFragment;
    /**
     * Creates a node iterator.
     *
     * @param root Root.
     * @param [whatToShow] What to show.
     * @param [filter] Filter.
     */
    createNodeIterator(root: INode, whatToShow?: number, filter?: INodeFilter): NodeIterator;
    /**
     * Creates a Tree Walker.
     *
     * @param root Root.
     * @param [whatToShow] What to show.
     * @param [filter] Filter.
     */
    createTreeWalker(root: INode, whatToShow?: number, filter?: INodeFilter): TreeWalker;
    /**
     * Creates an event.
     *
     * @deprecated
     * @param type Type.
     * @returns Event.
     */
    createEvent(type: string): Event;
    /**
     * Creates an Attr node.
     *
     * @param qualifiedName Name.
     * @returns Attribute.
     */
    createAttribute(qualifiedName: string): IAttr;
    /**
     * Creates a namespaced Attr node.
     *
     * @param namespaceURI Namespace URI.
     * @param qualifiedName Qualified name.
     * @returns Element.
     */
    createAttributeNS(namespaceURI: string, qualifiedName: string): IAttr;
    /**
     * Imports a node.
     *
     * @param node Node to import.
     * @param [deep=false] Set to "true" if the clone should be deep.
     */
    importNode(node: INode, deep?: boolean): INode;
    /**
     * Creates a range.
     *
     * @returns Range.
     */
    createRange(): Range;
    /**
     * Adopts a node.
     *
     * @param node Node to adopt.
     * @returns Adopted node.
     */
    adoptNode(node: INode): INode;
    /**
     * Returns selection.
     *
     * @returns Selection.
     */
    getSelection(): Selection;
    /**
     * Returns a boolean value indicating whether the document or any element inside the document has focus.
     *
     * @returns "true" if the document has focus.
     */
    hasFocus(): boolean;
    /**
     * Triggered by window when it is ready.
     */
    _onWindowReady(): void;
    /**
     * Creates a Processing Instruction node.
     *
     * @returns IProcessingInstruction.
     * @param target
     * @param data
     */
    createProcessingInstruction(target: string, data: string): IProcessingInstruction;
}
//# sourceMappingURL=Document.d.ts.map