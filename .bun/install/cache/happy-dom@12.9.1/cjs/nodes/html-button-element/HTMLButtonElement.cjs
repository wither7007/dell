"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_js_1 = __importDefault(require("../../event/Event.cjs"));
const EventPhaseEnum_js_1 = __importDefault(require("../../event/EventPhaseEnum.cjs"));
const ValidityState_js_1 = __importDefault(require("../../validity-state/ValidityState.cjs"));
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const HTMLLabelElementUtility_js_1 = __importDefault(require("../html-label-element/HTMLLabelElementUtility.cjs"));
const HTMLButtonElementNamedNodeMap_js_1 = __importDefault(require("./HTMLButtonElementNamedNodeMap.cjs"));
const BUTTON_TYPES = ['submit', 'reset', 'button', 'menu'];
/**
 * HTML Button Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement.
 */
class HTMLButtonElement extends HTMLElement_js_1.default {
    constructor() {
        super(...arguments);
        this.attributes = new HTMLButtonElementNamedNodeMap_js_1.default(this);
        this.validationMessage = '';
        this.validity = new ValidityState_js_1.default(this);
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
     * Returns value.
     *
     * @returns Value.
     */
    get value() {
        return this.getAttribute('value');
    }
    /**
     * Sets value.
     *
     * @param value Value.
     */
    set value(value) {
        this.setAttribute('value', value);
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
     * Returns type
     *
     * @returns Type
     */
    get type() {
        return this._sanitizeType(this.getAttribute('type'));
    }
    /**
     * Sets type
     *
     * @param v Type
     */
    set type(v) {
        this.setAttribute('type', this._sanitizeType(v));
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
     * Returns the associated label elements.
     *
     * @returns Label elements.
     */
    get labels() {
        return HTMLLabelElementUtility_js_1.default.getAssociatedLabelElements(this);
    }
    /**
     * Checks validity.
     *
     * @returns "true" if the field is valid.
     */
    checkValidity() {
        const valid = this.disabled || this.type === 'reset' || this.type === 'button' || this.validity.valid;
        if (!valid) {
            this.dispatchEvent(new Event_js_1.default('invalid', { bubbles: true, cancelable: true }));
        }
        return valid;
    }
    /**
     * Reports validity.
     *
     * @returns Validity.
     */
    reportValidity() {
        return this.checkValidity();
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
     * Sanitizes type.
     *
     * TODO: We can improve performance a bit if we make the types as a constant.
     *
     * @param type Type.
     * @returns Type sanitized.
     */
    _sanitizeType(type) {
        type = (type && type.toLowerCase()) || 'submit';
        if (!BUTTON_TYPES.includes(type)) {
            type = 'submit';
        }
        return type;
    }
    /**
     * @override
     */
    dispatchEvent(event) {
        if (event.type === 'click' && event.eventPhase === EventPhaseEnum_js_1.default.none && this.disabled) {
            return false;
        }
        const returnValue = super.dispatchEvent(event);
        if (event.type === 'click' &&
            (event.eventPhase === EventPhaseEnum_js_1.default.atTarget ||
                event.eventPhase === EventPhaseEnum_js_1.default.bubbling) &&
            this._formNode &&
            this.isConnected) {
            const form = this._formNode;
            switch (this.type) {
                case 'submit':
                    form.requestSubmit();
                    break;
                case 'reset':
                    form.reset();
                    break;
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
}
exports.default = HTMLButtonElement;
//# sourceMappingURL=HTMLButtonElement.cjs.map