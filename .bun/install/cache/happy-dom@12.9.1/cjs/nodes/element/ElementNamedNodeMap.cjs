"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamespaceURI_js_1 = __importDefault(require("../../config/NamespaceURI.cjs"));
const MutationRecord_js_1 = __importDefault(require("../../mutation-observer/MutationRecord.cjs"));
const MutationTypeEnum_js_1 = __importDefault(require("../../mutation-observer/MutationTypeEnum.cjs"));
const NamedNodeMap_js_1 = __importDefault(require("../../named-node-map/NamedNodeMap.cjs"));
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
class ElementNamedNodeMap extends NamedNodeMap_js_1.default {
    /**
     * Constructor.
     *
     * @param ownerElement Owner element.
     */
    constructor(ownerElement) {
        super();
        this._ownerElement = ownerElement;
    }
    /**
     * @override
     */
    getNamedItem(name) {
        return this._namedItems[this._getAttributeName(name)] || null;
    }
    /**
     * @override
     */
    getNamedItemNS(namespace, localName) {
        return super.getNamedItemNS(namespace, this._getAttributeName(localName));
    }
    /**
     * @override
     */
    setNamedItem(item) {
        if (!item.name) {
            return null;
        }
        item.name = this._getAttributeName(item.name);
        item.ownerElement = this._ownerElement;
        item.ownerDocument = this._ownerElement.ownerDocument;
        const replacedItem = super.setNamedItem(item);
        const oldValue = replacedItem ? replacedItem.value : null;
        if (this._ownerElement.isConnected) {
            this._ownerElement.ownerDocument['_cacheID']++;
        }
        if (item.name === 'class' && this._ownerElement._classList) {
            this._ownerElement._classList._updateIndices();
        }
        if (item.name === 'id' || item.name === 'name') {
            if (this._ownerElement.parentNode &&
                this._ownerElement.parentNode._children &&
                item.value !== oldValue) {
                if (oldValue) {
                    (this._ownerElement.parentNode._children)._removeNamedItem(this._ownerElement, oldValue);
                }
                if (item.value) {
                    (this._ownerElement.parentNode._children)._appendNamedItem(this._ownerElement, item.value);
                }
            }
        }
        if (this._ownerElement.attributeChangedCallback &&
            this._ownerElement.constructor._observedAttributes &&
            this._ownerElement.constructor._observedAttributes.includes(item.name)) {
            this._ownerElement.attributeChangedCallback(item.name, oldValue, item.value);
        }
        // MutationObserver
        if (this._ownerElement._observers.length > 0) {
            for (const observer of this._ownerElement._observers) {
                if (observer.options.attributes &&
                    (!observer.options.attributeFilter ||
                        observer.options.attributeFilter.includes(item.name))) {
                    const record = new MutationRecord_js_1.default();
                    record.target = this._ownerElement;
                    record.type = MutationTypeEnum_js_1.default.attributes;
                    record.attributeName = item.name;
                    record.oldValue = observer.options.attributeOldValue ? oldValue : null;
                    observer.callback([record], observer.observer);
                }
            }
        }
        return replacedItem || null;
    }
    /**
     * @override
     */
    _removeNamedItem(name) {
        const removedItem = super._removeNamedItem(this._getAttributeName(name));
        if (!removedItem) {
            return null;
        }
        if (this._ownerElement.isConnected) {
            this._ownerElement.ownerDocument['_cacheID']++;
        }
        if (removedItem.name === 'class' && this._ownerElement._classList) {
            this._ownerElement._classList._updateIndices();
        }
        if (removedItem.name === 'id' || removedItem.name === 'name') {
            if (this._ownerElement.parentNode &&
                this._ownerElement.parentNode._children &&
                removedItem.value) {
                (this._ownerElement.parentNode._children)._removeNamedItem(this._ownerElement, removedItem.value);
            }
        }
        if (this._ownerElement.attributeChangedCallback &&
            this._ownerElement.constructor._observedAttributes &&
            this._ownerElement.constructor._observedAttributes.includes(removedItem.name)) {
            this._ownerElement.attributeChangedCallback(removedItem.name, removedItem.value, null);
        }
        // MutationObserver
        if (this._ownerElement._observers.length > 0) {
            for (const observer of this._ownerElement._observers) {
                if (observer.options.attributes &&
                    (!observer.options.attributeFilter ||
                        observer.options.attributeFilter.includes(removedItem.name))) {
                    const record = new MutationRecord_js_1.default();
                    record.target = this._ownerElement;
                    record.type = MutationTypeEnum_js_1.default.attributes;
                    record.attributeName = removedItem.name;
                    record.oldValue = observer.options.attributeOldValue ? removedItem.value : null;
                    observer.callback([record], observer.observer);
                }
            }
        }
        return removedItem;
    }
    /**
     * @override
     */
    removeNamedItemNS(namespace, localName) {
        return super.removeNamedItemNS(namespace, this._getAttributeName(localName));
    }
    /**
     * Returns attribute name.
     *
     * @param name Name.
     * @returns Attribute name based on namespace.
     */
    _getAttributeName(name) {
        if (this._ownerElement.namespaceURI === NamespaceURI_js_1.default.svg) {
            return name;
        }
        return name.toLowerCase();
    }
}
exports.default = ElementNamedNodeMap;
//# sourceMappingURL=ElementNamedNodeMap.cjs.map