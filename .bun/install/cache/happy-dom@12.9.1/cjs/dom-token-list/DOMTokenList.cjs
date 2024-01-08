"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DOM Token List.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList.
 */
class DOMTokenList {
    /**
     * Constructor.
     *
     * @param ownerElement Owner element.
     * @param attributeName Attribute name.
     */
    constructor(ownerElement, attributeName) {
        this.length = 0;
        this._ownerElement = ownerElement;
        this._attributeName = attributeName;
        this._updateIndices();
    }
    /**
     * Set value.
     *
     * @param value Value.
     */
    set value(value) {
        this._ownerElement.setAttribute(this._attributeName, value);
    }
    /**
     * Get value.
     */
    get value() {
        return this._ownerElement.getAttribute(this._attributeName);
    }
    /**
     * Get ClassName.
     *
     * @param index Index.
     * */
    item(index) {
        index = typeof index === 'number' ? index : 0;
        return index >= 0 && this[index] ? this[index] : null;
    }
    /**
     * Replace Token.
     *
     * @param token Token.
     * @param newToken NewToken.
     */
    replace(token, newToken) {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        const list = attr ? Array.from(new Set(attr.split(' '))) : [];
        const index = list.indexOf(token);
        if (index === -1) {
            return false;
        }
        list[index] = newToken;
        this._ownerElement.setAttribute(this._attributeName, list.join(' '));
        return true;
    }
    /**
     * Supports.
     *
     * @param _token Token.
     */
    supports(_token) {
        return false;
    }
    /**
     * Returns an iterator, allowing you to go through all values of the key/value pairs contained in this object.
     */
    values() {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        const list = attr ? Array.from(new Set(attr.split(' '))) : [];
        return list.values();
    }
    /**
     * Returns an iterator, allowing you to go through all key/value pairs contained in this object.
     */
    entries() {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        const list = attr ? Array.from(new Set(attr.split(' '))) : [];
        return list.entries();
    }
    /**
     * Executes a provided callback function once for each DOMTokenList element.
     *
     * @param callback
     * @param thisArg
     */
    forEach(callback, thisArg) {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        const list = attr ? Array.from(new Set(attr.split(' '))) : [];
        return list.forEach(callback, thisArg);
    }
    /**
     * Returns an iterator, allowing you to go through all keys of the key/value pairs contained in this object.
     *
     */
    keys() {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        const list = attr ? Array.from(new Set(attr.split(' '))) : [];
        return list.keys();
    }
    /**
     * Adds tokens.
     *
     * @param tokens Tokens.
     */
    add(...tokens) {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        const list = attr ? Array.from(new Set(attr.split(' '))) : [];
        for (const token of tokens) {
            const index = list.indexOf(token);
            if (index === -1) {
                list.push(token);
            }
            else {
                list[index] = token;
            }
        }
        this._ownerElement.setAttribute(this._attributeName, list.join(' '));
    }
    /**
     * Removes tokens.
     *
     * @param tokens Tokens.
     */
    remove(...tokens) {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        const list = attr ? Array.from(new Set(attr.split(' '))) : [];
        for (const token of tokens) {
            const index = list.indexOf(token);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        this._ownerElement.setAttribute(this._attributeName, list.join(' '));
    }
    /**
     * Check if the list contains a class.
     *
     * @param className Class name.
     * @returns TRUE if it contains.
     */
    contains(className) {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        return (attr ? attr.split(' ') : []).includes(className);
    }
    /**
     * Toggle a class name.
     *
     * @param token A string representing the class name you want to toggle.
     * @param [force] If included, turns the toggle into a one way-only operation. If set to `false`, then class name will only be removed, but not added. If set to `true`, then class name will only be added, but not removed.
     * @returns A boolean value, `true` or `false`, indicating whether class name is in the list after the call or not.
     */
    toggle(token, force) {
        let shouldAdd;
        if (force !== undefined) {
            shouldAdd = force;
        }
        else {
            shouldAdd = !this.contains(token);
        }
        if (shouldAdd) {
            this.add(token);
            return true;
        }
        this.remove(token);
        return false;
    }
    /**
     * Updates indices.
     */
    _updateIndices() {
        const attr = this._ownerElement.getAttribute(this._attributeName);
        const list = attr ? Array.from(new Set(attr.split(' '))) : [];
        for (let i = list.length - 1, max = this.length; i < max; i++) {
            delete this[i];
        }
        for (let i = 0, max = list.length; i < max; i++) {
            this[i] = list[i];
        }
        this.length = list.length;
    }
    /**
     * Returns DOMTokenList value.
     */
    toString() {
        return this.value || '';
    }
}
exports.default = DOMTokenList;
//# sourceMappingURL=DOMTokenList.cjs.map