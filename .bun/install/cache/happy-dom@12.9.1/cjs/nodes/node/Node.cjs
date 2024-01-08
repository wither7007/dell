"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventTarget_js_1 = __importDefault(require("../../event/EventTarget.cjs"));
const NodeTypeEnum_js_1 = __importDefault(require("./NodeTypeEnum.cjs"));
const NodeDocumentPositionEnum_js_1 = __importDefault(require("./NodeDocumentPositionEnum.cjs"));
const NodeUtility_js_1 = __importDefault(require("./NodeUtility.cjs"));
const NodeList_js_1 = __importDefault(require("./NodeList.cjs"));
/**
 * Node.
 */
class Node extends EventTarget_js_1.default {
    /**
     * Constructor.
     */
    constructor() {
        super();
        this.ELEMENT_NODE = NodeTypeEnum_js_1.default.elementNode;
        this.ATTRIBUTE_NODE = NodeTypeEnum_js_1.default.attributeNode;
        this.TEXT_NODE = NodeTypeEnum_js_1.default.textNode;
        this.CDATA_SECTION_NODE = NodeTypeEnum_js_1.default.cdataSectionNode;
        this.COMMENT_NODE = NodeTypeEnum_js_1.default.commentNode;
        this.DOCUMENT_NODE = NodeTypeEnum_js_1.default.documentNode;
        this.DOCUMENT_TYPE_NODE = NodeTypeEnum_js_1.default.documentTypeNode;
        this.DOCUMENT_FRAGMENT_NODE = NodeTypeEnum_js_1.default.documentFragmentNode;
        this.PROCESSING_INSTRUCTION_NODE = NodeTypeEnum_js_1.default.processingInstructionNode;
        this.DOCUMENT_POSITION_CONTAINED_BY = NodeDocumentPositionEnum_js_1.default.containedBy;
        this.DOCUMENT_POSITION_CONTAINS = NodeDocumentPositionEnum_js_1.default.contains;
        this.DOCUMENT_POSITION_DISCONNECTED = NodeDocumentPositionEnum_js_1.default.disconnect;
        this.DOCUMENT_POSITION_FOLLOWING = NodeDocumentPositionEnum_js_1.default.following;
        this.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = NodeDocumentPositionEnum_js_1.default.implementationSpecific;
        this.DOCUMENT_POSITION_PRECEDING = NodeDocumentPositionEnum_js_1.default.preceding;
        this.ownerDocument = null;
        this.parentNode = null;
        this.isConnected = false;
        // Custom Properties (not part of HTML standard)
        this._rootNode = null;
        this._formNode = null;
        this._selectNode = null;
        this._textAreaNode = null;
        this._observers = [];
        this._childNodes = new NodeList_js_1.default();
        this.ownerDocument = this.constructor._ownerDocument;
    }
    /**
     * Returns `Symbol.toStringTag`.
     *
     * @returns `Symbol.toStringTag`.
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
    /**
     * Get child nodes.
     *
     * @returns Child nodes list.
     */
    get childNodes() {
        return this._childNodes;
    }
    /**
     * Get text value of children.
     *
     * @returns Text content.
     */
    get textContent() {
        // Sub-classes should implement this method.
        return null;
    }
    /**
     * Sets text content.
     *
     * @param _textContent Text content.
     */
    set textContent(_textContent) {
        // Do nothing.
        // Sub-classes should implement this method.
    }
    /**
     * Node value.
     *
     * @returns Node value.
     */
    get nodeValue() {
        return null;
    }
    /**
     * Sets node value.
     */
    set nodeValue(_nodeValue) {
        // Do nothing
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return '';
    }
    /**
     * Previous sibling.
     *
     * @returns Node.
     */
    get previousSibling() {
        if (this.parentNode) {
            const index = this.parentNode._childNodes.indexOf(this);
            if (index > 0) {
                return this.parentNode._childNodes[index - 1];
            }
        }
        return null;
    }
    /**
     * Next sibling.
     *
     * @returns Node.
     */
    get nextSibling() {
        if (this.parentNode) {
            const index = this.parentNode._childNodes.indexOf(this);
            if (index > -1 && index + 1 < this.parentNode._childNodes.length) {
                return this.parentNode._childNodes[index + 1];
            }
        }
        return null;
    }
    /**
     * First child.
     *
     * @returns Node.
     */
    get firstChild() {
        if (this._childNodes.length > 0) {
            return this._childNodes[0];
        }
        return null;
    }
    /**
     * Last child.
     *
     * @returns Node.
     */
    get lastChild() {
        if (this._childNodes.length > 0) {
            return this._childNodes[this._childNodes.length - 1];
        }
        return null;
    }
    /**
     * Returns parent element.
     *
     * @returns Element.
     */
    get parentElement() {
        let parent = this.parentNode;
        while (parent && parent.nodeType !== NodeTypeEnum_js_1.default.elementNode) {
            parent = parent.parentNode;
        }
        return parent;
    }
    /**
     * Returns base URI.
     *
     * @returns Base URI.
     */
    get baseURI() {
        const base = this.ownerDocument.querySelector('base');
        if (base) {
            return base.href;
        }
        return this.ownerDocument.defaultView.location.href;
    }
    /**
     * Returns "true" if the node has child nodes.
     *
     * @returns "true" if the node has child nodes.
     */
    hasChildNodes() {
        return this._childNodes.length > 0;
    }
    /**
     * Returns "true" if this node contains the other node.
     *
     * @param otherNode Node to test with.
     * @returns "true" if this node contains the other node.
     */
    contains(otherNode) {
        return NodeUtility_js_1.default.isInclusiveAncestor(this, otherNode);
    }
    /**
     * Returns closest root node (Document or ShadowRoot).
     *
     * @param options Options.
     * @param options.composed A Boolean that indicates whether the shadow root should be returned (false, the default), or a root node beyond shadow root (true).
     * @returns Node.
     */
    getRootNode(options) {
        if (!this.isConnected) {
            return this;
        }
        if (this._rootNode && !options?.composed) {
            return this._rootNode;
        }
        return this.ownerDocument;
    }
    /**
     * Clones a node.
     *
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = new this.constructor();
        // Document has childNodes directly when it is created
        if (clone._childNodes.length) {
            for (const node of clone._childNodes.slice()) {
                node.parentNode.removeChild(node);
            }
        }
        if (deep) {
            for (const childNode of this._childNodes) {
                const childClone = childNode.cloneNode(true);
                childClone.parentNode = clone;
                clone._childNodes.push(childClone);
            }
        }
        clone.ownerDocument = this.ownerDocument;
        return clone;
    }
    /**
     * Append a child node to childNodes.
     *
     * @param  node Node to append.
     * @returns Appended node.
     */
    appendChild(node) {
        return NodeUtility_js_1.default.appendChild(this, node);
    }
    /**
     * Remove Child element from childNodes array.
     *
     * @param node Node to remove.
     * @returns Removed node.
     */
    removeChild(node) {
        return NodeUtility_js_1.default.removeChild(this, node);
    }
    /**
     * Inserts a node before another.
     *
     * @param newNode Node to insert.
     * @param referenceNode Node to insert before.
     * @returns Inserted node.
     */
    insertBefore(newNode, referenceNode) {
        if (arguments.length < 2) {
            throw new TypeError(`Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only ${arguments.length} present.`);
        }
        return NodeUtility_js_1.default.insertBefore(this, newNode, referenceNode);
    }
    /**
     * Replaces a node with another.
     *
     * @param newChild New child.
     * @param oldChild Old child.
     * @returns Replaced node.
     */
    replaceChild(newChild, oldChild) {
        this.insertBefore(newChild, oldChild);
        this.removeChild(oldChild);
        return oldChild;
    }
    /**
     * Converts the node to a string.
     *
     * @param listener Listener.
     */
    toString() {
        return `[object ${this.constructor.name}]`;
    }
    /**
     * Observeres the node.
     * Used by MutationObserver, but it is not part of the HTML standard.
     *
     * @param listener Listener.
     */
    _observe(listener) {
        this._observers.push(listener);
        if (listener.options.subtree) {
            for (const node of this._childNodes) {
                node._observe(listener);
            }
        }
    }
    /**
     * Stops observing the node.
     * Used by MutationObserver, but it is not part of the HTML standard.
     *
     * @param listener Listener.
     */
    _unobserve(listener) {
        const index = this._observers.indexOf(listener);
        if (index !== -1) {
            this._observers.splice(index, 1);
        }
        if (listener.options.subtree) {
            for (const node of this._childNodes) {
                node._unobserve(listener);
            }
        }
    }
    /**
     * Connects this element to another element.
     *
     * @param parentNode Parent node.
     */
    _connectToNode(parentNode = null) {
        const isConnected = !!parentNode && parentNode.isConnected;
        const formNode = this._formNode;
        const selectNode = this._selectNode;
        const textAreaNode = this._textAreaNode;
        if (this.nodeType !== NodeTypeEnum_js_1.default.documentFragmentNode) {
            this.parentNode = parentNode;
            this._rootNode = isConnected && parentNode ? parentNode._rootNode : null;
            if (this['tagName'] !== 'FORM') {
                this._formNode = parentNode ? parentNode._formNode : null;
            }
            if (this['tagName'] !== 'SELECT') {
                this._selectNode = parentNode ? parentNode._selectNode : null;
            }
            if (this['tagName'] !== 'TEXTAREA') {
                this._textAreaNode = parentNode ? parentNode._textAreaNode : null;
            }
        }
        if (this.isConnected !== isConnected) {
            this.isConnected = isConnected;
            if (!isConnected) {
                if (this.ownerDocument['_activeElement'] === this) {
                    this.ownerDocument['_activeElement'] = null;
                }
            }
            if (isConnected && this.connectedCallback) {
                this.connectedCallback();
            }
            else if (!isConnected && this.disconnectedCallback) {
                this.disconnectedCallback();
            }
            for (const child of this._childNodes) {
                child._connectToNode(this);
            }
            // eslint-disable-next-line
            if (this._shadowRoot) {
                // eslint-disable-next-line
                this._shadowRoot._connectToNode(this);
            }
        }
        else if (formNode !== this._formNode ||
            selectNode !== this._selectNode ||
            textAreaNode !== this._textAreaNode) {
            for (const child of this._childNodes) {
                child._connectToNode(this);
            }
        }
    }
    /**
     * Reports the position of its argument node relative to the node on which it is called.
     *
     * @see https://dom.spec.whatwg.org/#dom-node-comparedocumentposition
     * @param otherNode Other node.
     */
    compareDocumentPosition(otherNode) {
        /**
         * 1. If this is other, then return zero.
         */
        if (this === otherNode) {
            return 0;
        }
        /**
         * 2. Let node1 be other and node2 be this.
         */
        let node1 = otherNode;
        let node2 = this;
        /**
         * 3. Let attr1 and attr2 be null.
         */
        let attr1 = null;
        let attr2 = null;
        /**
         * 4. If node1 is an attribute, then set attr1 to node1 and node1 to attr1’s element.
         */
        if (node1.nodeType === Node.ATTRIBUTE_NODE) {
            attr1 = node1;
            node1 = attr1.ownerElement;
        }
        /**
         * 5. If node2 is an attribute, then:
         * 5.1. Set attr2 to node2 and node2 to attr2’s element.
         */
        if (node2.nodeType === Node.ATTRIBUTE_NODE) {
            attr2 = node2;
            node2 = attr2.ownerElement;
            /**
             * 5.2. If attr1 and node1 are non-null, and node2 is node1, then:
             */
            if (attr1 !== null && node1 !== null && node2 === node1) {
                /**
                 * 5.2.1. For each attr in node2’s attribute list:
                 */
                for (const attr of Object.values(node2.attributes)) {
                    /**
                     * 5.2.1.1. If attr equals attr1, then return the result of adding DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC and DOCUMENT_POSITION_PRECEDING.
                     */
                    if (NodeUtility_js_1.default.isEqualNode(attr, attr1)) {
                        return (Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_PRECEDING);
                    }
                    /**
                     * 5.2.1.2. If attr equals attr2, then return the result of adding DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC and DOCUMENT_POSITION_FOLLOWING.
                     */
                    if (NodeUtility_js_1.default.isEqualNode(attr, attr2)) {
                        return (Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_FOLLOWING);
                    }
                }
            }
        }
        const node2Ancestors = [];
        let node2Ancestor = node2;
        while (node2Ancestor) {
            /**
             * 7. If node1 is an ancestor of node2 […] then return the result of adding DOCUMENT_POSITION_CONTAINS to DOCUMENT_POSITION_PRECEDING.
             */
            if (node2Ancestor === node1) {
                return Node.DOCUMENT_POSITION_CONTAINS | Node.DOCUMENT_POSITION_PRECEDING;
            }
            node2Ancestors.push(node2Ancestor);
            node2Ancestor = node2Ancestor.parentNode;
        }
        const node1Ancestors = [];
        let node1Ancestor = node1;
        while (node1Ancestor) {
            /**
             * 8. If node1 is a descendant of node2 […] then return the result of adding DOCUMENT_POSITION_CONTAINED_BY to DOCUMENT_POSITION_FOLLOWING.
             */
            if (node1Ancestor === node2) {
                return Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
            }
            node1Ancestors.push(node1Ancestor);
            node1Ancestor = node1Ancestor.parentNode;
        }
        const reverseArrayIndex = (array, reverseIndex) => {
            return array[array.length - 1 - reverseIndex];
        };
        const root = reverseArrayIndex(node2Ancestors, 0);
        /**
         * 6. If node1 or node2 is null, or node1’s root is not node2’s root, then return the result of adding
         * DOCUMENT_POSITION_DISCONNECTED, DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC, and either
         * DOCUMENT_POSITION_PRECEDING or DOCUMENT_POSITION_FOLLOWING, with the constraint that this is to be consistent, together.
         */
        if (!root || root !== reverseArrayIndex(node1Ancestors, 0)) {
            return (Node.DOCUMENT_POSITION_DISCONNECTED |
                Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC |
                Node.DOCUMENT_POSITION_FOLLOWING);
        }
        // Find the lowest common ancestor
        let commonAncestorIndex = 0;
        const ancestorsMinLength = Math.min(node2Ancestors.length, node1Ancestors.length);
        for (let i = 0; i < ancestorsMinLength; ++i) {
            const node2Ancestor = reverseArrayIndex(node2Ancestors, i);
            const node1Ancestor = reverseArrayIndex(node1Ancestors, i);
            if (node2Ancestor !== node1Ancestor) {
                break;
            }
            commonAncestorIndex = i;
        }
        const commonAncestor = reverseArrayIndex(node2Ancestors, commonAncestorIndex);
        // Indexes within the common ancestor
        let indexes = 0;
        let node2Index = -1;
        let node1Index = -1;
        const node2Node = reverseArrayIndex(node2Ancestors, commonAncestorIndex + 1);
        const node1Node = reverseArrayIndex(node1Ancestors, commonAncestorIndex + 1);
        const computeNodeIndexes = (nodes) => {
            for (const childNode of nodes) {
                computeNodeIndexes(childNode._childNodes);
                if (childNode === node2Node) {
                    node2Index = indexes;
                }
                else if (childNode === node1Node) {
                    node1Index = indexes;
                }
                if (node2Index !== -1 && node1Index !== -1) {
                    break;
                }
                indexes++;
            }
        };
        computeNodeIndexes(commonAncestor._childNodes);
        /**
         * 9. If node1 is preceding node2, then return DOCUMENT_POSITION_PRECEDING.
         * 10. Return DOCUMENT_POSITION_FOLLOWING.
         */
        return node1Index < node2Index
            ? Node.DOCUMENT_POSITION_PRECEDING
            : Node.DOCUMENT_POSITION_FOLLOWING;
    }
    /**
     * Normalizes the sub-tree of the node, i.e. joins adjacent text nodes, and
     * removes all empty text nodes.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize
     */
    normalize() {
        let child = this.firstChild;
        while (child) {
            if (NodeUtility_js_1.default.isTextNode(child)) {
                // Append text of all following text nodes, and remove them.
                while (NodeUtility_js_1.default.isTextNode(child.nextSibling)) {
                    child.data += child.nextSibling.data;
                    child.nextSibling.remove();
                }
                // Remove text node if it is still empty.
                if (!child.data.length) {
                    const node = child;
                    child = child.nextSibling;
                    node.remove();
                    continue;
                }
            }
            else {
                // Normalize child nodes recursively.
                child.normalize();
            }
            child = child.nextSibling;
        }
    }
    /**
     * Determines whether the given node is equal to the current node.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/isSameNode
     * @param node Node to check.
     * @returns True if the given node is equal to the current node, otherwise false.
     */
    isSameNode(node) {
        return this === node;
    }
}
// Owner document is set when the Node is created by the Document
Node._ownerDocument = null;
// Public properties
Node.ELEMENT_NODE = NodeTypeEnum_js_1.default.elementNode;
Node.ATTRIBUTE_NODE = NodeTypeEnum_js_1.default.attributeNode;
Node.TEXT_NODE = NodeTypeEnum_js_1.default.textNode;
Node.CDATA_SECTION_NODE = NodeTypeEnum_js_1.default.cdataSectionNode;
Node.COMMENT_NODE = NodeTypeEnum_js_1.default.commentNode;
Node.DOCUMENT_NODE = NodeTypeEnum_js_1.default.documentNode;
Node.DOCUMENT_TYPE_NODE = NodeTypeEnum_js_1.default.documentTypeNode;
Node.DOCUMENT_FRAGMENT_NODE = NodeTypeEnum_js_1.default.documentFragmentNode;
Node.PROCESSING_INSTRUCTION_NODE = NodeTypeEnum_js_1.default.processingInstructionNode;
Node.DOCUMENT_POSITION_CONTAINED_BY = NodeDocumentPositionEnum_js_1.default.containedBy;
Node.DOCUMENT_POSITION_CONTAINS = NodeDocumentPositionEnum_js_1.default.contains;
Node.DOCUMENT_POSITION_DISCONNECTED = NodeDocumentPositionEnum_js_1.default.disconnect;
Node.DOCUMENT_POSITION_FOLLOWING = NodeDocumentPositionEnum_js_1.default.following;
Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = NodeDocumentPositionEnum_js_1.default.implementationSpecific;
Node.DOCUMENT_POSITION_PRECEDING = NodeDocumentPositionEnum_js_1.default.preceding;
exports.default = Node;
//# sourceMappingURL=Node.cjs.map