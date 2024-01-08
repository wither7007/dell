"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const Event_js_1 = __importDefault(require("../../event/Event.cjs"));
const SubmitEvent_js_1 = __importDefault(require("../../event/events/SubmitEvent.cjs"));
const HTMLFormControlsCollection_js_1 = __importDefault(require("./HTMLFormControlsCollection.cjs"));
/**
 * HTML Form Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement.
 */
class HTMLFormElement extends HTMLElement_js_1.default {
    constructor() {
        super(...arguments);
        // Public properties.
        this.elements = new HTMLFormControlsCollection_js_1.default();
        this.length = 0;
        // Events
        this.onformdata = null;
        this.onreset = null;
        this.onsubmit = null;
        // Private properties
        this._formNode = this;
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
     * Returns method.
     *
     * @returns Method.
     */
    get method() {
        return this.getAttribute('method') || 'get';
    }
    /**
     * Sets method.
     *
     * @param method Method.
     */
    set method(method) {
        this.setAttribute('method', method);
    }
    /**
     * Returns target.
     *
     * @returns Target.
     */
    get target() {
        return this.getAttribute('target') || '';
    }
    /**
     * Sets target.
     *
     * @param target Target.
     */
    set target(target) {
        this.setAttribute('target', target);
    }
    /**
     * Returns action.
     *
     * @returns Action.
     */
    get action() {
        return this.getAttribute('action') || '';
    }
    /**
     * Sets action.
     *
     * @param action Action.
     */
    set action(action) {
        this.setAttribute('action', action);
    }
    /**
     * Returns encoding.
     *
     * @returns Encoding.
     */
    get encoding() {
        return this.getAttribute('encoding') || '';
    }
    /**
     * Sets encoding.
     *
     * @param encoding Encoding.
     */
    set encoding(encoding) {
        this.setAttribute('encoding', encoding);
    }
    /**
     * Returns enctype.
     *
     * @returns Enctype.
     */
    get enctype() {
        return this.getAttribute('enctype') || '';
    }
    /**
     * Sets enctype.
     *
     * @param enctype Enctype.
     */
    set enctype(enctype) {
        this.setAttribute('enctype', enctype);
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
     * Returns accept charset.
     *
     * @returns Accept charset.
     */
    get acceptCharset() {
        return this.getAttribute('acceptcharset') || '';
    }
    /**
     * Sets accept charset.
     *
     * @param acceptCharset Accept charset.
     */
    set acceptCharset(acceptCharset) {
        this.setAttribute('acceptcharset', acceptCharset);
    }
    /**
     * Returns no validate.
     *
     * @returns No validate.
     */
    get noValidate() {
        return this.getAttribute('novalidate') !== null;
    }
    /**
     * Sets no validate.
     *
     * @param noValidate No validate.
     */
    set noValidate(noValidate) {
        if (!noValidate) {
            this.removeAttribute('novalidate');
        }
        else {
            this.setAttribute('novalidate', '');
        }
    }
    /**
     * Submits form. No submit event is raised. In particular, the form's "submit" event handler is not run.
     *
     * In Happy DOM this means that nothing happens.
     */
    submit() { }
    /**
     * Submits form, reports validity and raises submit event.
     *
     * @param [submitter] Submitter.
     */
    requestSubmit(submitter) {
        const noValidate = submitter?.formNoValidate || this.noValidate;
        if (noValidate || this.checkValidity()) {
            this.dispatchEvent(new SubmitEvent_js_1.default('submit', { bubbles: true, cancelable: true, submitter: submitter || this }));
        }
    }
    /**
     * Resets form.
     */
    reset() {
        for (const element of this.elements) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element['_value'] = null;
                element['_checked'] = null;
            }
            else if (element.tagName === 'TEXTAREA') {
                element['_value'] = null;
            }
            else if (element.tagName === 'SELECT') {
                let hasSelectedAttribute = false;
                for (const option of element.options) {
                    if (option.hasAttribute('selected')) {
                        hasSelectedAttribute = true;
                        option.selected = true;
                        break;
                    }
                }
                if (!hasSelectedAttribute && element.options.length > 0) {
                    element.options[0].selected = true;
                }
            }
        }
        this.dispatchEvent(new Event_js_1.default('reset', { bubbles: true, cancelable: true }));
    }
    /**
     * Checks validity.
     *
     * @returns "true" if validation does'nt fail.
     */
    checkValidity() {
        const radioValidationState = {};
        let isFormValid = true;
        for (const element of this.elements) {
            if (element.tagName === 'INPUT' && element.type === 'radio' && element.name) {
                if (!radioValidationState[element.name]) {
                    radioValidationState[element.name] = true;
                    if (!element.checkValidity()) {
                        isFormValid = false;
                    }
                }
            }
            else if (!element.checkValidity()) {
                isFormValid = false;
            }
        }
        return isFormValid;
    }
    /**
     * Reports validity.
     *
     * @returns "true" if validation does'nt fail.
     */
    reportValidity() {
        return this.checkValidity();
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        return super.cloneNode(deep);
    }
    /**
     * Appends a form control item.
     *
     * @param node Node.
     * @param name Name
     */
    _appendFormControlItem(node, name) {
        if (!this.elements.includes(node)) {
            this[this.elements.length] = node;
            this.elements.push(node);
            this.length = this.elements.length;
        }
        this.elements._appendNamedItem(node, name);
        this[name] = this.elements[name];
    }
    /**
     * Remove a form control item.
     *
     * @param node Node.
     * @param name Name.
     */
    _removeFormControlItem(node, name) {
        const index = this.elements.indexOf(node);
        if (index !== -1) {
            this.elements.splice(index, 1);
            for (let i = index; i < this.length; i++) {
                this[i] = this[i + 1];
            }
            delete this[this.length - 1];
            this.length--;
        }
        this.elements._removeNamedItem(node, name);
        if (this.elements[name]) {
            this[name] = this.elements[name];
        }
        else {
            delete this[name];
        }
    }
}
exports.default = HTMLFormElement;
//# sourceMappingURL=HTMLFormElement.cjs.map