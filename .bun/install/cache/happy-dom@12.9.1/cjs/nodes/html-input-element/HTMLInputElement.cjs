"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const ValidityState_js_1 = __importDefault(require("../../validity-state/ValidityState.cjs"));
const DOMException_js_1 = __importDefault(require("../../exception/DOMException.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../../exception/DOMExceptionNameEnum.cjs"));
const Event_js_1 = __importDefault(require("../../event/Event.cjs"));
const HTMLInputElementValueSanitizer_js_1 = __importDefault(require("./HTMLInputElementValueSanitizer.cjs"));
const HTMLInputElementSelectionModeEnum_js_1 = __importDefault(require("./HTMLInputElementSelectionModeEnum.cjs"));
const HTMLInputElementSelectionDirectionEnum_js_1 = __importDefault(require("./HTMLInputElementSelectionDirectionEnum.cjs"));
const HTMLInputElementValueStepping_js_1 = __importDefault(require("./HTMLInputElementValueStepping.cjs"));
const FileList_js_1 = __importDefault(require("./FileList.cjs"));
const EventPhaseEnum_js_1 = __importDefault(require("../../event/EventPhaseEnum.cjs"));
const HTMLInputElementDateUtility_js_1 = __importDefault(require("./HTMLInputElementDateUtility.cjs"));
const HTMLLabelElementUtility_js_1 = __importDefault(require("../html-label-element/HTMLLabelElementUtility.cjs"));
const HTMLInputElementNamedNodeMap_js_1 = __importDefault(require("./HTMLInputElementNamedNodeMap.cjs"));
/**
 * HTML Input Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement.
 *
 * Used as reference for some of the logic (like selection range):
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/nodes/nodes/HTMLInputElement-impl.js (MIT licensed).
 */
class HTMLInputElement extends HTMLElement_js_1.default {
    constructor() {
        super(...arguments);
        this.attributes = new HTMLInputElementNamedNodeMap_js_1.default(this);
        // Related to parent form.
        this.formAction = '';
        this.formMethod = '';
        // Any type of input
        this._value = null;
        this._height = 0;
        this._width = 0;
        // Type specific: checkbox/radio
        this.defaultChecked = false;
        this._checked = null;
        // Type specific: file
        this.files = new FileList_js_1.default();
        // All fields
        this.validationMessage = '';
        this.validity = new ValidityState_js_1.default(this);
        // Events
        this.oninput = null;
        this.oninvalid = null;
        this.onselectionchange = null;
        // Type specific: text/password/search/tel/url/week/month
        this._selectionStart = null;
        this._selectionEnd = null;
        this._selectionDirection = HTMLInputElementSelectionDirectionEnum_js_1.default.none;
    }
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height() {
        return this._height;
    }
    /**
     * Sets height.
     *
     * @param height Height.
     */
    set height(height) {
        this._height = height;
        this.setAttribute('height', String(height));
    }
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width() {
        return this._width;
    }
    /**
     * Sets width.
     *
     * @param width Width.
     */
    set width(width) {
        this._width = width;
        this.setAttribute('width', String(width));
    }
    /**
     * Returns size.
     *
     * @returns Size.
     */
    get size() {
        const size = this.getAttribute('size');
        if (size !== null) {
            return parseInt(size);
        }
        return 20;
    }
    /**
     * Sets size.
     *
     * @param size Size.
     */
    set size(size) {
        this.setAttribute('size', String(size));
    }
    /**
     * Returns minlength.
     *
     * @returns Min length.
     */
    get minLength() {
        const minLength = this.getAttribute('minlength');
        if (minLength !== null) {
            return parseInt(minLength);
        }
        return -1;
    }
    /**
     * Sets minlength.
     *
     * @param minLength Min length.
     */
    set minLength(minlength) {
        this.setAttribute('minlength', String(minlength));
    }
    /**
     * Returns maxlength.
     *
     * @returns Max length.
     */
    get maxLength() {
        const maxLength = this.getAttribute('maxlength');
        if (maxLength !== null) {
            return parseInt(maxLength);
        }
        return -1;
    }
    /**
     * Sets maxlength.
     *
     * @param maxlength Max length.
     */
    set maxLength(maxLength) {
        this.setAttribute('maxlength', String(maxLength));
    }
    /**
     * Returns type.
     *
     * @returns Type. Defaults to "text".
     */
    get type() {
        return this.getAttribute('type') || 'text';
    }
    /**
     * Sets type.
     *
     * @param type Type.
     */
    set type(type) {
        this.setAttribute('type', type.toLowerCase());
    }
    /**
     * Returns name.
     *
     * @returns Name.
     */
    get name() {
        return this.getAttribute('name') || '';
    }
    /**
     * Sets name.
     *
     * @param name Name.
     */
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * Returns alt.
     *
     * @returns Alt.
     */
    get alt() {
        return this.getAttribute('alt') || '';
    }
    /**
     * Sets alt.
     *
     * @param alt Alt.
     */
    set alt(alt) {
        this.setAttribute('alt', alt);
    }
    /**
     * Returns min.
     *
     * @returns Min.
     */
    get min() {
        return this.getAttribute('min') || '';
    }
    /**
     * Sets min.
     *
     * @param min Min.
     */
    set min(min) {
        this.setAttribute('min', min);
    }
    /**
     * Returns max.
     *
     * @returns Max.
     */
    get max() {
        return this.getAttribute('max') || '';
    }
    /**
     * Sets max.
     *
     * @param max Max.
     */
    set max(max) {
        this.setAttribute('max', max);
    }
    /**
     * Returns pattern.
     *
     * @returns Pattern.
     */
    get pattern() {
        return this.getAttribute('pattern') || '';
    }
    /**
     * Sets pattern.
     *
     * @param pattern Pattern.
     */
    set pattern(pattern) {
        this.setAttribute('pattern', pattern);
    }
    /**
     * Returns placeholder.
     *
     * @returns Placeholder.
     */
    get placeholder() {
        return this.getAttribute('placeholder') || '';
    }
    /**
     * Sets placeholder.
     *
     * @param placeholder Placeholder.
     */
    set placeholder(placeholder) {
        this.setAttribute('placeholder', placeholder);
    }
    /**
     * Returns step.
     *
     * @returns Step.
     */
    get step() {
        return this.getAttribute('step') || '';
    }
    /**
     * Sets step.
     *
     * @param step Step.
     */
    set step(step) {
        this.setAttribute('step', step);
    }
    /**
     * Returns inputmode.
     *
     * @returns Inputmode.
     */
    get inputmode() {
        return this.getAttribute('inputmode') || '';
    }
    /**
     * Sets inputmode.
     *
     * @param inputmode Inputmode.
     */
    set inputmode(inputmode) {
        this.setAttribute('inputmode', inputmode);
    }
    /**
     * Returns accept.
     *
     * @returns Accept.
     */
    get accept() {
        return this.getAttribute('accept') || '';
    }
    /**
     * Sets accept.
     *
     * @param accept Accept.
     */
    set accept(accept) {
        this.setAttribute('accept', accept);
    }
    /**
     * Returns allowdirs.
     *
     * @returns Allowdirs.
     */
    get allowdirs() {
        return this.getAttribute('allowdirs') || '';
    }
    /**
     * Sets allowdirs.
     *
     * @param allowdirs Allowdirs.
     */
    set allowdirs(allowdirs) {
        this.setAttribute('allowdirs', allowdirs);
    }
    /**
     * Returns autocomplete.
     *
     * @returns Autocomplete.
     */
    get autocomplete() {
        return this.getAttribute('autocomplete') || '';
    }
    /**
     * Sets autocomplete.
     *
     * @param autocomplete Autocomplete.
     */
    set autocomplete(autocomplete) {
        this.setAttribute('autocomplete', autocomplete);
    }
    /**
     * Returns src.
     *
     * @returns Src.
     */
    get src() {
        return this.getAttribute('src') || '';
    }
    /**
     * Sets src.
     *
     * @param src Src.
     */
    set src(src) {
        this.setAttribute('src', src);
    }
    /**
     * Returns defaultValue.
     *
     * @returns Defaultvalue.
     */
    get defaultValue() {
        return this.getAttribute('value') || '';
    }
    /**
     * Sets defaultValue.
     *
     * @param defaultValue Defaultvalue.
     */
    set defaultValue(defaultValue) {
        this.setAttribute('value', defaultValue);
    }
    /**
     * Returns read only.
     *
     * @returns Read only.
     */
    get readOnly() {
        return this.getAttribute('readonly') !== null;
    }
    /**
     * Sets read only.
     *
     * @param readOnly Read only.
     */
    set readOnly(readOnly) {
        if (!readOnly) {
            this.removeAttribute('readonly');
        }
        else {
            this.setAttribute('readonly', '');
        }
    }
    /**
     * Returns disabled.
     *
     * @returns Disabled.
     */
    get disabled() {
        return this.getAttribute('disabled') !== null;
    }
    /**
     * Sets disabled.
     *
     * @param disabled Disabled.
     */
    set disabled(disabled) {
        if (!disabled) {
            this.removeAttribute('disabled');
        }
        else {
            this.setAttribute('disabled', '');
        }
    }
    /**
     * Returns autofocus.
     *
     * @returns Autofocus.
     */
    get autofocus() {
        return this.getAttribute('autofocus') !== null;
    }
    /**
     * Sets autofocus.
     *
     * @param autofocus Autofocus.
     */
    set autofocus(autofocus) {
        if (!autofocus) {
            this.removeAttribute('autofocus');
        }
        else {
            this.setAttribute('autofocus', '');
        }
    }
    /**
     * Returns required.
     *
     * @returns Required.
     */
    get required() {
        return this.getAttribute('required') !== null;
    }
    /**
     * Sets required.
     *
     * @param required Required.
     */
    set required(required) {
        if (!required) {
            this.removeAttribute('required');
        }
        else {
            this.setAttribute('required', '');
        }
    }
    /**
     * Returns indeterminate.
     *
     * @returns Indeterminate.
     */
    get indeterminate() {
        return this.getAttribute('indeterminate') !== null;
    }
    /**
     * Sets indeterminate.
     *
     * @param indeterminate Indeterminate.
     */
    set indeterminate(indeterminate) {
        if (!indeterminate) {
            this.removeAttribute('indeterminate');
        }
        else {
            this.setAttribute('indeterminate', '');
        }
    }
    /**
     * Returns multiple.
     *
     * @returns Multiple.
     */
    get multiple() {
        return this.getAttribute('multiple') !== null;
    }
    /**
     * Sets multiple.
     *
     * @param multiple Multiple.
     */
    set multiple(multiple) {
        if (!multiple) {
            this.removeAttribute('multiple');
        }
        else {
            this.setAttribute('multiple', '');
        }
    }
    /**
     * Returns checked.
     *
     * @returns Checked.
     */
    get checked() {
        if (this._checked !== null) {
            return this._checked;
        }
        return this.getAttribute('checked') !== null;
    }
    /**
     * Sets checked.
     *
     * @param checked Checked.
     */
    set checked(checked) {
        this._setChecked(checked);
    }
    /**
     * Returns value.
     *
     * @returns Value.
     */
    get value() {
        switch (this.type) {
            case 'hidden':
            case 'submit':
            case 'image':
            case 'reset':
            case 'button':
                return this.getAttribute('value') || '';
            case 'checkbox':
            case 'radio':
                const attritube = this.getAttribute('value');
                return attritube !== null ? attritube : 'on';
            case 'file':
                return this.files.length > 0 ? '/fake/path/' + this.files[0].name : '';
        }
        if (this._value === null) {
            return this.getAttribute('value') || '';
        }
        return this._value;
    }
    /**
     * Sets value.
     *
     * @param value Value.
     */
    set value(value) {
        // The value maybe not string, so we need to convert it to string
        value = String(value);
        switch (this.type) {
            case 'hidden':
            case 'submit':
            case 'image':
            case 'reset':
            case 'button':
            case 'checkbox':
            case 'radio':
                this.setAttribute('value', value);
                break;
            case 'file':
                if (value !== '') {
                    throw new DOMException_js_1.default('Input elements of type "file" may only programmatically set the value to empty string.', DOMExceptionNameEnum_js_1.default.invalidStateError);
                }
                break;
            default:
                const oldValue = this._value;
                this._value = HTMLInputElementValueSanitizer_js_1.default.sanitize(this, value);
                if (oldValue !== this._value) {
                    this._selectionStart = this._value.length;
                    this._selectionEnd = this._value.length;
                    this._selectionDirection = HTMLInputElementSelectionDirectionEnum_js_1.default.none;
                }
                break;
        }
    }
    /**
     * Returns selection start.
     *
     * @returns Selection start.
     */
    get selectionStart() {
        if (!this._isSelectionSupported()) {
            return null;
        }
        if (this._selectionStart === null) {
            return this.value.length;
        }
        return this._selectionStart;
    }
    /**
     * Sets selection start.
     *
     * @param start Start.
     */
    set selectionStart(start) {
        if (!this._isSelectionSupported()) {
            throw new DOMException_js_1.default(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this.setSelectionRange(start, Math.max(start, this.selectionEnd), this._selectionDirection);
    }
    /**
     * Returns selection end.
     *
     * @returns Selection end.
     */
    get selectionEnd() {
        if (!this._isSelectionSupported()) {
            return null;
        }
        if (this._selectionEnd === null) {
            return this.value.length;
        }
        return this._selectionEnd;
    }
    /**
     * Sets selection end.
     *
     * @param end End.
     */
    set selectionEnd(end) {
        if (!this._isSelectionSupported()) {
            throw new DOMException_js_1.default(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this.setSelectionRange(this.selectionStart, end, this._selectionDirection);
    }
    /**
     * Returns selection direction.
     *
     * @returns Selection direction.
     */
    get selectionDirection() {
        if (!this._isSelectionSupported()) {
            return null;
        }
        return this._selectionDirection;
    }
    /**
     * Sets selection direction.
     *
     * @param direction Direction.
     */
    set selectionDirection(direction) {
        if (!this._isSelectionSupported()) {
            throw new DOMException_js_1.default(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this.setSelectionRange(this._selectionStart, this._selectionEnd, direction);
    }
    /**
     * Returns no validate.
     *
     * @returns No validate.
     */
    get formNoValidate() {
        return this.getAttribute('formnovalidate') !== null;
    }
    /**
     * Sets no validate.
     *
     * @param formNoValidate No validate.
     */
    set formNoValidate(formNoValidate) {
        if (!formNoValidate) {
            this.removeAttribute('formnovalidate');
        }
        else {
            this.setAttribute('formnovalidate', '');
        }
    }
    /**
     * Returns the parent form element.
     *
     * @returns Form.
     */
    get form() {
        return this._formNode;
    }
    /**
     * Returns "true" if it will validate.
     *
     * @returns "true" if it will validate.
     */
    get willValidate() {
        return (this.type !== 'hidden' &&
            this.type !== 'reset' &&
            this.type !== 'button' &&
            !this.disabled &&
            !this['readOnly']);
    }
    /**
     * Returns value as Date.
     *
     * @returns Date.
     */
    get valueAsDate() {
        switch (this.type) {
            case 'date':
            case 'month':
                return isNaN(new Date(String(this.value)).getTime()) ? null : new Date(this.value);
            case 'week': {
                const d = HTMLInputElementDateUtility_js_1.default.isoWeekDate(this.value);
                return isNaN(d.getTime()) ? null : d;
            }
            case 'time': {
                const d = new Date(`1970-01-01T${this.value}Z`);
                return isNaN(d.getTime()) ? null : d;
            }
            default:
                return null;
        }
    }
    /**
     * Sets value from a Date.
     *
     * @param value Date.
     */
    set valueAsDate(value) {
        // Specs at https://html.spec.whatwg.org/multipage/input.html#dom-input-valueasdate
        if (!['date', 'month', 'time', 'week'].includes(this.type)) {
            throw new DOMException_js_1.default("Failed to set the 'valueAsDate' property on 'HTMLInputElement': This input element does not support Date values.", DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        if (typeof value !== 'object') {
            throw new TypeError("Failed to set the 'valueAsDate' property on 'HTMLInputElement': Failed to convert value to 'object'.");
        }
        else if (value && !(value instanceof Date)) {
            throw new TypeError("Failed to set the 'valueAsDate' property on 'HTMLInputElement': The provided value is not a Date.");
        }
        else if (value === null || isNaN(value.getTime())) {
            this.value = '';
            return;
        }
        switch (this.type) {
            case 'date':
                this.value = value.toISOString().split('T')[0];
                break;
            case 'month':
                this.value = value.toISOString().split('T')[0].slice(0, -3);
                break;
            case 'time':
                this.value = value.toISOString().split('T')[1].slice(0, 5);
                break;
            case 'week':
                this.value = HTMLInputElementDateUtility_js_1.default.dateIsoWeek(value);
                break;
        }
    }
    /**
     * Returns value as number.
     *
     * @returns Number.
     */
    get valueAsNumber() {
        const value = this.value;
        if (!this.type.match(/^(range|number|date|datetime-local|month|time|week)$/) || !value) {
            return NaN;
        }
        switch (this.type) {
            case 'number':
                return parseFloat(value);
            case 'range': {
                const number = parseFloat(value);
                const min = parseFloat(this.min) || 0;
                const max = parseFloat(this.max) || 100;
                if (isNaN(number)) {
                    return max < min ? min : (min + max) / 2;
                }
                else if (number < min) {
                    return min;
                }
                else if (number > max) {
                    return max;
                }
                return number;
            }
            case 'date':
                return new Date(value).getTime();
            case 'datetime-local':
                return new Date(value).getTime() - new Date(value).getTimezoneOffset() * 60000;
            case 'month':
                return (new Date(value).getUTCFullYear() - 1970) * 12 + new Date(value).getUTCMonth();
            case 'time':
                return (new Date('1970-01-01T' + value).getTime() - new Date('1970-01-01T00:00:00').getTime());
            case 'week': {
                // https://html.spec.whatwg.org/multipage/input.html#week-state-(type=week)
                const match = value.match(/^(\d{4})-W(\d{2})$/);
                if (!match) {
                    return NaN;
                }
                const d = new Date(Date.UTC(parseInt(match[1], 10), 0));
                const day = d.getUTCDay();
                const diff = ((day === 0 ? -6 : 1) - day) * 86400000 + parseInt(match[2], 10) * 604800000;
                return d.getTime() + diff;
            }
        }
    }
    /**
     * Sets value from a number.
     *
     * @param value number.
     */
    set valueAsNumber(value) {
        // Specs at https://html.spec.whatwg.org/multipage/input.html
        switch (this.type) {
            case 'number':
            case 'range':
                // We Rely on HTMLInputElementValueSanitizer
                this.value = Number(value).toString();
                break;
            case 'date':
            case 'datetime-local': {
                const d = new Date(Number(value));
                if (isNaN(d.getTime())) {
                    // Reset to default value
                    this.value = '';
                    break;
                }
                if (this.type == 'date') {
                    this.value = d.toISOString().slice(0, 10);
                }
                else {
                    this.value = d.toISOString().slice(0, -1);
                }
                break;
            }
            case 'month':
                if (!Number.isInteger(value) || value < 0) {
                    this.value = '';
                }
                else {
                    this.value = new Date(Date.UTC(1970, Number(value))).toISOString().slice(0, 7);
                }
                break;
            case 'time':
                if (!Number.isInteger(value) || value < 0) {
                    this.value = '';
                }
                else {
                    this.value = new Date(Number(value)).toISOString().slice(11, -1);
                }
                break;
            case 'week':
            case 'week': {
                const d = new Date(Number(value));
                this.value = isNaN(d.getTime()) ? '' : HTMLInputElementDateUtility_js_1.default.dateIsoWeek(d);
                break;
            }
            default:
                throw new DOMException_js_1.default("Failed to set the 'valueAsNumber' property on 'HTMLInputElement': This input element does not support Number values.", DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
    }
    /**
     * Returns the associated label elements.
     *
     * @returns Label elements.
     */
    get labels() {
        return HTMLLabelElementUtility_js_1.default.getAssociatedLabelElements(this);
    }
    /**
     * Sets validation message.
     *
     * @param message Message.
     */
    setCustomValidity(message) {
        this.validationMessage = String(message);
    }
    /**
     * Selects the text.
     */
    select() {
        if (!this._isSelectionSupported()) {
            return null;
        }
        this._selectionStart = 0;
        this._selectionEnd = this.value.length;
        this._selectionDirection = HTMLInputElementSelectionDirectionEnum_js_1.default.none;
        this.dispatchEvent(new Event_js_1.default('select', { bubbles: true, cancelable: true }));
    }
    /**
     * Set selection range.
     *
     * @param start Start.
     * @param end End.
     * @param [direction="none"] Direction.
     */
    setSelectionRange(start, end, direction = 'none') {
        if (!this._isSelectionSupported()) {
            throw new DOMException_js_1.default(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        this._selectionEnd = Math.min(end, this.value.length);
        this._selectionStart = Math.min(start, this._selectionEnd);
        this._selectionDirection =
            direction === HTMLInputElementSelectionDirectionEnum_js_1.default.forward ||
                direction === HTMLInputElementSelectionDirectionEnum_js_1.default.backward
                ? direction
                : HTMLInputElementSelectionDirectionEnum_js_1.default.none;
        this.dispatchEvent(new Event_js_1.default('select', { bubbles: true, cancelable: true }));
    }
    /**
     * Set range text.
     *
     * @param replacement Replacement.
     * @param [start] Start.
     * @param [end] End.
     * @param [direction] Direction.
     * @param selectionMode
     */
    setRangeText(replacement, start = null, end = null, selectionMode = HTMLInputElementSelectionModeEnum_js_1.default.preserve) {
        if (!this._isSelectionSupported()) {
            throw new DOMException_js_1.default(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        if (start === null) {
            start = this._selectionStart;
        }
        if (end === null) {
            end = this._selectionEnd;
        }
        if (start > end) {
            throw new DOMException_js_1.default('The index is not in the allowed range.', DOMExceptionNameEnum_js_1.default.invalidStateError);
        }
        start = Math.min(start, this.value.length);
        end = Math.min(end, this.value.length);
        const val = this.value;
        let selectionStart = this._selectionStart;
        let selectionEnd = this._selectionEnd;
        this.value = val.slice(0, start) + replacement + val.slice(end);
        const newEnd = start + this.value.length;
        switch (selectionMode) {
            case HTMLInputElementSelectionModeEnum_js_1.default.select:
                this.setSelectionRange(start, newEnd);
                break;
            case HTMLInputElementSelectionModeEnum_js_1.default.start:
                this.setSelectionRange(start, start);
                break;
            case HTMLInputElementSelectionModeEnum_js_1.default.end:
                this.setSelectionRange(newEnd, newEnd);
                break;
            default:
                const delta = replacement.length - (end - start);
                if (selectionStart > end) {
                    selectionStart += delta;
                }
                else if (selectionStart > start) {
                    selectionStart = start;
                }
                if (selectionEnd > end) {
                    selectionEnd += delta;
                }
                else if (selectionEnd > start) {
                    selectionEnd = newEnd;
                }
                this.setSelectionRange(selectionStart, selectionEnd);
                break;
        }
    }
    /**
     * Checks validity.
     *
     * @returns "true" if the field is valid.
     */
    checkValidity() {
        const valid = this.disabled ||
            this.readOnly ||
            this.type === 'hidden' ||
            this.type === 'reset' ||
            this.type === 'button' ||
            this.validity.valid;
        if (!valid) {
            this.dispatchEvent(new Event_js_1.default('invalid', { bubbles: true, cancelable: true }));
        }
        return valid;
    }
    /**
     * Reports validity.
     *
     * @returns "true" if the field is valid.
     */
    reportValidity() {
        return this.checkValidity();
    }
    /**
     * Steps up.
     *
     * @param [increment] Increment.
     */
    stepUp(increment) {
        const newValue = HTMLInputElementValueStepping_js_1.default.step(this.type, this.value, 1, increment);
        if (newValue !== null) {
            this.value = newValue;
        }
    }
    /**
     * Steps down.
     *
     * @param [increment] Increment.
     */
    stepDown(increment) {
        const newValue = HTMLInputElementValueStepping_js_1.default.step(this.type, this.value, -1, increment);
        if (newValue !== null) {
            this.value = newValue;
        }
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = super.cloneNode(deep);
        clone.formAction = this.formAction;
        clone.formMethod = this.formMethod;
        clone._value = this._value;
        clone._height = this._height;
        clone._width = this._width;
        clone.defaultChecked = this.defaultChecked;
        clone.files = this.files.slice();
        clone._selectionStart = this._selectionStart;
        clone._selectionEnd = this._selectionEnd;
        clone._selectionDirection = this._selectionDirection;
        return clone;
    }
    /**
     * @override
     */
    dispatchEvent(event) {
        // Do nothing if the input element is disabled and the event is a click event.
        if (event.type === 'click' && event.eventPhase === EventPhaseEnum_js_1.default.none && this.disabled) {
            return false;
        }
        let previousCheckedValue = null;
        // The checkbox or radio button has to be checked before the click event is dispatched, so that event listeners can check the checked value.
        // However, the value has to be restored if preventDefault() is called on the click event.
        if ((event.eventPhase === EventPhaseEnum_js_1.default.atTarget ||
            event.eventPhase === EventPhaseEnum_js_1.default.bubbling) &&
            event.type === 'click') {
            const inputType = this.type;
            if (inputType === 'checkbox' || inputType === 'radio') {
                previousCheckedValue = this.checked;
                this._setChecked(inputType === 'checkbox' ? !previousCheckedValue : true);
            }
        }
        const returnValue = super.dispatchEvent(event);
        if (!event.defaultPrevented &&
            (event.eventPhase === EventPhaseEnum_js_1.default.atTarget ||
                event.eventPhase === EventPhaseEnum_js_1.default.bubbling) &&
            event.type === 'click' &&
            this.isConnected) {
            const inputType = this.type;
            if (!this.readOnly || inputType === 'checkbox' || inputType === 'radio') {
                if (inputType === 'checkbox' || inputType === 'radio') {
                    this.dispatchEvent(new Event_js_1.default('input', { bubbles: true, cancelable: true }));
                    this.dispatchEvent(new Event_js_1.default('change', { bubbles: true, cancelable: true }));
                }
                else if (inputType === 'submit') {
                    const form = this._formNode;
                    if (form) {
                        form.requestSubmit();
                    }
                }
                else if (inputType === 'reset' && this.isConnected) {
                    const form = this._formNode;
                    if (form) {
                        form.reset();
                    }
                }
            }
        }
        // Restore checked state if preventDefault() is triggered on the click event.
        if (event.defaultPrevented &&
            (event.eventPhase === EventPhaseEnum_js_1.default.atTarget ||
                event.eventPhase === EventPhaseEnum_js_1.default.bubbling) &&
            event.type === 'click' &&
            previousCheckedValue !== null) {
            const inputType = this.type;
            if (inputType === 'checkbox' || inputType === 'radio') {
                this._setChecked(previousCheckedValue);
            }
        }
        return returnValue;
    }
    /**
     * @override
     */
    _connectToNode(parentNode = null) {
        const oldFormNode = this._formNode;
        super._connectToNode(parentNode);
        if (oldFormNode !== this._formNode) {
            if (oldFormNode) {
                oldFormNode._removeFormControlItem(this, this.name);
                oldFormNode._removeFormControlItem(this, this.id);
            }
            if (this._formNode) {
                this._formNode._appendFormControlItem(this, this.name);
                this._formNode._appendFormControlItem(this, this.id);
            }
        }
    }
    /**
     * Checks is selection is supported.
     *
     * @returns "true" if selection is supported.
     */
    _isSelectionSupported() {
        const inputType = this.type;
        return (inputType === 'text' ||
            inputType === 'search' ||
            inputType === 'url' ||
            inputType === 'tel' ||
            inputType === 'password');
    }
    /**
     * Sets checked value.
     *
     * @param checked Checked.
     */
    _setChecked(checked) {
        this._checked = checked;
        if (checked && this.type === 'radio' && this.name) {
            const root = (this._formNode || this.getRootNode());
            const radioButtons = root.querySelectorAll(`input[type="radio"][name="${this.name}"]`);
            for (const radioButton of radioButtons) {
                if (radioButton !== this) {
                    radioButton['_checked'] = false;
                }
            }
        }
    }
}
exports.default = HTMLInputElement;
//# sourceMappingURL=HTMLInputElement.cjs.map