"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElementNamedNodeMap_js_1 = __importDefault(require("../html-element/HTMLElementNamedNodeMap.cjs"));
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
class HTMLButtonElementNamedNodeMap extends HTMLElementNamedNodeMap_js_1.default {
    /**
     * @override
     */
    setNamedItem(item) {
        const replacedItem = super.setNamedItem(item);
        if ((item.name === 'id' || item.name === 'name') && this._ownerElement._formNode) {
            if (replacedItem?.value) {
                this._ownerElement._formNode._removeFormControlItem(this._ownerElement, replacedItem.value);
            }
            if (item.value) {
                this._ownerElement._formNode._appendFormControlItem(this._ownerElement, item.value);
            }
        }
        return replacedItem || null;
    }
    /**
     * @override
     */
    _removeNamedItem(name) {
        const removedItem = super._removeNamedItem(name);
        if (removedItem &&
            (removedItem.name === 'id' || removedItem.name === 'name') &&
            this._ownerElement._formNode) {
            this._ownerElement._formNode._removeFormControlItem(this._ownerElement, removedItem.value);
        }
        return removedItem;
    }
}
exports.default = HTMLButtonElementNamedNodeMap;
//# sourceMappingURL=HTMLButtonElementNamedNodeMap.cjs.map