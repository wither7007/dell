import IAttr from '../attr/IAttr.cjs';
import HTMLElementNamedNodeMap from '../html-element/HTMLElementNamedNodeMap.cjs';
import HTMLAnchorElement from './HTMLAnchorElement.cjs';
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
export default class HTMLAnchorElementNamedNodeMap extends HTMLElementNamedNodeMap {
    protected _ownerElement: HTMLAnchorElement;
    /**
     * @override
     */
    setNamedItem(item: IAttr): IAttr | null;
    /**
     * @override
     */
    _removeNamedItem(name: string): IAttr | null;
}
//# sourceMappingURL=HTMLAnchorElementNamedNodeMap.d.ts.map