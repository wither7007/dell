"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElementNamedNodeMap_js_1 = __importDefault(require("../html-element/HTMLElementNamedNodeMap.cjs"));
const HTMLLinkElementUtility_js_1 = __importDefault(require("./HTMLLinkElementUtility.cjs"));
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
class HTMLLinkElementNamedNodeMap extends HTMLElementNamedNodeMap_js_1.default {
    /**
     * @override
     */
    setNamedItem(item) {
        const replacedItem = super.setNamedItem(item);
        if (item.name === 'rel' && this._ownerElement._relList) {
            this._ownerElement._relList._updateIndices();
        }
        if (item.name === 'rel' || item.name === 'href') {
            HTMLLinkElementUtility_js_1.default.loadExternalStylesheet(this._ownerElement);
        }
        return replacedItem || null;
    }
    /**
     * @override
     */
    _removeNamedItem(name) {
        const removedItem = super._removeNamedItem(name);
        if (removedItem && removedItem.name === 'rel' && this._ownerElement._relList) {
            this._ownerElement._relList._updateIndices();
        }
        return removedItem;
    }
}
exports.default = HTMLLinkElementNamedNodeMap;
//# sourceMappingURL=HTMLLinkElementNamedNodeMap.cjs.map