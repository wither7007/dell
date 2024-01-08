"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URL_js_1 = __importDefault(require("../url/URL.cjs"));
const DOMException_js_1 = __importDefault(require("../exception/DOMException.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../exception/DOMExceptionNameEnum.cjs"));
/**
 *
 */
class Location extends URL_js_1.default {
    /**
     * Constructor.
     */
    constructor() {
        super('about:blank');
    }
    /**
     * Override set href.
     */
    // @ts-ignore
    set href(value) {
        try {
            super.href = this.hostname ? new URL_js_1.default(value, this).href : value;
        }
        catch (e) {
            if (this.hostname) {
                throw new DOMException_js_1.default(`Failed to construct URL from string "${value}".`, DOMExceptionNameEnum_js_1.default.uriMismatchError);
            }
            else {
                throw new DOMException_js_1.default(`Failed to construct URL from string "${value}" relative to URL "${super.href}".`, DOMExceptionNameEnum_js_1.default.uriMismatchError);
            }
        }
    }
    /**
     * Override set href.
     */
    get href() {
        return super.href;
    }
    /**
     * Replaces the current resource with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
     *
     * @param url URL.
     */
    replace(url) {
        this.href = url;
    }
    /**
     * Loads the resource at the URL provided in parameter.
     *
     * Note: Will do the same thing as "replace()" as server-dom does not support loading the URL.
     *
     * @param url
     * @see this.replace()
     */
    assign(url) {
        this.href = url;
    }
    /**
     * Reloads the resource from the current URL.
     *
     * Note: Will do nothing as reloading is not supported in server-dom.
     */
    reload() {
        // Do nothing
    }
}
exports.default = Location;
//# sourceMappingURL=Location.cjs.map