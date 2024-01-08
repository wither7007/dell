import Node from '../node/Node.cjs';
import DOMRect from './DOMRect.cjs';
import DOMTokenList from '../../dom-token-list/DOMTokenList.cjs';
import IDOMTokenList from '../../dom-token-list/IDOMTokenList.cjs';
import IElement from './IElement.cjs';
import IShadowRoot from '../shadow-root/IShadowRoot.cjs';
import INode from '../node/INode.cjs';
import IHTMLCollection from './IHTMLCollection.cjs';
import INodeList from '../node/INodeList.cjs';
import { TInsertAdjacentPositions } from './IElement.cjs';
import IDOMRectList from './IDOMRectList.cjs';
import IAttr from '../attr/IAttr.cjs';
import INamedNodeMap from '../../named-node-map/INamedNodeMap.cjs';
import Event from '../../event/Event.cjs';
import CSSStyleDeclaration from '../../css/declaration/CSSStyleDeclaration.cjs';
/**
 * Element.
 */
export default class Element extends Node implements IElement {
    static _observedAttributes: string[];
    static observedAttributes: string[];
    tagName: string;
    nodeType: import("../node/NodeTypeEnum.cjs").default;
    shadowRoot: IShadowRoot | null;
    prefix: string;
    scrollHeight: number;
    scrollWidth: number;
    scrollTop: number;
    scrollLeft: number;
    readonly namespaceURI: string;
    oncancel: (event: Event) => void | null;
    onerror: (event: Event) => void | null;
    onscroll: (event: Event) => void | null;
    onselect: (event: Event) => void | null;
    onwheel: (event: Event) => void | null;
    oncopy: (event: Event) => void | null;
    oncut: (event: Event) => void | null;
    onpaste: (event: Event) => void | null;
    oncompositionend: (event: Event) => void | null;
    oncompositionstart: (event: Event) => void | null;
    oncompositionupdate: (event: Event) => void | null;
    onblur: (event: Event) => void | null;
    onfocus: (event: Event) => void | null;
    onfocusin: (event: Event) => void | null;
    onfocusout: (event: Event) => void | null;
    onfullscreenchange: (event: Event) => void | null;
    onfullscreenerror: (event: Event) => void | null;
    onkeydown: (event: Event) => void | null;
    onkeyup: (event: Event) => void | null;
    onauxclick: (event: Event) => void | null;
    onclick: (event: Event) => void | null;
    oncontextmenu: (event: Event) => void | null;
    ondblclick: (event: Event) => void | null;
    onmousedown: (event: Event) => void | null;
    onmouseenter: (event: Event) => void | null;
    onmouseleave: (event: Event) => void | null;
    onmousemove: (event: Event) => void | null;
    onmouseout: (event: Event) => void | null;
    onmouseover: (event: Event) => void | null;
    onmouseup: (event: Event) => void | null;
    ontouchcancel: (event: Event) => void | null;
    ontouchend: (event: Event) => void | null;
    ontouchmove: (event: Event) => void | null;
    ontouchstart: (event: Event) => void | null;
    readonly _children: IHTMLCollection<IElement>;
    _shadowRoot: IShadowRoot;
    readonly attributes: INamedNodeMap;
    _classList: DOMTokenList;
    _isValue?: string | null;
    _computedStyle: CSSStyleDeclaration | null;
    /**
     * Returns element children.
     */
    get children(): IHTMLCollection<IElement>;
    /**
     * Returns class list.
     *
     * @returns Class list.
     */
    get classList(): IDOMTokenList;
    /**
     * Returns ID.
     *
     * @returns ID.
     */
    get id(): string;
    /**
     * Sets ID.
     *
     * @param id ID.
     */
    set id(id: string);
    /**
     * Returns class name.
     *
     * @returns Class name.
     */
    get className(): string;
    /**
     * Sets class name.
     *
     * @param className Class name.
     */
    set className(className: string);
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName(): string;
    /**
     * Local name.
     *
     * @returns Local name.
     */
    get localName(): string;
    /**
     * Returns role.
     *
     * @returns Role.
     */
    get role(): string;
    /**
     * Sets role.
     *
     * @param role Role.
     */
    set role(role: string);
    /**
     * Previous element sibling.
     *
     * @returns Element.
     */
    get previousElementSibling(): IElement;
    /**
     * Next element sibling.
     *
     * @returns Element.
     */
    get nextElementSibling(): IElement;
    /**
     * Get text value of children.
     *
     * @returns Text content.
     */
    get textContent(): string;
    /**
     * Sets text content.
     *
     * @param textContent Text content.
     */
    set textContent(textContent: string);
    /**
     * Returns inner HTML.
     *
     * @returns HTML.
     */
    get innerHTML(): string;
    /**
     * Sets inner HTML.
     *
     * @param html HTML.
     */
    set innerHTML(html: string);
    /**
     * Returns outer HTML.
     *
     * @returns HTML.
     */
    get outerHTML(): string;
    /**
     * Returns outer HTML.
     *
     * @param html HTML.
     */
    set outerHTML(html: string);
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
     * Last element child.
     *
     * @returns Element.
     */
    get childElementCount(): number;
    /**
     * Returns slot.
     *
     * @returns Slot.
     */
    get slot(): string;
    /**
     * Returns slot.
     *
     * @param slot Slot.
     */
    set slot(title: string);
    /**
     * Attribute changed callback.
     *
     * @param name Name.
     * @param oldValue Old value.
     * @param newValue New value.
     */
    attributeChangedCallback?(name: string, oldValue: string, newValue: string): void;
    /**
     * Returns inner HTML and optionally the content of shadow roots.
     *
     * This is a feature implemented in Chromium, but not supported by Mozilla yet.
     *
     * @see https://web.dev/declarative-shadow-dom/
     * @see https://chromestatus.com/feature/5191745052606464
     * @param [options] Options.
     * @param [options.includeShadowRoots] Set to "true" to include shadow roots.
     * @returns HTML.
     */
    getInnerHTML(options?: {
        includeShadowRoots?: boolean;
    }): string;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IElement;
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
     * Removes the node from its parent.
     */
    remove(): void;
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceWith(...nodes: (INode | string)[]): void;
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    before(...nodes: (string | INode)[]): void;
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    after(...nodes: (string | INode)[]): void;
    /**
     * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    append(...nodes: (string | INode)[]): void;
    /**
     * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    prepend(...nodes: (string | INode)[]): void;
    /**
     * Replaces the existing children of a node with a specified new set of children.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceChildren(...nodes: (string | INode)[]): void;
    /**
     * Inserts a node to the given position.
     *
     * @param position Position to insert element.
     * @param element Node to insert.
     * @returns Inserted node or null if couldn't insert.
     */
    insertAdjacentElement(position: TInsertAdjacentPositions, element: INode): INode | null;
    /**
     * Inserts an HTML string to the given position.
     *
     * @param position Position to insert text.
     * @param text HTML string to insert.
     */
    insertAdjacentHTML(position: TInsertAdjacentPositions, text: string): void;
    /**
     * Inserts text to the given position.
     *
     * @param position Position to insert text.
     * @param text String to insert.
     */
    insertAdjacentText(position: TInsertAdjacentPositions, text: string): void;
    /**
     * Sets an attribute.
     *
     * @param name Name.
     * @param value Value.
     */
    setAttribute(name: string, value: string): void;
    /**
     * Sets a namespace attribute.
     *
     * @param namespaceURI Namespace URI.
     * @param name Name.
     * @param value Value.
     */
    setAttributeNS(namespaceURI: string, name: string, value: string): void;
    /**
     * Returns attribute names.
     *
     * @returns Attribute names.
     */
    getAttributeNames(): string[];
    /**
     * Returns attribute value.
     *
     * @param name Name.
     */
    getAttribute(name: string): string;
    /**
     * Toggle an attribute.
     * Returns `true` if attribute name is eventually present, and `false` otherwise.
     *
     * @param name A DOMString specifying the name of the attribute to be toggled.
     * @param force A boolean value to determine whether the attribute should be added or removed, no matter whether the attribute is present or not at the moment.
     */
    toggleAttribute(name: string, force?: boolean): boolean;
    /**
     * Returns namespace attribute value.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    getAttributeNS(namespace: string | null, localName: string): string;
    /**
     * Returns a boolean value indicating whether the specified element has the attribute or not.
     *
     * @param name Attribute name.
     * @returns True if attribute exists, false otherwise.
     */
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the specified element has the namespace attribute or not.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     * @returns True if attribute exists, false otherwise.
     */
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    /**
     * Returns "true" if the element has attributes.
     *
     * @returns "true" if the element has attributes.
     */
    hasAttributes(): boolean;
    /**
     * Removes an attribute.
     *
     * @param name Name.
     */
    removeAttribute(name: string): void;
    /**
     * Removes a namespace attribute.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    removeAttributeNS(namespace: string | null, localName: string): void;
    /**
     * Attaches a shadow root.
     *
     * @param _shadowRootInit Shadow root init.
     * @param shadowRootInit
     * @param shadowRootInit.mode
     * @returns Shadow root.
     */
    attachShadow(shadowRootInit: {
        mode: string;
    }): IShadowRoot;
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString(): string;
    /**
     * Returns the size of an element and its position relative to the viewport.
     *
     * @returns DOM rect.
     */
    getBoundingClientRect(): DOMRect;
    /**
     * Returns a collection of DOMRect objects that indicate the bounding rectangles for each CSS border box in a client.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
     * @returns DOM rect list.
     */
    getClientRects(): IDOMRectList<DOMRect>;
    /**
     * The matches() method checks to see if the Element would be selected by the provided selectorString.
     *
     * @param selector Selector.
     * @returns "true" if matching.
     */
    matches(selector: string): boolean;
    /**
     * Traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string.
     *
     * @param selector Selector.
     * @returns Closest matching element.
     */
    closest(selector: string): IElement;
    /**
     * Query CSS selector to find matching nodes.
     *
     * @param selector CSS selector.
     * @returns Matching elements.
     */
    querySelectorAll(selector: string): INodeList<IElement>;
    /**
     * Query CSS Selector to find matching node.
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
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNode(attribute: IAttr): IAttr | null;
    /**
     * The setAttributeNodeNS() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNodeNS(attribute: IAttr): IAttr | null;
    /**
     * Returns an Attr node.
     *
     * @param name Name.
     * @returns Replaced attribute.
     */
    getAttributeNode(name: string): IAttr | null;
    /**
     * Returns a namespaced Attr node.
     *
     * @param namespace Namespace.
     * @param localName Name.
     * @returns Replaced attribute.
     */
    getAttributeNodeNS(namespace: string | null, localName: string): IAttr | null;
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     * @returns Removed attribute.
     */
    removeAttributeNode(attribute: IAttr): IAttr | null;
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     * @returns Removed attribute.
     */
    removeAttributeNodeNS(attribute: IAttr): IAttr | null;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scroll(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y?: number): void;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scrollTo(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y?: number): void;
    /**
     * @override
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Returns attribute name.
     *
     * @param name Name.
     * @returns Attribute name based on namespace.
     */
    protected _getAttributeName(name: any): string;
}
//# sourceMappingURL=Element.d.ts.map