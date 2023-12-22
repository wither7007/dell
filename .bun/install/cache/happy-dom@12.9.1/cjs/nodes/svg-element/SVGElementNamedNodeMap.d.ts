import IAttr from '../attr/IAttr.cjs';
import ElementNamedNodeMap from '../element/ElementNamedNodeMap.cjs';
import SVGElement from './SVGElement.cjs';
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
export default class SVGElementNamedNodeMap extends ElementNamedNodeMap {
    protected _ownerElement: SVGElement;
    /**
     * @override
     */
    setNamedItem(item: IAttr): IAttr | null;
    /**
     * @override
     */
    _removeNamedItem(name: string): IAttr | null;
}
//# sourceMappingURL=SVGElementNamedNodeMap.d.ts.map