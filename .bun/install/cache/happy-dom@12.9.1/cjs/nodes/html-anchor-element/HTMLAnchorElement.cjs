"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
const DOMTokenList_js_1 = __importDefault(require("../../dom-token-list/DOMTokenList.cjs"));
const HTMLAnchorElementUtility_js_1 = __importDefault(require("./HTMLAnchorElementUtility.cjs"));
const HTMLAnchorElementNamedNodeMap_js_1 = __importDefault(require("./HTMLAnchorElementNamedNodeMap.cjs"));
/**
 * HTML Anchor Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement.
 */
class HTMLAnchorElement extends HTMLElement_js_1.default {
    constructor() {
        super(...arguments);
        this.attributes = new HTMLAnchorElementNamedNodeMap_js_1.default(this);
        this._relList = null;
        this._url = null;
    }
    /**
     * Returns download.
     *
     * @returns download.
     */
    get download() {
        return this.getAttribute('download') || '';
    }
    /**
     * Sets download.
     *
     * @param download Download.
     */
    set download(download) {
        this.setAttribute('download', download);
    }
    /**
     * Returns hash.
     *
     * @returns Hash.
     */
    get hash() {
        return this._url?.hash ?? '';
    }
    /**
     * Sets hash.
     *
     * @param hash Hash.
     */
    set hash(hash) {
        if (this._url && !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url)) {
            this._url.hash = hash;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns href.
     *
     * @returns Href.
     */
    get href() {
        if (this._url) {
            return this._url.toString();
        }
        return this.getAttribute('href') || '';
    }
    /**
     * Sets href.
     *
     * @param href Href.
     */
    set href(href) {
        this.setAttribute('href', href);
    }
    /**
     * Returns hreflang.
     *
     * @returns Hreflang.
     */
    get hreflang() {
        return this.getAttribute('hreflang') || '';
    }
    /**
     * Sets hreflang.
     *
     * @param hreflang Hreflang.
     */
    set hreflang(hreflang) {
        this.setAttribute('hreflang', hreflang);
    }
    /**
     * Returns the hyperlink's URL's origin.
     *
     * @returns Origin.
     */
    get origin() {
        return this._url?.origin ?? '';
    }
    /**
     * Returns ping.
     *
     * @returns Ping.
     */
    get ping() {
        return this.getAttribute('ping') || '';
    }
    /**
     * Sets ping.
     *
     * @param ping Ping.
     */
    set ping(ping) {
        this.setAttribute('ping', ping);
    }
    /**
     * Returns protocol.
     *
     * @returns Protocol.
     */
    get protocol() {
        return this._url?.protocol ?? '';
    }
    /**
     * Sets protocol.
     *
     * @param protocol Protocol.
     */
    set protocol(protocol) {
        if (this._url && !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url)) {
            this._url.protocol = protocol;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns username.
     *
     * @returns Username.
     */
    get username() {
        return this._url?.username ?? '';
    }
    /**
     * Sets username.
     *
     * @param username Username.
     */
    set username(username) {
        if (this._url &&
            !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url) &&
            this._url.host &&
            this._url.protocol != 'file') {
            this._url.username = username;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns password.
     *
     * @returns Password.
     */
    get password() {
        return this._url?.password ?? '';
    }
    /**
     * Sets password.
     *
     * @param password Password.
     */
    set password(password) {
        if (this._url &&
            !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url) &&
            this._url.host &&
            this._url.protocol != 'file') {
            this._url.password = password;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns pathname.
     *
     * @returns Pathname.
     */
    get pathname() {
        return this._url?.pathname ?? '';
    }
    /**
     * Sets pathname.
     *
     * @param pathname Pathname.
     */
    set pathname(pathname) {
        if (this._url && !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url)) {
            this._url.pathname = pathname;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns port.
     *
     * @returns Port.
     */
    get port() {
        return this._url?.port ?? '';
    }
    /**
     * Sets port.
     *
     * @param port Port.
     */
    set port(port) {
        if (this._url &&
            !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url) &&
            this._url.host &&
            this._url.protocol != 'file') {
            this._url.port = port;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns host.
     *
     * @returns Host.
     */
    get host() {
        return this._url?.host ?? '';
    }
    /**
     * Sets host.
     *
     * @param host Host.
     */
    set host(host) {
        if (this._url && !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url)) {
            this._url.host = host;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns hostname.
     *
     * @returns Hostname.
     */
    get hostname() {
        return this._url?.hostname ?? '';
    }
    /**
     * Sets hostname.
     *
     * @param hostname Hostname.
     */
    set hostname(hostname) {
        if (this._url && !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url)) {
            this._url.hostname = hostname;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns referrerPolicy.
     *
     * @returns Referrer Policy.
     */
    get referrerPolicy() {
        return this.getAttribute('referrerPolicy') || '';
    }
    /**
     * Sets referrerPolicy.
     *
     * @param referrerPolicy Referrer Policy.
     */
    set referrerPolicy(referrerPolicy) {
        this.setAttribute('referrerPolicy', referrerPolicy);
    }
    /**
     * Returns rel.
     *
     * @returns Rel.
     */
    get rel() {
        return this.getAttribute('rel') || '';
    }
    /**
     * Sets rel.
     *
     * @param rel Rel.
     */
    set rel(rel) {
        this.setAttribute('rel', rel);
    }
    /**
     * Returns rel list.
     *
     * @returns Rel list.
     */
    get relList() {
        if (!this._relList) {
            this._relList = new DOMTokenList_js_1.default(this, 'rel');
        }
        return this._relList;
    }
    /**
     * Returns search.
     *
     * @returns Search.
     */
    get search() {
        return this._url?.search ?? '';
    }
    /**
     * Sets search.
     *
     * @param search Search.
     */
    set search(search) {
        if (this._url && !HTMLAnchorElementUtility_js_1.default.isBlobURL(this._url)) {
            this._url.search = search;
            this.setAttribute('href', this._url.toString());
        }
    }
    /**
     * Returns target.
     *
     * @returns target.
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
     * Returns text.
     *
     * @returns text.
     */
    get text() {
        return this.textContent;
    }
    /**
     * Sets text.
     *
     * @param text Text.
     */
    set text(text) {
        this.textContent = text;
    }
    /**
     * Returns type.
     *
     * @returns Type.
     */
    get type() {
        return this.getAttribute('type') || '';
    }
    /**
     * Sets type.
     *
     * @param type Type.
     */
    set type(type) {
        this.setAttribute('type', type);
    }
    /**
     * @override
     */
    toString() {
        return this.href;
    }
}
exports.default = HTMLAnchorElement;
//# sourceMappingURL=HTMLAnchorElement.cjs.map