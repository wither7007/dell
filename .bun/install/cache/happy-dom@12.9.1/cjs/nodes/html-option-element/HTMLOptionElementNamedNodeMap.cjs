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
class HTMLOptionElementNamedNodeMap extends HTMLElementNamedNodeMap_js_1.default {
    /**
     * @override
     */
    setNamedItem(item) {
        const replacedItem = super.setNamedItem(item);
        if (!this._ownerElement._dirtyness &&
            item.name === 'selected' &&
            replacedItem?.value !== item.value) {
            const selectNode = this._ownerElement._selectNode;
            this._ownerElement._selectedness = true;
            if (selectNode) {
                selectNode._updateOptionItems(this._ownerElement);
            }
        }
        return replacedItem || null;
    }
    /**
     * @override
     */
    _removeNamedItem(name) {
        const removedItem = super._removeNamedItem(name);
        if (removedItem && !this._ownerElement._dirtyness && removedItem.name === 'selected') {
            const selectNode = this._ownerElement._selectNode;
            this._ownerElement._selectedness = false;
            if (selectNode) {
                selectNode._updateOptionItems();
            }
        }
        return removedItem;
    }
}
exports.default = HTMLOptionElementNamedNodeMap;
//# sourceMappingURL=HTMLOptionElementNamedNodeMap.cjs.map