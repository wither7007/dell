import IHTMLElement from '../html-element/IHTMLElement.cjs';
import IText from '../text/IText.cjs';
import IElement from '../element/IElement.cjs';
import INode from '../node/INode.cjs';
import Event from '../../event/Event.cjs';
/**
 * HTML Slot Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement.
 */
export default interface IHTMLSlotElement extends IHTMLElement {
    onslotchange: (event: Event) => void | null;
    name: string;
    /**
     * Sets the slot's manually assigned nodes to an ordered set of slottables.
     *
     * @param nodes Nodes.
     */
    assign(...nodes: Array<IText | IElement>): void;
    /**
     * Returns assigned nodes.
     *
     * @param [options] Options.
     * @param [options.flatten] A boolean value indicating whether to return the assigned nodes of any available child <slot> elements (true) or not (false). Defaults to false.
     * @returns Nodes.
     */
    assignedNodes(options?: {
        flatten?: boolean;
    }): INode[];
    /**
     * Returns assigned nodes.
     *
     * @param [options.flatten] A boolean value indicating whether to return the assigned elements of any available child <slot> elements (true) or not (false). Defaults to false.
     * @returns Nodes.
     */
    assignedElements(options?: {
        flatten?: boolean;
    }): IElement[];
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IHTMLSlotElement;
}
//# sourceMappingURL=IHTMLSlotElement.d.ts.map