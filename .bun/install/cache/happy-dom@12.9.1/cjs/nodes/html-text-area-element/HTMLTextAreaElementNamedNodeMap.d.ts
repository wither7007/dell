import IAttr from '../attr/IAttr.cjs';
import HTMLElementNamedNodeMap from '../html-element/HTMLElementNamedNodeMap.cjs';
import HTMLTextAreaElement from './HTMLTextAreaElement.cjs';
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
export default class HTMLTextAreaElementNamedNodeMap extends HTMLElementNamedNodeMap {
    protected _ownerElement: HTMLTextAreaElement;
    /**
     * @override
     */
    setNamedItem(item: IAttr): IAttr | null;
    /**
     * @override
     */
    _removeNamedItem(name: string): IAttr | null;
}
//# sourceMappingURL=HTMLTextAreaElementNamedNodeMap.d.ts.map