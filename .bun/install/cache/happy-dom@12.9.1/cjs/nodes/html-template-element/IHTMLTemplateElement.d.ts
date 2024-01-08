import IDocumentFragment from '../document-fragment/IDocumentFragment.cjs';
import IHTMLElement from '../html-element/IHTMLElement.cjs';
/**
 * HTML Template Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement.
 */
export default interface IHTMLTemplateElement extends IHTMLElement {
    content: IDocumentFragment;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IHTMLTemplateElement;
}
//# sourceMappingURL=IHTMLTemplateElement.d.ts.map