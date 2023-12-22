import IAttr from '../attr/IAttr.cjs';
import HTMLElementNamedNodeMap from '../html-element/HTMLElementNamedNodeMap.cjs';
import HTMLOptionElement from './HTMLOptionElement.cjs';
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
export default class HTMLOptionElementNamedNodeMap extends HTMLElementNamedNodeMap {
    protected _ownerElement: HTMLOptionElement;
    /**
     * @override
     */
    setNamedItem(item: IAttr): IAttr | null;
    /**
     * @override
     */
    _removeNamedItem(name: string): IAttr | null;
}
//# sourceMappingURL=HTMLOptionElementNamedNodeMap.d.ts.map