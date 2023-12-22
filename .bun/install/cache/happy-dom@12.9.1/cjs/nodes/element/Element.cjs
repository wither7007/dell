"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_js_1 = __importDefault(require("../node/Node.cjs"));
const ShadowRoot_js_1 = __importDefault(require("../shadow-root/ShadowRoot.cjs"));
const Attr_js_1 = __importDefault(require("../attr/Attr.cjs"));
const DOMRect_js_1 = __importDefault(require("./DOMRect.cjs"));
const DOMTokenList_js_1 = __importDefault(require("../../dom-token-list/DOMTokenList.cjs"));
const QuerySelector_js_1 = __importDefault(require("../../query-selector/QuerySelector.cjs"));
const NamespaceURI_js_1 = __importDefault(require("../../config/NamespaceURI.cjs"));
const XMLParser_js_1 = __importDefault(require("../../xml-parser/XMLParser.cjs"));
const XMLSerializer_js_1 = __importDefault(require("../../xml-serializer/XMLSerializer.cjs"));
const ChildNodeUtility_js_1 = __importDefault(require("../child-node/ChildNodeUtility.cjs"));
const ParentNodeUtility_js_1 = __importDefault(require("../parent-node/ParentNodeUtility.cjs"));
const NonDocumentChildNodeUtility_js_1 = __importDefault(require("../child-node/NonDocumentChildNodeUtility.cjs"));
const DOMException_js_1 = __importDefault(require("../../exception/DOMException.cjs"));
const DOMRectListFactory_js_1 = __importDefault(require("./DOMRectListFactory.cjs"));
const ElementUtility_js_1 = __importDefault(require("./ElementUtility.cjs"));
const HTMLCollection_js_1 = __importDefault(require("./HTMLCollection.cjs"));
const EventPhaseEnum_js_1 = __importDefault(require("../../event/EventPhaseEnum.cjs"));
const ElementNamedNodeMap_js_1 = __importDefault(require("./ElementNamedNodeMap.cjs"));
const WindowErrorUtility_js_1 = __importDefault(require("../../window/WindowErrorUtility.cjs"));
/**
 * Element.
 */
class Element extends Node_js_1.default {
    constructor() {
        super(...arguments);
        this.tagName = null;
        this.nodeType = Node_js_1.default.ELEMENT_NODE;
        this.shadowRoot = null;
        this.prefix = null;
        this.scrollHeight = 0;
        this.scrollWidth = 0;
        this.scrollTop = 0;
        this.scrollLeft = 0;
        this.namespaceURI = null;
        // Events
        this.oncancel = null;
        this.onerror = null;
        this.onscroll = null;
        this.onselect = null;
        this.onwheel = null;
        this.oncopy = null;
        this.oncut = null;
        this.onpaste = null;
        this.oncompositionend = null;
        this.oncompositionstart = null;
        this.oncompositionupdate = null;
        this.onblur = null;
        this.onfocus = null;
        this.onfocusin = null;
        this.onfocusout = null;
        this.onfullscreenchange = null;
        this.onfullscreenerror = null;
        this.onkeydown = null;
        this.onkeyup = null;
        this.onauxclick = null;
        this.onclick = null;
        this.oncontextmenu = null;
        this.ondblclick = null;
        this.onmousedown = null;
        this.onmouseenter = null;
        this.onmouseleave = null;
        this.onmousemove = null;
        this.onmouseout = null;
        this.onmouseover = null;
        this.onmouseup = null;
        this.ontouchcancel = null;
        this.ontouchend = null;
        this.ontouchmove = null;
        this.ontouchstart = null;
        this._children = new HTMLCollection_js_1.default();
        // Used for being able to access closed shadow roots
        this._shadowRoot = null;
        this.attributes = new ElementNamedNodeMap_js_1.default(this);
        this._classList = null;
        this._isValue = null;
        this._computedStyle = null;
    }
    /**
     * Returns element children.
     */
    get children() {
        return this._children;
    }
    /**
     * Returns class list.
     *
     * @returns Class list.
     */
    get classList() {
        if (!this._classList) {
            this._classList = new DOMTokenList_js_1.default(this, 'class');
        }
        return this._classList;
    }
    /**
     * Returns ID.
     *
     * @returns ID.
     */
    get id() {
        return this.getAttribute('id') || '';
    }
    /**
     * Sets ID.
     *
     * @param id ID.
     */
    set id(id) {
        this.setAttribute('id', id);
    }
    /**
     * Returns class name.
     *
     * @returns Class name.
     */
    get className() {
        return this.getAttribute('class') || '';
    }
    /**
     * Sets class name.
     *
     * @param className Class name.
     */
    set className(className) {
        this.setAttribute('class', className);
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return this.tagName;
    }
    /**
     * Local name.
     *
     * @returns Local name.
     */
    get localName() {
        return this.tagName ? this.tagName.toLowerCase() : 'unknown';
    }
    /**
     * Returns role.
     *
     * @returns Role.
     */
    get role() {
        return this.getAttribute('role') || '';
    }
    /**
     * Sets role.
     *
     * @param role Role.
     */
    set role(role) {
        this.setAttribute('role', role);
    }
    /**
     * Previous element sibling.
     *
     * @returns Element.
     */
    get previousElementSibling() {
        return NonDocumentChildNodeUtility_js_1.default.previousElementSibling(this);
    }
    /**
     * Next element sibling.
     *
     * @returns Element.
     */
    get nextElementSibling() {
        return NonDocumentChildNodeUtility_js_1.default.nextElementSibling(this);
    }
    /**
     * Get text value of children.
     *
     * @returns Text content.
     */
    get textContent() {
        let result = '';
        for (const childNode of this._childNodes) {
            if (childNode.nodeType === Node_js_1.default.ELEMENT_NODE || childNode.nodeType === Node_js_1.default.TEXT_NODE) {
                result += childNode.textContent;
            }
        }
        return result;
    }
    /**
     * Sets text content.
     *
     * @param textContent Text content.
     */
    set textContent(textContent) {
        for (const child of this._childNodes.slice()) {
            this.removeChild(child);
        }
        if (textContent) {
            this.appendChild(this.ownerDocument.createTextNode(textContent));
        }
    }
    /**
     * Returns inner HTML.
     *
     * @returns HTML.
     */
    get innerHTML() {
        return this.getInnerHTML();
    }
    /**
     * Sets inner HTML.
     *
     * @param html HTML.
     */
    set innerHTML(html) {
        for (const child of this._childNodes.slice()) {
            this.removeChild(child);
        }
        XMLParser_js_1.default.parse(this.ownerDocument, html, { rootNode: this });
    }
    /**
     * Returns outer HTML.
     *
     * @returns HTML.
     */
    get outerHTML() {
        return new XMLSerializer_js_1.default({ escapeEntities: false }).serializeToString(this);
    }
    /**
     * Returns outer HTML.
     *
     * @param html HTML.
     */
    set outerHTML(html) {
        this.replaceWith(html);
    }
    /**
     * First element child.
     *
     * @returns Element.
     */
    get firstElementChild() {
        return this._children[0] ?? null;
    }
    /**
     * Last element child.
     *
     * @returns Element.
     */
    get lastElementChild() {
        return this._children[this._children.length - 1] ?? null;
    }
    /**
     * Last element child.
     *
     * @returns Element.
     */
    get childElementCount() {
        return this._children.length;
    }
    /**
     * Returns slot.
     *
     * @returns Slot.
     */
    get slot() {
        return this.getAttributeNS(null, 'slot') || '';
    }
    /**
     * Returns slot.
     *
     * @param slot Slot.
     */
    set slot(title) {
        this.setAttribute('slot', title);
    }
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
    getInnerHTML(options) {
        const xmlSerializer = new XMLSerializer_js_1.default({
            includeShadowRoots: options && options.includeShadowRoots,
            escapeEntities: false
        });
        let xml = '';
        for (const node of this._childNodes) {
            xml += xmlSerializer.serializeToString(node);
        }
        return xml;
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = super.cloneNode(deep);
        Attr_js_1.default._ownerDocument = this.ownerDocument;
        for (let i = 0, max = this.attributes.length; i < max; i++) {
            const attribute = this.attributes[i];
            clone.attributes.setNamedItem(Object.assign(new Attr_js_1.default(), attribute));
        }
        if (deep) {
            for (const node of clone._childNodes) {
                if (node.nodeType === Node_js_1.default.ELEMENT_NODE) {
                    clone._children.push(node);
                }
            }
        }
        clone.tagName = this.tagName;
        clone.scrollLeft = this.scrollLeft;
        clone.scrollTop = this.scrollTop;
        clone.scrollWidth = this.scrollWidth;
        clone.scrollHeight = this.scrollHeight;
        clone.namespaceURI = this.namespaceURI;
        return clone;
    }
    /**
     * @override
     */
    appendChild(node) {
        // We do not call super here as this will be handled by ElementUtility to improve performance by avoiding validation and other checks.
        return ElementUtility_js_1.default.appendChild(this, node);
    }
    /**
     * @override
     */
    removeChild(node) {
        // We do not call super here as this will be handled by ElementUtility to improve performance by avoiding validation and other checks.
        return ElementUtility_js_1.default.removeChild(this, node);
    }
    /**
     * @override
     */
    insertBefore(newNode, referenceNode) {
        if (arguments.length < 2) {
            throw new TypeError(`Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only ${arguments.length} present.`);
        }
        // We do not call super here as this will be handled by ElementUtility to improve performance by avoiding validation and other checks.
        return ElementUtility_js_1.default.insertBefore(this, newNode, referenceNode);
    }
    /**
     * Removes the node from its parent.
     */
    remove() {
        ChildNodeUtility_js_1.default.remove(this);
    }
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceWith(...nodes) {
        ChildNodeUtility_js_1.default.replaceWith(this, ...nodes);
    }
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    before(...nodes) {
        ChildNodeUtility_js_1.default.before(this, ...nodes);
    }
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    after(...nodes) {
        ChildNodeUtility_js_1.default.after(this, ...nodes);
    }
    /**
     * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    append(...nodes) {
        ParentNodeUtility_js_1.default.append(this, ...nodes);
    }
    /**
     * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    prepend(...nodes) {
        ParentNodeUtility_js_1.default.prepend(this, ...nodes);
    }
    /**
     * Replaces the existing children of a node with a specified new set of children.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceChildren(...nodes) {
        ParentNodeUtility_js_1.default.replaceChildren(this, ...nodes);
    }
    /**
     * Inserts a node to the given position.
     *
     * @param position Position to insert element.
     * @param element Node to insert.
     * @returns Inserted node or null if couldn't insert.
     */
    insertAdjacentElement(position, element) {
        if (position === 'beforebegin') {
            if (!this.parentElement) {
                return null;
            }
            this.parentElement.insertBefore(element, this);
        }
        else if (position === 'afterbegin') {
            this.insertBefore(element, this.firstChild);
        }
        else if (position === 'beforeend') {
            this.appendChild(element);
        }
        else if (position === 'afterend') {
            if (!this.parentElement) {
                return null;
            }
            this.parentElement.insertBefore(element, this.nextSibling);
        }
        return element;
    }
    /**
     * Inserts an HTML string to the given position.
     *
     * @param position Position to insert text.
     * @param text HTML string to insert.
     */
    insertAdjacentHTML(position, text) {
        for (const node of (XMLParser_js_1.default.parse(this.ownerDocument, text))._childNodes.slice()) {
            this.insertAdjacentElement(position, node);
        }
    }
    /**
     * Inserts text to the given position.
     *
     * @param position Position to insert text.
     * @param text String to insert.
     */
    insertAdjacentText(position, text) {
        if (!text) {
            return;
        }
        const textNode = this.ownerDocument.createTextNode(text);
        this.insertAdjacentElement(position, textNode);
    }
    /**
     * Sets an attribute.
     *
     * @param name Name.
     * @param value Value.
     */
    setAttribute(name, value) {
        const attribute = this.ownerDocument.createAttributeNS(null, name);
        attribute.value = String(value);
        this.setAttributeNode(attribute);
    }
    /**
     * Sets a namespace attribute.
     *
     * @param namespaceURI Namespace URI.
     * @param name Name.
     * @param value Value.
     */
    setAttributeNS(namespaceURI, name, value) {
        const attribute = this.ownerDocument.createAttributeNS(namespaceURI, name);
        attribute.value = String(value);
        this.setAttributeNode(attribute);
    }
    /**
     * Returns attribute names.
     *
     * @returns Attribute names.
     */
    getAttributeNames() {
        const attributeNames = [];
        for (let i = 0, max = this.attributes.length; i < max; i++) {
            attributeNames.push(this.attributes[i].name);
        }
        return attributeNames;
    }
    /**
     * Returns attribute value.
     *
     * @param name Name.
     */
    getAttribute(name) {
        const attribute = this.getAttributeNode(name);
        if (attribute) {
            return attribute.value;
        }
        return null;
    }
    /**
     * Toggle an attribute.
     * Returns `true` if attribute name is eventually present, and `false` otherwise.
     *
     * @param name A DOMString specifying the name of the attribute to be toggled.
     * @param force A boolean value to determine whether the attribute should be added or removed, no matter whether the attribute is present or not at the moment.
     */
    toggleAttribute(name, force) {
        name = name.toLowerCase();
        const attribute = this.getAttributeNode(name);
        if (attribute) {
            if (force === true) {
                return true;
            }
            this.removeAttributeNode(attribute);
            return false;
        }
        if (force === false) {
            return false;
        }
        this.setAttribute(name, '');
        return true;
    }
    /**
     * Returns namespace attribute value.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    getAttributeNS(namespace, localName) {
        const attribute = this.getAttributeNodeNS(namespace, localName);
        if (attribute) {
            return attribute.value;
        }
        return null;
    }
    /**
     * Returns a boolean value indicating whether the specified element has the attribute or not.
     *
     * @param name Attribute name.
     * @returns True if attribute exists, false otherwise.
     */
    hasAttribute(name) {
        return !!this.getAttributeNode(name);
    }
    /**
     * Returns a boolean value indicating whether the specified element has the namespace attribute or not.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     * @returns True if attribute exists, false otherwise.
     */
    hasAttributeNS(namespace, localName) {
        return this.attributes.getNamedItemNS(namespace, localName) !== null;
    }
    /**
     * Returns "true" if the element has attributes.
     *
     * @returns "true" if the element has attributes.
     */
    hasAttributes() {
        return this.attributes.length > 0;
    }
    /**
     * Removes an attribute.
     *
     * @param name Name.
     */
    removeAttribute(name) {
        try {
            this.attributes.removeNamedItem(name);
        }
        catch (error) {
            // Ignore DOMException when the attribute does not exist.
        }
    }
    /**
     * Removes a namespace attribute.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    removeAttributeNS(namespace, localName) {
        this.attributes.removeNamedItemNS(namespace, localName);
    }
    /**
     * Attaches a shadow root.
     *
     * @param _shadowRootInit Shadow root init.
     * @param shadowRootInit
     * @param shadowRootInit.mode
     * @returns Shadow root.
     */
    attachShadow(shadowRootInit) {
        if (this._shadowRoot) {
            throw new DOMException_js_1.default('Shadow root has already been attached.');
        }
        this._shadowRoot = new ShadowRoot_js_1.default();
        this._shadowRoot.ownerDocument = this.ownerDocument;
        this._shadowRoot.host = this;
        this._shadowRoot.mode = shadowRootInit.mode;
        this._shadowRoot._connectToNode(this);
        if (this._shadowRoot.mode === 'open') {
            this.shadowRoot = this._shadowRoot;
        }
        return this._shadowRoot;
    }
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString() {
        return this.outerHTML;
    }
    /**
     * Returns the size of an element and its position relative to the viewport.
     *
     * @returns DOM rect.
     */
    getBoundingClientRect() {
        // TODO: Not full implementation
        return new DOMRect_js_1.default();
    }
    /**
     * Returns a collection of DOMRect objects that indicate the bounding rectangles for each CSS border box in a client.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
     * @returns DOM rect list.
     */
    getClientRects() {
        // TODO: Not full implementation
        return DOMRectListFactory_js_1.default.create([this.getBoundingClientRect()]);
    }
    /**
     * The matches() method checks to see if the Element would be selected by the provided selectorString.
     *
     * @param selector Selector.
     * @returns "true" if matching.
     */
    matches(selector) {
        return !!QuerySelector_js_1.default.match(this, selector);
    }
    /**
     * Traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string.
     *
     * @param selector Selector.
     * @returns Closest matching element.
     */
    closest(selector) {
        // eslint-disable-next-line
        let parent = this;
        while (parent) {
            if (QuerySelector_js_1.default.match(parent, selector)) {
                return parent;
            }
            parent = parent.parentElement;
        }
        return null;
    }
    /**
     * Query CSS selector to find matching nodes.
     *
     * @param selector CSS selector.
     * @returns Matching elements.
     */
    querySelectorAll(selector) {
        return QuerySelector_js_1.default.querySelectorAll(this, selector);
    }
    /**
     * Query CSS Selector to find matching node.
     *
     * @param selector CSS selector.
     * @returns Matching element.
     */
    querySelector(selector) {
        return QuerySelector_js_1.default.querySelector(this, selector);
    }
    /**
     * Returns an elements by class name.
     *
     * @param className Tag name.
     * @returns Matching element.
     */
    getElementsByClassName(className) {
        return ParentNodeUtility_js_1.default.getElementsByClassName(this, className);
    }
    /**
     * Returns an elements by tag name.
     *
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagName(tagName) {
        return ParentNodeUtility_js_1.default.getElementsByTagName(this, tagName);
    }
    /**
     * Returns an elements by tag name and namespace.
     *
     * @param namespaceURI Namespace URI.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagNameNS(namespaceURI, tagName) {
        return ParentNodeUtility_js_1.default.getElementsByTagNameNS(this, namespaceURI, tagName);
    }
    /**
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNode(attribute) {
        return this.attributes.setNamedItem(attribute);
    }
    /**
     * The setAttributeNodeNS() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNodeNS(attribute) {
        return this.attributes.setNamedItemNS(attribute);
    }
    /**
     * Returns an Attr node.
     *
     * @param name Name.
     * @returns Replaced attribute.
     */
    getAttributeNode(name) {
        return this.attributes.getNamedItem(name);
    }
    /**
     * Returns a namespaced Attr node.
     *
     * @param namespace Namespace.
     * @param localName Name.
     * @returns Replaced attribute.
     */
    getAttributeNodeNS(namespace, localName) {
        return this.attributes.getNamedItemNS(namespace, localName);
    }
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     * @returns Removed attribute.
     */
    removeAttributeNode(attribute) {
        return this.attributes.removeNamedItem(attribute.name);
    }
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     * @returns Removed attribute.
     */
    removeAttributeNodeNS(attribute) {
        return this.attributes.removeNamedItemNS(attribute.namespaceURI, attribute.localName);
    }
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scroll(x, y) {
        if (typeof x === 'object') {
            if (x.behavior === 'smooth') {
                this.ownerDocument.defaultView.setTimeout(() => {
                    if (x.top !== undefined) {
                        this.scrollTop = x.top;
                    }
                    if (x.left !== undefined) {
                        this.scrollLeft = x.left;
                    }
                });
            }
            else {
                if (x.top !== undefined) {
                    this.scrollTop = x.top;
                }
                if (x.left !== undefined) {
                    this.scrollLeft = x.left;
                }
            }
        }
        else if (x !== undefined && y !== undefined) {
            this.scrollLeft = x;
            this.scrollTop = y;
        }
    }
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scrollTo(x, y) {
        this.scroll(x, y);
    }
    /**
     * @override
     */
    dispatchEvent(event) {
        const returnValue = super.dispatchEvent(event);
        if ((event.eventPhase === EventPhaseEnum_js_1.default.atTarget ||
            event.eventPhase === EventPhaseEnum_js_1.default.bubbling) &&
            !event._immediatePropagationStopped) {
            const attribute = this.getAttribute('on' + event.type);
            if (attribute && !event._immediatePropagationStopped) {
                if (this.ownerDocument.defaultView.happyDOM.settings.disableErrorCapturing) {
                    this.ownerDocument.defaultView.eval(attribute);
                }
                else {
                    WindowErrorUtility_js_1.default.captureError(this.ownerDocument.defaultView, () => this.ownerDocument.defaultView.eval(attribute));
                }
            }
        }
        return returnValue;
    }
    /**
     * Returns attribute name.
     *
     * @param name Name.
     * @returns Attribute name based on namespace.
     */
    _getAttributeName(name) {
        if (this.namespaceURI === NamespaceURI_js_1.default.svg) {
            return name;
        }
        return name.toLowerCase();
    }
}
exports.default = Element;
//# sourceMappingURL=Element.cjs.map