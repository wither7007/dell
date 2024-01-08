import IDocument from '../document/IDocument.cjs';
import URL from '../../url/URL.cjs';
/**
 * HTML Anchor Element utility.
 */
export default class HTMLAnchorElementUtility {
    /**
     * Returns "true" if it is a blob URL.
     *
     * According to spec, if element's url is non-null, its scheme is "blob", and it has an opaque path, then the process of updating properties on the URL should be terminated.
     *
     * @see https://html.spec.whatwg.org/multipage/links.html#reinitialise-url
     * @param url
     * @param url URL.
     * @returns "true" if blob URL.
     */
    static isBlobURL(url: URL): boolean;
    /**
     * Returns URL.
     *
     * @see https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-href
     * @see https://html.spec.whatwg.org/multipage/links.html#hyperlink
     * @param document Document.
     * @param href Href.
     * @returns URL.
     */
    static getUrl(document: IDocument, href: string | null): URL;
}
//# sourceMappingURL=HTMLAnchorElementUtility.d.ts.map