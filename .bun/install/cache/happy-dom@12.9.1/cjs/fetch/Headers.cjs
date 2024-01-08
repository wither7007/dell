"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DOMException_js_1 = __importDefault(require("../exception/DOMException.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../exception/DOMExceptionNameEnum.cjs"));
/**
 * Fetch headers.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Headers
 */
class Headers {
    /**
     * Constructor.
     *
     * @param init Headers init.
     */
    constructor(init) {
        this._entries = {};
        if (init) {
            if (init instanceof Headers) {
                this._entries = JSON.parse(JSON.stringify(init._entries));
            }
            else if (Array.isArray(init)) {
                for (const entry of init) {
                    if (entry.length !== 2) {
                        throw new DOMException_js_1.default('Failed to construct "Headers": The provided init is not a valid array.', DOMExceptionNameEnum_js_1.default.invalidStateError);
                    }
                    this.append(entry[0], entry[1]);
                }
            }
            else {
                for (const name of Object.keys(init)) {
                    this.set(name, init[name]);
                }
            }
        }
    }
    /**
     * Appends a new value onto an existing header inside a Headers object, or adds the header if it does not already exist.
     *
     * @param name Name.
     * @param value Value.
     */
    append(name, value) {
        const lowerName = name.toLowerCase();
        if (this._entries[lowerName]) {
            this._entries[lowerName].value += `, ${value}`;
        }
        else {
            this._entries[lowerName] = {
                name,
                value
            };
        }
    }
    /**
     * Removes an header.
     *
     * @param name Name.
     */
    delete(name) {
        delete this._entries[name.toLowerCase()];
    }
    /**
     * Returns header value.
     *
     * @param name Name.
     * @returns Value.
     */
    get(name) {
        return this._entries[name.toLowerCase()]?.value || null;
    }
    /**
     * Sets a new value for an existing header inside a Headers object, or adds the header if it does not already exist.
     *
     * @param name Name.
     * @param value Value.
     */
    set(name, value) {
        this._entries[name.toLowerCase()] = {
            name,
            value
        };
    }
    /**
     * Returns whether an Headers object contains a certain key.
     *
     * @param name Name.
     * @returns "true" if the Headers object contains the key.
     */
    has(name) {
        return !!this._entries[name.toLowerCase()];
    }
    /**
     * Executes a callback function once per each key/value pair in the Headers object.
     *
     * @param callback Callback.
     */
    forEach(callback) {
        for (const key of Object.keys(this._entries)) {
            callback(this._entries[key].value, this._entries[key].name, this);
        }
    }
    /**
     * Returns an iterator, allowing you to go through all keys of the key/value pairs contained in this object.
     *
     * @returns Iterator.
     */
    *keys() {
        for (const header of Object.values(this._entries)) {
            yield header.name;
        }
    }
    /**
     * Returns an iterator, allowing you to go through all values of the key/value pairs contained in this object.
     *
     * @returns Iterator.
     */
    *values() {
        for (const header of Object.values(this._entries)) {
            yield header.value;
        }
    }
    /**
     * Returns an iterator, allowing you to go through all key/value pairs contained in this object.
     *
     * @returns Iterator.
     */
    *entries() {
        for (const header of Object.values(this._entries)) {
            yield [header.name, header.value];
        }
    }
    /**
     * Iterator.
     *
     * @returns Iterator.
     */
    *[Symbol.iterator]() {
        for (const header of Object.values(this._entries)) {
            yield [header.name, header.value];
        }
    }
}
exports.default = Headers;
//# sourceMappingURL=Headers.cjs.map