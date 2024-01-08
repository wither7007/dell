import NamedNodeMap from '../../named-node-map/NamedNodeMap.cjs';
import IAttr from '../attr/IAttr.cjs';
import Element from './Element.cjs';
/**
 * Named Node Map.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
 */
export default class ElementNamedNodeMap extends NamedNodeMap {
    protected _ownerElement: Element;
    /**
     * Constructor.
     *
     * @param ownerElement Owner element.
     */
    constructor(ownerElement: Element);
    /**
     * @override
     */
    getNamedItem(name: string): IAttr | null;
    /**
     * @override
     */
    getNamedItemNS(namespace: string, localName: string): IAttr | null;
    /**
     * @override
     */
    setNamedItem(item: IAttr): IAttr | null;
    /**
     * @override
     */
    _removeNamedItem(name: string): IAttr | null;
    /**
     * @override
     */
    removeNamedItemNS(namespace: string, localName: string): IAttr | null;
    /**
     * Returns attribute name.
     *
     * @param name Name.
     * @returns Attribute name based on namespace.
     */
    protected _getAttributeName(name: any): string;
}
//# sourceMappingURL=ElementNamedNodeMap.d.ts.map