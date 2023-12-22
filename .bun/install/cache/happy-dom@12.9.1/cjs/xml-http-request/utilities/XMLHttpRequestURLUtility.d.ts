/// <reference types="node" />
import { UrlObject } from 'url';
import URL from '../../url/URL.cjs';
/**
 * URL utility.
 */
export default class XMLHttpRequestURLUtility {
    /**
     * Returns "true" if SSL.
     *
     * @param url URL.
     * @returns "true" if SSL.
     */
    static isSSL(url: URL): boolean;
    /**
     * Returns "true" if SSL.
     *
     * @param url URL.
     * @returns "true" if SSL.
     */
    static isLocal(url: URL): boolean;
    /**
     * Returns "true" if protocol is valid.
     *
     * @param url URL.
     * @returns "true" if valid.
     */
    static isSupportedProtocol(url: URL): boolean;
    /**
     * Returns host.
     *
     * @param url URL.
     * @returns Host.
     */
    static getHost(url: URL): string;
    /**
     *
     * @param url
     */
    static getMimeTypeFromExt(url: UrlObject): string;
}
//# sourceMappingURL=XMLHttpRequestURLUtility.d.ts.map