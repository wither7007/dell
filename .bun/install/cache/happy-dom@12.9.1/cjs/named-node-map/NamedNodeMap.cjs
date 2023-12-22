"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMException_js_1 = __importDefault(require("../exception/DOMException.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../exception/DOMExceptionNameEnum.cjs"));
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
class NamedNodeMap {
    constructor() {
        this.length = 0;
        this._namedItems = {};
    }
    /**
     * Returns string.
     *
     * @returns string.
     */
    get [Symbol.toStringTag]() {
        return 'NamedNodeMap';
    }
    /**
     * Iterator.
     *
     * @returns Iterator.
     */
    *[Symbol.iterator]() {
        for (let i = 0, max = this.length; i < max; i++) {
            yield this[i];
        }
    }
    /**
     * Returns item by index.
     *
     * @param index Index.
     */
    item(index) {
        return index >= 0 && this[index] ? this[index] : null;
    }
    /**
     * Returns named item.
     *
     * @param name Name.
     * @returns Item.
     */
    getNamedItem(name) {
        return this._namedItems[name] || null;
    }
    /**
     * Returns item by name and namespace.
     *
     * @param namespace Namespace.
     * @param localName Local name of the attribute.
     * @returns Item.
     */
    getNamedItemNS(namespace, localName) {
        const attribute = this.getNamedItem(localName);
        if (attribute && attribute.namespaceURI === namespace && attribute.localName === localName) {
            return attribute;
        }
        for (let i = 0, max = this.length; i < max; i++) {
            if (this[i].namespaceURI === namespace && this[i].localName === localName) {
                return this[i];
            }
        }
        return null;
    }
    /**
     * Sets named item.
     *
     * @param item Item.
     * @returns Replaced item.
     */
    setNamedItem(item) {
        return this._setNamedItemWithoutConsequences(item);
    }
    /**
     * Adds a new namespaced item.
     *
     * @alias setNamedItem()
     * @param item Item.
     * @returns Replaced item.
     */
    setNamedItemNS(item) {
        return this.setNamedItem(item);
    }
    /**
     * Removes an item.
     *
     * @throws DOMException
     * @param name Name of item.
     * @returns Removed item.
     */
    removeNamedItem(name) {
        const item = this._removeNamedItem(name);
        if (!item) {
            throw new DOMException_js_1.default(`Failed to execute 'removeNamedItem' on 'NamedNodeMap': No item with name '${name}' was found.`, DOMExceptionNameEnum_js_1.default.notFoundError);
        }
        return item;
    }
    /**
     * Removes a namespaced item.
     *
     * @param namespace Namespace.
     * @param localName Local name of the item.
     * @returns Removed item.
     */
    removeNamedItemNS(namespace, localName) {
        const attribute = this.getNamedItemNS(namespace, localName);
        if (attribute) {
            return this.removeNamedItem(attribute.name);
        }
        return null;
    }
    /**
     * Sets named item without calling listeners for certain attributes.
     *
     * @param item Item.
     * @returns Replaced item.
     */
    _setNamedItemWithoutConsequences(item) {
        if (item.name) {
            const replacedItem = this._namedItems[item.name] || null;
            this._namedItems[item.name] = item;
            if (replacedItem) {
                this._removeNamedItemIndex(replacedItem);
            }
            this[this.length] = item;
            this.length++;
            if (this._isValidPropertyName(item.name)) {
                this[item.name] = item;
            }
            return replacedItem;
        }
        return null;
    }
    /**
     * Removes an item without throwing if it doesn't exist.
     *
     * @param name Name of item.
     * @returns Removed item, or null if it didn't exist.
     */
    _removeNamedItem(name) {
        return this._removeNamedItemWithoutConsequences(name);
    }
    /**
     * Removes an item without calling listeners for certain attributes.
     *
     * @param name Name of item.
     * @returns Removed item, or null if it didn't exist.
     */
    _removeNamedItemWithoutConsequences(name) {
        const removedItem = this._namedItems[name] || null;
        if (!removedItem) {
            return null;
        }
        this._removeNamedItemIndex(removedItem);
        if (this[name] === removedItem) {
            delete this[name];
        }
        delete this._namedItems[name];
        return removedItem;
    }
    /**
     * Removes an item from index.
     *
     * @param item Item.
     */
    _removeNamedItemIndex(item) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === item) {
                for (let b = i; b < this.length; b++) {
                    if (b < this.length - 1) {
                        this[b] = this[b + 1];
                    }
                    else {
                        delete this[b];
                    }
                }
                this.length--;
                break;
            }
        }
    }
    /**
     * Returns "true" if the property name is valid.
     *
     * @param name Name.
     * @returns True if the property name is valid.
     */
    _isValidPropertyName(name) {
        return (!this.constructor.prototype.hasOwnProperty(name) &&
            (isNaN(Number(name)) || name.includes('.')));
    }
}
exports.default = NamedNodeMap;
//# sourceMappingURL=NamedNodeMap.cjs.map