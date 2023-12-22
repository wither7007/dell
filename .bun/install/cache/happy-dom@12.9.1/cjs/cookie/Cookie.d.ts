import CookieSameSiteEnum from './CookieSameSiteEnum.cjs';
import URL from '../url/URL.cjs';
/**
 * Cookie.
 */
export default class Cookie {
    key: string;
    value: string | null;
    originURL: URL;
    domain: string;
    path: string;
    expires: Date | null;
    httpOnly: boolean;
    secure: boolean;
    sameSite: CookieSameSiteEnum;
    /**
     * Constructor.
     *
     * @param originURL Origin URL.
     * @param cookie Cookie.
     */
    constructor(originURL: any, cookie: string);
    /**
     * Returns cookie string.
     *
     * @returns Cookie string.
     */
    toString(): string;
    /**
     * Returns "true" if expired.
     *
     * @returns "true" if expired.
     */
    isExpired(): boolean;
    /**
     * Validate cookie.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes
     * @returns "true" if valid.
     */
    validate(): boolean;
}
//# sourceMappingURL=Cookie.d.ts.map