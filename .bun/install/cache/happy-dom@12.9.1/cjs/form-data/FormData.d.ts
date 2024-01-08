import Blob from '../file/Blob.cjs';
import File from '../file/File.cjs';
import IHTMLFormElement from '../nodes/html-form-element/IHTMLFormElement.cjs';
/**
 * FormData.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */
export default class FormData implements Iterable<[string, string | File]> {
    private _entries;
    /**
     * Constructor.
     *
     * @param [form] Form.
     */
    constructor(form?: IHTMLFormElement);
    /**
     * For each.
     *
     * @param callback Callback.
     */
    forEach(callback: (key: string, value: string | File, thisArg: FormData) => void): void;
    /**
     * Appends a new value onto an existing key.
     *
     * @param name Name.
     * @param value Value.
     * @param [filename] Filename.
     */
    append(name: string, value: string | Blob | File, filename?: string): void;
    /**
     * Removes a value.
     *
     * @param name Name.
     */
    delete(name: string): void;
    /**
     * Returns value.
     *
     * @param name Name.
     * @returns Value.
     */
    get(name: string): string | File | null;
    /**
     * Returns all values associated with the given name.
     *
     * @param name Name.
     * @returns Values.
     */
    getAll(name: string): Array<string | File>;
    /**
     * Returns whether a FormData object contains a certain key.
     *
     * @param name Name.
     * @returns "true" if the FormData object contains the key.
     */
    has(name: string): boolean;
    /**
     * Sets a new value for an existing key inside a FormData object, or adds the key/value if it does not already exist.
     *
     * @param name Name.
     * @param value Value.
     * @param [filename] Filename.
     */
    set(name: string, value: string | Blob | File, filename?: string): void;
    /**
     * Returns an iterator, allowing you to go through all keys of the key/value pairs contained in this object.
     *
     * @returns Iterator.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns an iterator, allowing you to go through all values of the key/value pairs contained in this object.
     *
     * @returns Iterator.
     */
    values(): IterableIterator<string | File>;
    /**
     * Returns an iterator, allowing you to go through all key/value pairs contained in this object.
     *
     * @returns Iterator.
     */
    entries(): IterableIterator<[string, string | File]>;
    /**
     * Iterator.
     *
     * @returns Iterator.
     */
    [Symbol.iterator](): IterableIterator<[string, string | File]>;
    /**
     * Parses a value.
     *
     * @param value Value.
     * @param [filename] Filename.
     * @returns Parsed value.
     */
    private _parseValue;
}
//# sourceMappingURL=FormData.d.ts.map