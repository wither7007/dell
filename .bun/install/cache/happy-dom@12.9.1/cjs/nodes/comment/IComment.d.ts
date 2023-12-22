import ICharacterData from '../character-data/ICharacterData.cjs';
export default interface IComment extends ICharacterData {
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IComment;
}
//# sourceMappingURL=IComment.d.ts.map