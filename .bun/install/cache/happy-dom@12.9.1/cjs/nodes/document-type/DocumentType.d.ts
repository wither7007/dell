import Node from '../node/Node.cjs';
/**
 * DocumentType.
 */
export default class DocumentType extends Node {
    readonly nodeType = NodeTypeEnum.documentTypeNode;
    name: string;
    publicId: string;
    systemId: string;
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName(): string;
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString(): string;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): DocumentType;
}
//# sourceMappingURL=DocumentType.d.ts.map