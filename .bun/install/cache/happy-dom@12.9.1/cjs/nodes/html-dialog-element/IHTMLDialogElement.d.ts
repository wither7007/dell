import Event from '../../event/Event.cjs';
import IHTMLElement from '../html-element/IHTMLElement.cjs';
/**
 * HTML Dialog Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement.
 */
export default interface IHTMLDialogElement extends IHTMLElement {
    open: boolean;
    returnValue: string;
    oncancel: (event: Event) => void | null;
    onclose: (event: Event) => void | null;
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
//# sourceMappingURL=IHTMLDialogElement.d.ts.map