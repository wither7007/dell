import IAttr from '../attr/IAttr.cjs';
import HTMLElementNamedNodeMap from '../html-element/HTMLElementNamedNodeMap.cjs';
import HTMLInputElement from './HTMLInputElement.cjs';
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
export default class HTMLInputElementNamedNodeMap extends HTMLElementNamedNodeMap {
    protected _ownerElement: HTMLInputElement;
    /**
     * @override
     */
    setNamedItem(item: IAttr): IAttr | null;
    /**
     * @override
     */
    _removeNamedItem(name: string): IAttr | null;
}
//# sourceMappingURL=HTMLInputElementNamedNodeMap.d.ts.map