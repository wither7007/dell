"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * HTML collection.
 */
class HTMLCollection extends Array {
    constructor() {
        super(...arguments);
        this._namedItems = {};
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
     * @returns Node.
     */
    namedItem(name) {
        return this._namedItems[name] && this._namedItems[name].length
            ? this._namedItems[name][0]
            : null;
    }
    /**
     * Appends named item.
     *
     * @param node Node.
     * @param name Name.
     */
    _appendNamedItem(node, name) {
        if (name) {
            this._namedItems[name] = this._namedItems[name] || [];
            if (!this._namedItems[name].includes(node)) {
                this._namedItems[name].push(node);
            }
            if (!this.hasOwnProperty(name) && this._isValidPropertyName(name)) {
                this[name] = this._namedItems[name][0];
            }
        }
    }
    /**
     * Appends named item.
     *
     * @param node Node.
     * @param name Name.
     */
    _removeNamedItem(node, name) {
        if (name && this._namedItems[name]) {
            const index = this._namedItems[name].indexOf(node);
            if (index > -1) {
                this._namedItems[name].splice(index, 1);
                if (this._namedItems[name].length === 0) {
                    delete this._namedItems[name];
                    if (this.hasOwnProperty(name) && this._isValidPropertyName(name)) {
                        delete this[name];
                    }
                }
                else if (this._isValidPropertyName(name)) {
                    this[name] = this._namedItems[name][0];
                }
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
            !Array.prototype.hasOwnProperty(name) &&
            (isNaN(Number(name)) || name.includes('.')));
    }
}
exports.default = HTMLCollection;
//# sourceMappingURL=HTMLCollection.cjs.map