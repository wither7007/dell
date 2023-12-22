"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ElementNamedNodeMap_js_1 = __importDefault(require("../element/ElementNamedNodeMap.cjs"));
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
class HTMLElementNamedNodeMap extends ElementNamedNodeMap_js_1.default {
    /**
     * @override
     */
    setNamedItem(item) {
        const replacedItem = super.setNamedItem(item);
        if (item.name === 'style' && this._ownerElement._style) {
            this._ownerElement._style.cssText = item.value;
        }
        return replacedItem || null;
    }
    /**
     * @override
     */
    _removeNamedItem(name) {
        const removedItem = super._removeNamedItem(name);
        if (removedItem && removedItem.name === 'style' && this._ownerElement._style) {
            this._ownerElement._style.cssText = '';
        }
        return removedItem;
    }
}
exports.default = HTMLElementNamedNodeMap;
//# sourceMappingURL=HTMLElementNamedNodeMap.cjs.map