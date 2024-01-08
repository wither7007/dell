"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RadioNodeList_js_1 = __importDefault(require("./RadioNodeList.cjs"));
/**
 * HTMLFormControlsCollection.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection
 */
class HTMLFormControlsCollection extends Array {
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
        if (this._namedItems[name] && this._namedItems[name].length) {
            if (this._namedItems[name].length === 1) {
                return this._namedItems[name][0];
            }
            return this._namedItems[name];
        }
        return null;
    }
    /**
     * Appends named item.
     *
     * @param node Node.
     * @param name Name.
     */
    _appendNamedItem(node, name) {
        if (name) {
            this._namedItems[name] = this._namedItems[name] || new RadioNodeList_js_1.default();
            if (!this._namedItems[name].includes(node)) {
                this._namedItems[name].push(node);
            }
            if (this._isValidPropertyName(name)) {
                this[name] =
                    this._namedItems[name].length > 1 ? this._namedItems[name] : this._namedItems[name][0];
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
                    this[name] =
                        this._namedItems[name].length > 1 ? this._namedItems[name] : this._namedItems[name][0];
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
exports.default = HTMLFormControlsCollection;
//# sourceMappingURL=HTMLFormControlsCollection.cjs.map