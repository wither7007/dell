import URL from '../url/URL.cjs';
/**
 *
 */
export default class Location extends URL {
    /**
     * Constructor.
     */
    constructor();
    /**
     * Override set href.
     */
    set href(value: string);
    /**
     * Override set href.
     */
    get href(): string;
    /**
     * Replaces the current resource with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
     *
     * @param url URL.
     */
    replace(url: string): void;
    /**
     * Loads the resource at the URL provided in parameter.
     *
     * Note: Will do the same thing as "replace()" as server-dom does not support loading the URL.
     *
     * @param url
     * @see this.replace()
     */
    assign(url: string): void;
    /**
     * Reloads the resource from the current URL.
     *
     * Note: Will do nothing as reloading is not supported in server-dom.
     */
    reload(): void;
}
//# sourceMappingURL=Location.d.ts.map