import Event from '../../event/Event.cjs';
import HTMLElement from '../html-element/HTMLElement.cjs';
import IHTMLDialogElement from './IHTMLDialogElement.cjs';
/**
 * HTML Dialog Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement.
 */
export default class HTMLDialogElement extends HTMLElement implements IHTMLDialogElement {
    returnValue: string;
    oncancel: (event: Event) => void | null;
    onclose: (event: Event) => void | null;
    /**
     * Sets the "open" attribute.
     *
     * @param open Open.
     */
    set open(open: boolean);
    /**
     * Returns open.
     *
     * @returns Open.
     */
    get open(): boolean;
    /**
     * Closes the dialog.
     *
     * @param [returnValue] ReturnValue.
     */
    close(returnValue?: string): void;
    /**
     * Shows the modal.
     */
    showModal(): void;
    /**
     * Shows the dialog.
     */
    show(): void;
}
//# sourceMappingURL=HTMLDialogElement.d.ts.map