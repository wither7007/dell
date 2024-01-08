"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElementNamedNodeMap_js_1 = __importDefault(require("../html-element/HTMLElementNamedNodeMap.cjs"));
const HTMLAnchorElementUtility_js_1 = __importDefault(require("./HTMLAnchorElementUtility.cjs"));
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
class HTMLAnchorElementNamedNodeMap extends HTMLElementNamedNodeMap_js_1.default {
    /**
     * @override
     */
    setNamedItem(item) {
        const replacedItem = super.setNamedItem(item);
        if (item.name === 'rel' && this._ownerElement._relList) {
            this._ownerElement._relList._updateIndices();
        }
        else if (item.name === 'href') {
            this._ownerElement._url = HTMLAnchorElementUtility_js_1.default.getUrl(this._ownerElement.ownerDocument, item.value);
        }
        return replacedItem || null;
    }
    /**
     * @override
     */
    _removeNamedItem(name) {
        const removedItem = super._removeNamedItem(name);
        if (removedItem) {
            if (removedItem.name === 'rel' && this._ownerElement._relList) {
                this._ownerElement._relList._updateIndices();
            }
            else if (removedItem.name === 'href') {
                this._ownerElement._url = null;
            }
        }
        return removedItem;
    }
}
exports.default = HTMLAnchorElementNamedNodeMap;
//# sourceMappingURL=HTMLAnchorElementNamedNodeMap.cjs.map