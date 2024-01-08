"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _HTMLMediaElement_volume, _HTMLMediaElement_paused, _HTMLMediaElement_currentTime, _HTMLMediaElement_playbackRate, _HTMLMediaElement_defaultPlaybackRate, _HTMLMediaElement_muted, _HTMLMediaElement_defaultMuted, _HTMLMediaElement_preservesPitch;
Object.defineProperty(exports, "__esModule", { value: true });
const Event_js_1 = __importDefault(require("../../event/Event.cjs"));
const DOMException_js_1 = __importDefault(require("../../exception/DOMException.cjs"));
const DOMExceptionNameEnum_js_1 = __importDefault(require("../../exception/DOMExceptionNameEnum.cjs"));
const HTMLElement_js_1 = __importDefault(require("../html-element/HTMLElement.cjs"));
/**
 *
 * This implementation coming from jsdom
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/nodes/HTMLMediaElement-impl.js#L7
 *
 */
function getTimeRangeDummy() {
    return {
        length: 0,
        start() {
            return 0;
        },
        end() {
            return 0;
        }
    };
}
/**
 * HTML Media Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement.
 *
 */
class HTMLMediaElement extends HTMLElement_js_1.default {
    constructor() {
        super(...arguments);
        // Public Properties
        this.buffered = getTimeRangeDummy();
        this.duration = NaN;
        this.error = null;
        this.ended = false;
        this.networkState = 0;
        this.readyState = 0;
        this.textTracks = [];
        this.videoTracks = [];
        this.seeking = false;
        this.seekable = getTimeRangeDummy();
        this.played = getTimeRangeDummy();
        // Events
        this.onabort = null;
        this.oncanplay = null;
        this.oncanplaythrough = null;
        this.ondurationchange = null;
        this.onemptied = null;
        this.onended = null;
        this.onerror = null;
        this.onloadeddata = null;
        this.onloadedmetadata = null;
        this.onloadstart = null;
        this.onpause = null;
        this.onplay = null;
        this.onplaying = null;
        this.onprogress = null;
        this.onratechange = null;
        this.onresize = null;
        this.onseeked = null;
        this.onseeking = null;
        this.onstalled = null;
        this.onsuspend = null;
        this.ontimeupdate = null;
        this.onvolumechange = null;
        this.onwaiting = null;
        _HTMLMediaElement_volume.set(this, 1);
        _HTMLMediaElement_paused.set(this, true);
        _HTMLMediaElement_currentTime.set(this, 0);
        _HTMLMediaElement_playbackRate.set(this, 1);
        _HTMLMediaElement_defaultPlaybackRate.set(this, 1);
        _HTMLMediaElement_muted.set(this, false);
        _HTMLMediaElement_defaultMuted.set(this, false);
        _HTMLMediaElement_preservesPitch.set(this, true);
    }
    /**
     * Returns autoplay.
     *
     * @returns Autoplay.
     */
    get autoplay() {
        return this.getAttribute('autoplay') !== null;
    }
    /**
     * Sets autoplay.
     *
     * @param autoplay Autoplay.
     */
    set autoplay(autoplay) {
        if (!autoplay) {
            this.removeAttribute('autoplay');
        }
        else {
            this.setAttribute('autoplay', '');
        }
    }
    /**
     * Returns controls.
     *
     * @returns Controls.
     */
    get controls() {
        return this.getAttribute('controls') !== null;
    }
    /**
     * Sets controls.
     *
     * @param controls Controls.
     */
    set controls(controls) {
        if (!controls) {
            this.removeAttribute('controls');
        }
        else {
            this.setAttribute('controls', '');
        }
    }
    /**
     * Returns loop.
     *
     * @returns Loop.
     */
    get loop() {
        return this.getAttribute('loop') !== null;
    }
    /**
     * Sets loop.
     *
     * @param loop Loop.
     */
    set loop(loop) {
        if (!loop) {
            this.removeAttribute('loop');
        }
        else {
            this.setAttribute('loop', '');
        }
    }
    /**
     * Returns muted.
     *
     * @returns Muted.
     */
    get muted() {
        if (__classPrivateFieldGet(this, _HTMLMediaElement_muted, "f")) {
            return __classPrivateFieldGet(this, _HTMLMediaElement_muted, "f");
        }
        if (!__classPrivateFieldGet(this, _HTMLMediaElement_defaultMuted, "f")) {
            return this.getAttribute('muted') !== null;
        }
        return false;
    }
    /**
     * Sets muted.
     *
     * @param muted Muted.
     */
    set muted(muted) {
        __classPrivateFieldSet(this, _HTMLMediaElement_muted, !!muted, "f");
        if (!muted && !__classPrivateFieldGet(this, _HTMLMediaElement_defaultMuted, "f")) {
            this.removeAttribute('muted');
        }
        else {
            this.setAttribute('muted', '');
        }
    }
    /**
     * Returns defaultMuted.
     *
     * @returns DefaultMuted.
     */
    get defaultMuted() {
        return __classPrivateFieldGet(this, _HTMLMediaElement_defaultMuted, "f");
    }
    /**
     * Sets defaultMuted.
     *
     * @param defaultMuted DefaultMuted.
     */
    set defaultMuted(defaultMuted) {
        __classPrivateFieldSet(this, _HTMLMediaElement_defaultMuted, !!defaultMuted, "f");
        if (!__classPrivateFieldGet(this, _HTMLMediaElement_defaultMuted, "f") && !__classPrivateFieldGet(this, _HTMLMediaElement_muted, "f")) {
            this.removeAttribute('muted');
        }
        else {
            this.setAttribute('muted', '');
        }
    }
    /**
     * Returns src.
     *
     * @returns Src.
     */
    get src() {
        return this.getAttribute('src') || '';
    }
    /**
     * Sets src.
     *
     * @param src Src.
     */
    set src(src) {
        this.setAttribute('src', src);
        if (Boolean(src)) {
            this.dispatchEvent(new Event_js_1.default('canplay', { bubbles: false, cancelable: false }));
            this.dispatchEvent(new Event_js_1.default('durationchange', { bubbles: false, cancelable: false }));
        }
    }
    /**
     * Returns currentSrc.
     *
     * @returns CurrentrSrc.
     */
    get currentSrc() {
        return this.src;
    }
    /**
     * Returns volume.
     *
     * @returns Volume.
     */
    get volume() {
        return __classPrivateFieldGet(this, _HTMLMediaElement_volume, "f");
    }
    /**
     * Sets volume.
     *
     * @param volume Volume.
     */
    set volume(volume) {
        const parsedVolume = Number(volume);
        if (isNaN(parsedVolume)) {
            throw new TypeError(`Failed to set the 'volume' property on 'HTMLMediaElement': The provided double value is non-finite.`);
        }
        if (parsedVolume < 0 || parsedVolume > 1) {
            throw new DOMException_js_1.default(`Failed to set the 'volume' property on 'HTMLMediaElement': The volume provided (${parsedVolume}) is outside the range [0, 1].`, DOMExceptionNameEnum_js_1.default.indexSizeError);
        }
        // TODO: volumechange event https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volumechange_event
        __classPrivateFieldSet(this, _HTMLMediaElement_volume, parsedVolume, "f");
    }
    /**
     * Returns crossOrigin.
     *
     * @returns CrossOrigin.
     */
    get crossOrigin() {
        return this.getAttribute('crossorigin');
    }
    /**
     * Sets crossOrigin.
     *
     * @param crossOrigin CrossOrigin.
     */
    set crossOrigin(crossOrigin) {
        if (crossOrigin === null) {
            return;
        }
        if (['', 'use-credentials', 'anonymous'].includes(crossOrigin)) {
            this.setAttribute('crossorigin', crossOrigin);
        }
        else {
            this.setAttribute('crossorigin', 'anonymous');
        }
    }
    /**
     * Returns currentTime.
     *
     * @returns CurrentTime.
     */
    get currentTime() {
        return __classPrivateFieldGet(this, _HTMLMediaElement_currentTime, "f");
    }
    /**
     * Sets currentTime.
     *
     * @param currentTime CurrentTime.
     */
    set currentTime(currentTime) {
        const parsedCurrentTime = Number(currentTime);
        if (isNaN(parsedCurrentTime)) {
            throw new TypeError(`Failed to set the 'currentTime' property on 'HTMLMediaElement': The provided double value is non-finite.`);
        }
        __classPrivateFieldSet(this, _HTMLMediaElement_currentTime, parsedCurrentTime, "f");
    }
    /**
     * Returns playbackRate.
     *
     * @returns PlaybackRate.
     */
    get playbackRate() {
        return __classPrivateFieldGet(this, _HTMLMediaElement_playbackRate, "f");
    }
    /**
     * Sets playbackRate.
     *
     * @param playbackRate PlaybackRate.
     */
    set playbackRate(playbackRate) {
        const parsedPlaybackRate = Number(playbackRate);
        if (isNaN(parsedPlaybackRate)) {
            throw new TypeError(`Failed to set the 'playbackRate' property on 'HTMLMediaElement': The provided double value is non-finite.`);
        }
        __classPrivateFieldSet(this, _HTMLMediaElement_playbackRate, parsedPlaybackRate, "f");
    }
    /**
     * Returns defaultPlaybackRate.
     *
     * @returns DefaultPlaybackRate.
     */
    get defaultPlaybackRate() {
        return __classPrivateFieldGet(this, _HTMLMediaElement_defaultPlaybackRate, "f");
    }
    /**
     * Sets defaultPlaybackRate.
     *
     * @param defaultPlaybackRate DefaultPlaybackRate.
     */
    set defaultPlaybackRate(defaultPlaybackRate) {
        const parsedDefaultPlaybackRate = Number(defaultPlaybackRate);
        if (isNaN(parsedDefaultPlaybackRate)) {
            throw new TypeError(`Failed to set the 'defaultPlaybackRate' property on 'HTMLMediaElement': The provided double value is non-finite.`);
        }
        __classPrivateFieldSet(this, _HTMLMediaElement_defaultPlaybackRate, parsedDefaultPlaybackRate, "f");
    }
    /**
     * Returns preservesPitch.
     *
     * @returns PlaybackRate.
     */
    get preservesPitch() {
        return __classPrivateFieldGet(this, _HTMLMediaElement_preservesPitch, "f");
    }
    /**
     * Sets preservesPitch.
     *
     * @param preservesPitch PreservesPitch.
     */
    set preservesPitch(preservesPitch) {
        __classPrivateFieldSet(this, _HTMLMediaElement_preservesPitch, Boolean(preservesPitch), "f");
    }
    /**
     * Returns preload.
     *
     * @returns preload.
     */
    get preload() {
        return this.getAttribute('preload') || 'auto';
    }
    /**
     * Sets preload.
     *
     * @param preload preload.
     */
    set preload(preload) {
        this.setAttribute('preload', preload);
    }
    /**
     * Returns paused.
     *
     * @returns Paused.
     */
    get paused() {
        return __classPrivateFieldGet(this, _HTMLMediaElement_paused, "f");
    }
    /**
     * Pause played media.
     */
    pause() {
        __classPrivateFieldSet(this, _HTMLMediaElement_paused, true, "f");
        this.dispatchEvent(new Event_js_1.default('pause', { bubbles: false, cancelable: false }));
    }
    /**
     * Start playing media.
     */
    async play() {
        __classPrivateFieldSet(this, _HTMLMediaElement_paused, false, "f");
        return Promise.resolve();
    }
    /**
     *
     * @param _type
     */
    canPlayType(_type) {
        return '';
    }
    /**
     * Load media.
     */
    load() {
        this.dispatchEvent(new Event_js_1.default('emptied', { bubbles: false, cancelable: false }));
    }
    /**
     *
     */
    captureStream() {
        return {};
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    /**
     *
     * @param deep
     */
    cloneNode(deep = false) {
        return super.cloneNode(deep);
    }
}
_HTMLMediaElement_volume = new WeakMap(), _HTMLMediaElement_paused = new WeakMap(), _HTMLMediaElement_currentTime = new WeakMap(), _HTMLMediaElement_playbackRate = new WeakMap(), _HTMLMediaElement_defaultPlaybackRate = new WeakMap(), _HTMLMediaElement_muted = new WeakMap(), _HTMLMediaElement_defaultMuted = new WeakMap(), _HTMLMediaElement_preservesPitch = new WeakMap();
exports.default = HTMLMediaElement;
//# sourceMappingURL=HTMLMediaElement.cjs.map