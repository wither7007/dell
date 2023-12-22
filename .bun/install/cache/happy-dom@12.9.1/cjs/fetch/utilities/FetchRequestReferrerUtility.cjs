"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URL_js_1 = __importDefault(require("../../url/URL.cjs"));
const net_1 = require("net");
const REQUEST_REFERRER_UNSUPPORTED_PROTOCOL_REGEXP = /^(about|blob|data):$/;
const REFERRER_POLICIES = [
    '',
    'no-referrer',
    'no-referrer-when-downgrade',
    'same-origin',
    'origin',
    'strict-origin',
    'origin-when-cross-origin',
    'strict-origin-when-cross-origin',
    'unsafe-url'
];
/**
 * Fetch referrer utility.
 */
class FetchRequestReferrerUtility {
    /**
     * Returns the request referrer to be used as the value for the "Referer" header.
     *
     * Based on:
     * https://github.com/node-fetch/node-fetch/blob/main/src/utils/referrer.js (MIT)
     *
     * @see https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer
     * @param document Document.
     * @param request Request.
     * @returns Request referrer.
     */
    static getSentReferrer(document, request) {
        if (request.referrer === 'about:client' && document.defaultView.location.origin === 'null') {
            return 'no-referrer';
        }
        const requestURL = new URL_js_1.default(request.url);
        const referrerURL = request.referrer === 'about:client'
            ? new URL_js_1.default(document.defaultView.location.href)
            : new URL_js_1.default(request.referrer);
        if (REQUEST_REFERRER_UNSUPPORTED_PROTOCOL_REGEXP.test(referrerURL.protocol)) {
            return 'no-referrer';
        }
        referrerURL.username = '';
        referrerURL.password = '';
        referrerURL.hash = '';
        switch (request.referrerPolicy) {
            case 'no-referrer':
                return 'no-referrer';
            case 'origin':
                return new URL_js_1.default(referrerURL.origin);
            case 'unsafe-url':
                return referrerURL;
            case 'strict-origin':
                if (this.isURLPotentiallyTrustWorthy(referrerURL) &&
                    !this.isURLPotentiallyTrustWorthy(requestURL)) {
                    return 'no-referrer';
                }
                return new URL_js_1.default(referrerURL.origin);
            case 'strict-origin-when-cross-origin':
                if (referrerURL.origin === requestURL.origin) {
                    return referrerURL;
                }
                if (this.isURLPotentiallyTrustWorthy(referrerURL) &&
                    !this.isURLPotentiallyTrustWorthy(requestURL)) {
                    return 'no-referrer';
                }
                return new URL_js_1.default(referrerURL.origin);
            case 'same-origin':
                if (referrerURL.origin === requestURL.origin) {
                    return referrerURL;
                }
                return 'no-referrer';
            case 'origin-when-cross-origin':
                if (referrerURL.origin === requestURL.origin) {
                    return referrerURL;
                }
                return new URL_js_1.default(referrerURL.origin);
            case 'no-referrer-when-downgrade':
                if (this.isURLPotentiallyTrustWorthy(referrerURL) &&
                    !this.isURLPotentiallyTrustWorthy(requestURL)) {
                    return 'no-referrer';
                }
                return referrerURL;
        }
        return 'no-referrer';
    }
    /**
     * Returns initial referrer.
     *
     * @param document Document.
     * @param referrer Referrer.
     * @returns Initial referrer.
     */
    static getInitialReferrer(document, referrer) {
        if (referrer === '' || referrer === 'no-referrer' || referrer === 'client') {
            return referrer;
        }
        else if (referrer) {
            const referrerURL = referrer instanceof URL_js_1.default ? referrer : new URL_js_1.default(referrer, document.location);
            return referrerURL.origin === document.location.origin ? referrerURL : 'client';
        }
        return 'client';
    }
    /**
     * Returns referrer policy from header.
     *
     * @see https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header
     * @param headers Response headers
     * @returns Policy.
     */
    static getReferrerPolicyFromHeader(headers) {
        const referrerPolicyHeader = headers.get('Referrer-Policy');
        if (!referrerPolicyHeader) {
            return '';
        }
        const policyTokens = referrerPolicyHeader.split(/[,\s]+/);
        let policy = '';
        for (const token of policyTokens) {
            if (token && REFERRER_POLICIES.includes(token)) {
                policy = token;
            }
        }
        return policy;
    }
    /**
     * Returns "true" if the request's referrer is potentially trustworthy.
     *
     * @see https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy
     * @param url URL.
     * @returns "true" if the request's referrer is potentially trustworthy.
     */
    static isURLPotentiallyTrustWorthy(url) {
        // 1. If url is "about:blank" or "about:srcdoc", return "Potentially Trustworthy".
        if (/^about:(blank|srcdoc)$/.test(url.href)) {
            return true;
        }
        // 2. If url's scheme is "data", return "Potentially Trustworthy".
        if (url.protocol === 'data:') {
            return true;
        }
        // Note: The origin of blob: and filesystem: URLs is the origin of the context in which they were
        // Created. Therefore, blobs created in a trustworthy origin will themselves be potentially
        // Trustworthy.
        if (/^(blob|filesystem):$/.test(url.protocol)) {
            return true;
        }
        // 3. Return the result of executing §3.2 Is origin potentially trustworthy? on url's origin.
        return this.isOriginPotentiallyTrustWorthy(url);
    }
    /**
     * Returns "true" if the request's referrer origin is potentially trustworthy.
     *
     * @see https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy
     * @param url URL.
     * @returns "true" if the request's referrer origin is potentially trustworthy.
     */
    static isOriginPotentiallyTrustWorthy(url) {
        // 1. If origin is an opaque origin, return "Not Trustworthy".
        // Not applicable
        // 2. Assert: origin is a tuple origin.
        // Not for implementations
        // 3. If origin's scheme is either "https" or "wss", return "Potentially Trustworthy".
        if (/^(http|ws)s:$/.test(url.protocol)) {
            return true;
        }
        // 4. If origin's host component matches one of the CIDR notations 127.0.0.0/8 or ::1/128 [RFC4632], return "Potentially Trustworthy".
        const hostIp = url.host.replace(/(^\[)|(]$)/g, '');
        const hostIPVersion = (0, net_1.isIP)(hostIp);
        if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
            return true;
        }
        if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
            return true;
        }
        // 5. If origin's host component is "localhost" or falls within ".localhost", and the user agent conforms to the name resolution rules in [let-localhost-be-localhost], return "Potentially Trustworthy".
        // We are returning FALSE here because we cannot ensure conformance to
        // Let-localhost-be-loalhost (https://tools.ietf.org/html/draft-west-let-localhost-be-localhost)
        if (url.host === 'localhost' || url.host.endsWith('.localhost')) {
            return false;
        }
        // 6. If origin's scheme component is file, return "Potentially Trustworthy".
        if (url.protocol === 'file:') {
            return true;
        }
        // 7. If origin's scheme component is one which the user agent considers to be authenticated, return "Potentially Trustworthy".
        // Not supported
        // 8. If origin has been configured as a trustworthy origin, return "Potentially Trustworthy".
        // Not supported
        // 9. Return "Not Trustworthy".
        return false;
    }
}
exports.default = FetchRequestReferrerUtility;
//# sourceMappingURL=FetchRequestReferrerUtility.cjs.map