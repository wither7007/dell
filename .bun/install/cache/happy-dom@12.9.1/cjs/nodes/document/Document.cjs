"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Element_js_1 = __importDefault(require("../element/Element.cjs"));
const HTMLUnknownElement_js_1 = __importDefault(require("../html-unknown-element/HTMLUnknownElement.cjs"));
const Text_js_1 = __importDefault(require("../text/Text.cjs"));
const Comment_js_1 = __importDefault(require("../comment/Comment.cjs"));
const Node_js_1 = __importDefault(require("../node/Node.cjs"));
const NodeIterator_js_1 = __importDefault(require("../../tree-walker/NodeIterator.cjs"));
const TreeWalker_js_1 = __importDefault(require("../../tree-walker/TreeWalker.cjs"));
const DocumentFragment_js_1 = __importDefault(require("../document-fragment/DocumentFragment.cjs"));
const XMLParser_js_1 = __importDefault(require("../../xml-parser/XMLParser.cjs"));
const Event_js_1 = __importDefault(require("../../event/Event.cjs"));
const DOMImplementation_js_1 = __importDefault(require("../../dom-implementation/DOMImplementation.cjs"));
const ElementTag_js_1 = __importDefault(require("../../config/ElementTag.cjs"));
const Attr_js_1 = __importDefault(require("../attr/Attr.cjs"));
const NamespaceURI_js_1 = __importDefault(require("../../config/NamespaceURI.cjs"));
const DocumentType_js_1 = __importDefault(require("../document-type/DocumentType.cjs"));
const ParentNodeUtility_js_1 = __importDefault(require("../parent-node/ParentNodeUtility.cjs"));
const QuerySelector_js_1 = __importDefault(require("../../query-selector/QuerySelector.cjs"));
const DOMException_js_1 = __importDefault(require("../../exception/DOMException.cjs"));
const CookieJar_js_1 = __importDefault(require("../../cookie/CookieJar.cjs"));
const NodeList_js_1 = __importDefault(require("../node/NodeList.cjs"));
const DocumentReadyStateEnum_js_1 = __importDefault(require("./DocumentReadyStateEnum.cjs"));
const DocumentReadyStateManager_js_1 = __importDefault(require("./DocumentReadyStateManager.cjs"));
const Selection_js_1 = __importDefault(require("../../selection/Selection.cjs"));
const ProcessingInstruction_js_1 = __importDefault(require("../processing-instruction/ProcessingInstruction.cjs"));
const ElementUtility_js_1 = __importDefault(require("../element/ElementUtility.cjs"));
const HTMLCollection_js_1 = __importDefault(require("../element/HTMLCollection.cjs"));
const VisibilityStateEnum_js_1 = __importDefault(require("./VisibilityStateEnum.cjs"));
const NodeTypeEnum_js_1 = __importDefault(require("../node/NodeTypeEnum.cjs"));
const PROCESSING_INSTRUCTION_TARGET_REGEXP = /^[a-z][a-z0-9-]+$/;
/**
 * Document.
 */
class Document extends Node_js_1.default {
    /**
     * Creates an instance of Document.
     *
     */
    constructor() {
        super();
        this.nodeType = Node_js_1.default.DOCUMENT_NODE;
        this.adoptedStyleSheets = [];
        this.readyState = DocumentReadyStateEnum_js_1.default.interactive;
        this.isConnected = true;
        this.referrer = '';
        this._windowClass = null;
        this._children = new HTMLCollection_js_1.default();
        this._activeElement = null;
        this._nextActiveElement = null;
        this._currentScript = null;
        // Used as an unique identifier which is updated whenever the DOM gets modified.
        this._cacheID = 0;
        // Public in order to be accessible by the fetch and xhr.
        this._cookie = new CookieJar_js_1.default();
        this._isFirstWrite = true;
        this._isFirstWriteAfterOpen = false;
        this._selection = null;
        // Events
        this.onreadystatechange = null;
        this.onpointerlockchange = null;
        this.onpointerlockerror = null;
        this.onbeforecopy = null;
        this.onbeforecut = null;
        this.onbeforepaste = null;
        this.onfreeze = null;
        this.onresume = null;
        this.onsearch = null;
        this.onvisibilitychange = null;
        this.onfullscreenchange = null;
        this.onfullscreenerror = null;
        this.onwebkitfullscreenchange = null;
        this.onwebkitfullscreenerror = null;
        this.onbeforexrselect = null;
        this.onabort = null;
        this.onbeforeinput = null;
        this.onblur = null;
        this.oncancel = null;
        this.oncanplay = null;
        this.oncanplaythrough = null;
        this.onchange = null;
        this.onclick = null;
        this.onclose = null;
        this.oncontextlost = null;
        this.oncontextmenu = null;
        this.oncontextrestored = null;
        this.oncuechange = null;
        this.ondblclick = null;
        this.ondrag = null;
        this.ondragend = null;
        this.ondragenter = null;
        this.ondragleave = null;
        this.ondragover = null;
        this.ondragstart = null;
        this.ondrop = null;
        this.ondurationchange = null;
        this.onemptied = null;
        this.onended = null;
        this.onerror = null;
        this.onfocus = null;
        this.onformdata = null;
        this.oninput = null;
        this.oninvalid = null;
        this.onkeydown = null;
        this.onkeypress = null;
        this.onkeyup = null;
        this.onload = null;
        this.onloadeddata = null;
        this.onloadedmetadata = null;
        this.onloadstart = null;
        this.onmousedown = null;
        this.onmouseenter = null;
        this.onmouseleave = null;
        this.onmousemove = null;
        this.onmouseout = null;
        this.onmouseover = null;
        this.onmouseup = null;
        this.onmousewheel = null;
        this.onpause = null;
        this.onplay = null;
        this.onplaying = null;
        this.onprogress = null;
        this.onratechange = null;
        this.onreset = null;
        this.onresize = null;
        this.onscroll = null;
        this.onsecuritypolicyviolation = null;
        this.onseeked = null;
        this.onseeking = null;
        this.onselect = null;
        this.onslotchange = null;
        this.onstalled = null;
        this.onsubmit = null;
        this.onsuspend = null;
        this.ontimeupdate = null;
        this.ontoggle = null;
        this.onvolumechange = null;
        this.onwaiting = null;
        this.onwebkitanimationend = null;
        this.onwebkitanimationiteration = null;
        this.onwebkitanimationstart = null;
        this.onwebkittransitionend = null;
        this.onwheel = null;
        this.onauxclick = null;
        this.ongotpointercapture = null;
        this.onlostpointercapture = null;
        this.onpointerdown = null;
        this.onpointermove = null;
        this.onpointerrawupdate = null;
        this.onpointerup = null;
        this.onpointercancel = null;
        this.onpointerover = null;
        this.onpointerout = null;
        this.onpointerenter = null;
        this.onpointerleave = null;
        this.onselectstart = null;
        this.onselectionchange = null;
        this.onanimationend = null;
        this.onanimationiteration = null;
        this.onanimationstart = null;
        this.ontransitionrun = null;
        this.ontransitionstart = null;
        this.ontransitionend = null;
        this.ontransitioncancel = null;
        this.oncopy = null;
        this.oncut = null;
        this.onpaste = null;
        this.onbeforematch = null;
        this.defaultView = this.constructor._defaultView;
        this.implementation = new DOMImplementation_js_1.default(this);
        this._windowClass = this.constructor._windowClass;
        this._readyStateManager = new DocumentReadyStateManager_js_1.default(this.defaultView);
        this._rootNode = this;
        const doctype = this.implementation.createDocumentType('html', '', '');
        const documentElement = this.createElement('html');
        const bodyElement = this.createElement('body');
        const headElement = this.createElement('head');
        this.appendChild(doctype);
        this.appendChild(documentElement);
        documentElement.appendChild(headElement);
        documentElement.appendChild(bodyElement);
    }
    /**
     * Returns document children.
     */
    get children() {
        return this._children;
    }
    /**
     * Returns character set.
     *
     * @deprecated
     * @returns Character set.
     */
    get charset() {
        return this.characterSet;
    }
    /**
     * Returns character set.
     *
     * @returns Character set.
     */
    get characterSet() {
        const charset = this.querySelector('meta[charset]')?.getAttributeNS(null, 'charset');
        return charset ? charset : 'UTF-8';
    }
    /**
     * Returns title.
     *
     * @returns Title.
     */
    get title() {
        const element = ParentNodeUtility_js_1.default.getElementByTagName(this, 'title');
        if (element) {
            return element.textContent;
        }
        return '';
    }
    /**
     * Returns set title.
     *
     */
    set title(title) {
        const element = ParentNodeUtility_js_1.default.getElementByTagName(this, 'title');
        if (element) {
            element.textContent = title;
        }
        else {
            const newElement = this.createElement('title');
            newElement.textContent = title;
            this.head.appendChild(newElement);
        }
    }
    /**
     * Returns a collection of all area elements and a elements in a document with a value for the href attribute.
     */
    get links() {
        return this.querySelectorAll('a[href],area[href]');
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
     * Returns cookie string.
     *
     * @returns Cookie.
     */
    get cookie() {
        return this._cookie.getCookieString(this.defaultView.location, true);
    }
    /**
     * Sets a cookie string.
     *
     * @param cookie Cookie string.
     */
    set cookie(cookie) {
        this._cookie.addCookieString(this.defaultView.location, cookie);
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return '#document';
    }
    /**
     * Returns <html> element.
     *
     * @returns Element.
     */
    get documentElement() {
        return ParentNodeUtility_js_1.default.getElementByTagName(this, 'html');
    }
    /**
     * Returns document type element.
     *
     * @returns Document type.
     */
    get doctype() {
        for (const node of this._childNodes) {
            if (node instanceof DocumentType_js_1.default) {
                return node;
            }
        }
        return null;
    }
    /**
     * Returns <body> element.
     *
     * @returns Element.
     */
    get body() {
        return ParentNodeUtility_js_1.default.getElementByTagName(this, 'body');
    }
    /**
     * Returns <head> element.
     *
     * @returns Element.
     */
    get head() {
        return ParentNodeUtility_js_1.default.getElementByTagName(this, 'head');
    }
    /**
     * Returns CSS style sheets.
     *
     * @returns CSS style sheets.
     */
    get styleSheets() {
        const styles = (this.querySelectorAll('link[rel="stylesheet"][href],style'));
        const styleSheets = [];
        for (const style of styles) {
            const sheet = style.sheet;
            if (sheet) {
                styleSheets.push(sheet);
            }
        }
        return styleSheets;
    }
    /**
     * Returns active element.
     *
     * @returns Active element.
     */
    get activeElement() {
        if (this._activeElement && !this._activeElement.isConnected) {
            this._activeElement = null;
        }
        if (this._activeElement && this._activeElement instanceof Element_js_1.default) {
            let rootNode = (this._activeElement.getRootNode());
            let activeElement = this._activeElement;
            while (rootNode !== this) {
                activeElement = rootNode.host;
                rootNode = activeElement ? activeElement.getRootNode() : this;
            }
            return activeElement;
        }
        return this._activeElement || this.body || this.documentElement || null;
    }
    /**
     * Returns scrolling element.
     *
     * @returns Scrolling element.
     */
    get scrollingElement() {
        return this.documentElement;
    }
    /**
     * Returns location.
     *
     * @returns Location.
     */
    get location() {
        return this.defaultView.location;
    }
    /**
     * Returns scripts.
     *
     * @returns Scripts.
     */
    get scripts() {
        return this.getElementsByTagName('script');
    }
    /**
     * Returns base URI.
     *
     * @override
     * @returns Base URI.
     */
    get baseURI() {
        const element = ParentNodeUtility_js_1.default.getElementByTagName(this, 'base');
        if (element) {
            return element.href;
        }
        return this.defaultView.location.href;
    }
    /**
     * Returns URL.
     *
     * @returns the URL of the current document.
     * */
    get URL() {
        return this.defaultView.location.href;
    }
    /**
     * Returns document URI.
     *
     * @returns the URL of the current document.
     * */
    get documentURI() {
        return this.URL;
    }
    /**
     * Returns document visibility state.
     *
     * @returns the visibility state of the current document.
     * */
    get visibilityState() {
        if (this.defaultView) {
            return VisibilityStateEnum_js_1.default.visible;
        }
        return VisibilityStateEnum_js_1.default.hidden;
    }
    /**
     * Returns document hidden state.
     *
     * @returns the hidden state of the current document.
     * */
    get hidden() {
        if (this.defaultView) {
            return false;
        }
        return true;
    }
    /**
     * Gets the currently executing script element.
     *
     * @returns the currently executing script element.
     */
    get currentScript() {
        return this._currentScript;
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
     * Query CSS selector to find matching elments.
     *
     * @param selector CSS selector.
     * @returns Matching elements.
     */
    querySelectorAll(selector) {
        return QuerySelector_js_1.default.querySelectorAll(this, selector);
    }
    /**
     * Query CSS Selector to find a matching element.
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
     * Returns an element by ID.
     *
     * @param id ID.
     * @returns Matching element.
     */
    getElementById(id) {
        return ParentNodeUtility_js_1.default.getElementById(this, id);
    }
    /**
     * Returns an element by Name.
     *
     * @returns Matching element.
     * @param name
     */
    getElementsByName(name) {
        const getElementsByName = (parentNode, name) => {
            const matches = new NodeList_js_1.default();
            for (const child of parentNode._children) {
                if (child.getAttributeNS(null, 'name') === name) {
                    matches.push(child);
                }
                for (const match of getElementsByName(child, name)) {
                    matches.push(match);
                }
            }
            return matches;
        };
        return getElementsByName(this, name);
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        this.constructor._defaultView = this.defaultView;
        const clone = super.cloneNode(deep);
        if (deep) {
            for (const node of clone._childNodes) {
                if (node.nodeType === Node_js_1.default.ELEMENT_NODE) {
                    clone._children.push(node);
                }
            }
        }
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
     * Replaces the document HTML with new HTML.
     *
     * @param html HTML.
     */
    write(html) {
        const root = XMLParser_js_1.default.parse(this, html, { evaluateScripts: true });
        if (this._isFirstWrite || this._isFirstWriteAfterOpen) {
            if (this._isFirstWrite) {
                if (!this._isFirstWriteAfterOpen) {
                    this.open();
                }
                this._isFirstWrite = false;
            }
            this._isFirstWriteAfterOpen = false;
            let documentElement = null;
            let documentTypeNode = null;
            for (const node of root._childNodes) {
                if (node['tagName'] === 'HTML') {
                    documentElement = node;
                }
                else if (node.nodeType === NodeTypeEnum_js_1.default.documentTypeNode) {
                    documentTypeNode = node;
                }
                if (documentElement && documentTypeNode) {
                    break;
                }
            }
            if (documentElement) {
                if (!this.documentElement) {
                    if (documentTypeNode) {
                        this.appendChild(documentTypeNode);
                    }
                    this.appendChild(documentElement);
                }
                else {
                    const rootBody = ParentNodeUtility_js_1.default.getElementByTagName(root, 'body');
                    const body = ParentNodeUtility_js_1.default.getElementByTagName(this, 'body');
                    if (rootBody && body) {
                        for (const child of rootBody._childNodes.slice()) {
                            body.appendChild(child);
                        }
                    }
                }
                // Remaining nodes outside the <html> element are added to the <body> element.
                const body = ParentNodeUtility_js_1.default.getElementByTagName(this, 'body');
                if (body) {
                    for (const child of root._childNodes.slice()) {
                        if (child['tagName'] !== 'HTML' && child.nodeType !== NodeTypeEnum_js_1.default.documentTypeNode) {
                            body.appendChild(child);
                        }
                    }
                }
            }
            else {
                const documentElement = this.createElement('html');
                const bodyElement = this.createElement('body');
                const headElement = this.createElement('head');
                for (const child of root._childNodes.slice()) {
                    bodyElement.appendChild(child);
                }
                documentElement.appendChild(headElement);
                documentElement.appendChild(bodyElement);
                this.appendChild(documentElement);
            }
        }
        else {
            const bodyNode = ParentNodeUtility_js_1.default.getElementByTagName(root, 'body');
            const body = ParentNodeUtility_js_1.default.getElementByTagName(this, 'body');
            for (const child of (bodyNode || root)._childNodes.slice()) {
                body.appendChild(child);
            }
        }
    }
    /**
     * Opens the document.
     *
     * @returns Document.
     */
    open() {
        this._isFirstWriteAfterOpen = true;
        for (const eventType of Object.keys(this._listeners)) {
            const listeners = this._listeners[eventType];
            if (listeners) {
                for (const listener of listeners) {
                    this.removeEventListener(eventType, listener);
                }
            }
        }
        for (const child of this._childNodes.slice()) {
            this.removeChild(child);
        }
        return this;
    }
    /**
     * Closes the document.
     */
    close() { }
    /* eslint-disable jsdoc/valid-types */
    /**
     * Creates an element.
     *
     * @param qualifiedName Tag name.
     * @param [options] Options.
     * @param [options.is] Tag name of a custom element previously defined via customElements.define().
     * @returns Element.
     */
    createElement(qualifiedName, options) {
        return this.createElementNS(NamespaceURI_js_1.default.html, qualifiedName, options);
    }
    /**
     * Creates an element with the specified namespace URI and qualified name.
     *
     * @param namespaceURI Namespace URI.
     * @param qualifiedName Tag name.
     * @param [options] Options.
     * @param [options.is] Tag name of a custom element previously defined via customElements.define().
     * @returns Element.
     */
    createElementNS(namespaceURI, qualifiedName, options) {
        const tagName = String(qualifiedName).toUpperCase();
        let customElementClass;
        if (this.defaultView && options && options.is) {
            customElementClass = this.defaultView.customElements.get(String(options.is));
        }
        else if (this.defaultView) {
            customElementClass = this.defaultView.customElements.get(tagName);
        }
        const elementClass = customElementClass || ElementTag_js_1.default[tagName] || HTMLUnknownElement_js_1.default;
        elementClass._ownerDocument = this;
        const element = new elementClass();
        element.tagName = tagName;
        element.ownerDocument = this;
        element.namespaceURI = namespaceURI;
        if (element instanceof Element_js_1.default && options && options.is) {
            element._isValue = String(options.is);
        }
        return element;
    }
    /* eslint-enable jsdoc/valid-types */
    /**
     * Creates a text node.
     *
     * @param [data] Text data.
     * @returns Text node.
     */
    createTextNode(data) {
        Text_js_1.default._ownerDocument = this;
        return new Text_js_1.default(data);
    }
    /**
     * Creates a comment node.
     *
     * @param [data] Text data.
     * @returns Text node.
     */
    createComment(data) {
        Comment_js_1.default._ownerDocument = this;
        return new Comment_js_1.default(data);
    }
    /**
     * Creates a document fragment.
     *
     * @returns Document fragment.
     */
    createDocumentFragment() {
        DocumentFragment_js_1.default._ownerDocument = this;
        return new DocumentFragment_js_1.default();
    }
    /**
     * Creates a node iterator.
     *
     * @param root Root.
     * @param [whatToShow] What to show.
     * @param [filter] Filter.
     */
    createNodeIterator(root, whatToShow = -1, filter = null) {
        return new NodeIterator_js_1.default(root, whatToShow, filter);
    }
    /**
     * Creates a Tree Walker.
     *
     * @param root Root.
     * @param [whatToShow] What to show.
     * @param [filter] Filter.
     */
    createTreeWalker(root, whatToShow = -1, filter = null) {
        return new TreeWalker_js_1.default(root, whatToShow, filter);
    }
    /**
     * Creates an event.
     *
     * @deprecated
     * @param type Type.
     * @returns Event.
     */
    createEvent(type) {
        if (typeof this.defaultView[type] === 'function') {
            return new this.defaultView[type]('init');
        }
        return new Event_js_1.default('init');
    }
    /**
     * Creates an Attr node.
     *
     * @param qualifiedName Name.
     * @returns Attribute.
     */
    createAttribute(qualifiedName) {
        return this.createAttributeNS(null, qualifiedName.toLowerCase());
    }
    /**
     * Creates a namespaced Attr node.
     *
     * @param namespaceURI Namespace URI.
     * @param qualifiedName Qualified name.
     * @returns Element.
     */
    createAttributeNS(namespaceURI, qualifiedName) {
        Attr_js_1.default._ownerDocument = this;
        const attribute = new Attr_js_1.default();
        attribute.namespaceURI = namespaceURI;
        attribute.name = qualifiedName;
        return attribute;
    }
    /**
     * Imports a node.
     *
     * @param node Node to import.
     * @param [deep=false] Set to "true" if the clone should be deep.
     */
    importNode(node, deep = false) {
        if (!(node instanceof Node_js_1.default)) {
            throw new DOMException_js_1.default('Parameter 1 was not of type Node.');
        }
        const clone = node.cloneNode(deep);
        clone.ownerDocument = this;
        return clone;
    }
    /**
     * Creates a range.
     *
     * @returns Range.
     */
    createRange() {
        return new this.defaultView.Range();
    }
    /**
     * Adopts a node.
     *
     * @param node Node to adopt.
     * @returns Adopted node.
     */
    adoptNode(node) {
        if (!(node instanceof Node_js_1.default)) {
            throw new DOMException_js_1.default('Parameter 1 was not of type Node.');
        }
        const adopted = node.parentNode ? node.parentNode.removeChild(node) : node;
        adopted.ownerDocument = this;
        return adopted;
    }
    /**
     * Returns selection.
     *
     * @returns Selection.
     */
    getSelection() {
        if (!this._selection) {
            this._selection = new Selection_js_1.default(this);
        }
        return this._selection;
    }
    /**
     * Returns a boolean value indicating whether the document or any element inside the document has focus.
     *
     * @returns "true" if the document has focus.
     */
    hasFocus() {
        return !!this.activeElement;
    }
    /**
     * Triggered by window when it is ready.
     */
    _onWindowReady() {
        this._readyStateManager.whenComplete().then(() => {
            this.readyState = DocumentReadyStateEnum_js_1.default.complete;
            this.dispatchEvent(new Event_js_1.default('readystatechange'));
            this.dispatchEvent(new Event_js_1.default('load', { bubbles: true }));
        });
    }
    /**
     * Creates a Processing Instruction node.
     *
     * @returns IProcessingInstruction.
     * @param target
     * @param data
     */
    createProcessingInstruction(target, data) {
        if (!target || !PROCESSING_INSTRUCTION_TARGET_REGEXP.test(target)) {
            throw new DOMException_js_1.default(`Failed to execute 'createProcessingInstruction' on 'Document': The target provided ('${target}') is not a valid name.`);
        }
        if (data.includes('?>')) {
            throw new DOMException_js_1.default(`Failed to execute 'createProcessingInstruction' on 'Document': The data provided ('?>') contains '?>'`);
        }
        ProcessingInstruction_js_1.default._ownerDocument = this;
        const processingInstruction = new ProcessingInstruction_js_1.default(data);
        processingInstruction.target = target;
        return processingInstruction;
    }
}
Document._defaultView = null;
Document._windowClass = null;
exports.default = Document;
//# sourceMappingURL=Document.cjs.map