import HTMLElement from '../html-element/HTMLElement.cjs';
import IHTMLSlotElement from './IHTMLSlotElement.cjs';
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
export default class HTMLSlotElement extends HTMLElement implements IHTMLSlotElement {
    onslotchange: (event: Event) => void | null;
    /**
     * Returns name.
     *
     * @returns Name.
     */
    get name(): string;
    /**
     * Sets name.
     *
     * @param name Name.
     */
    set name(name: string);
    /**
     * Sets the slot's manually assigned nodes to an ordered set of slottables.
     *
     * @param _nodes Nodes.
     */
    assign(..._nodes: Array<IText | IElement>): void;
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
     * Returns assigned elements.
     *
     * @param [_options] Options.
     * @param [_options.flatten] A boolean value indicating whether to return the assigned elements of any available child <slot> elements (true) or not (false). Defaults to false.
     * @returns Nodes.
     */
    assignedElements(_options?: {
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
//# sourceMappingURL=HTMLSlotElement.d.ts.map