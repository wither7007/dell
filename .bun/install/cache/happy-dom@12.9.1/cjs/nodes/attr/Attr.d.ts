import IElement from '../element/IElement.cjs';
import Node from '../node/Node.cjs';
import IAttr from './IAttr.cjs';
/**
 * Attribute node interface.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Attr.
 */
export default class Attr extends Node implements IAttr {
    readonly nodeType = NodeTypeEnum.attributeNode;
    value: string;
    name: string;
    namespaceURI: string;
    /**
     * @deprecated
     */
    readonly ownerElement: IElement;
    /**
     * @deprecated
     */
    readonly specified = true;
    /**
     * Returns local name.
     *
     * @returns Local name.
     */
    get localName(): string;
    /**
     * Returns prefix.
     *
     * @returns Prefix.
     */
    get prefix(): string;
    /**
     * @override
     */
    get textContent(): string;
}
//# sourceMappingURL=Attr.d.ts.map