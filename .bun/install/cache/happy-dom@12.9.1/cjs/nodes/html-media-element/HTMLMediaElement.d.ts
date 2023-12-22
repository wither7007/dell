import ErrorEvent from '../../event/events/ErrorEvent.cjs';
import Event from '../../event/Event.cjs';
import HTMLElement from '../html-element/HTMLElement.cjs';
import IHTMLMediaElement, { IMediaError } from './IHTMLMediaElement.cjs';
/**
 * HTML Media Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement.
 *
 */
export default class HTMLMediaElement extends HTMLElement implements IHTMLMediaElement {
    #private;
    readonly buffered: object;
    readonly duration: number;
    readonly error: IMediaError;
    readonly ended = false;
    readonly networkState = 0;
    readonly readyState = 0;
    readonly textTracks: any[];
    readonly videoTracks: any[];
    readonly seeking = false;
    readonly seekable: object;
    readonly played: object;
    onabort: (event: Event) => void | null;
    oncanplay: (event: Event) => void | null;
    oncanplaythrough: (event: Event) => void | null;
    ondurationchange: (event: Event) => void | null;
    onemptied: (event: Event) => void | null;
    onended: (event: Event) => void | null;
    onerror: (event: ErrorEvent) => void | null;
    onloadeddata: (event: Event) => void | null;
    onloadedmetadata: (event: Event) => void | null;
    onloadstart: (event: Event) => void | null;
    onpause: (event: Event) => void | null;
    onplay: (event: Event) => void | null;
    onplaying: (event: Event) => void | null;
    onprogress: (event: Event) => void | null;
    onratechange: (event: Event) => void | null;
    onresize: (event: Event) => void | null;
    onseeked: (event: Event) => void | null;
    onseeking: (event: Event) => void | null;
    onstalled: (event: Event) => void | null;
    onsuspend: (event: Event) => void | null;
    ontimeupdate: (event: Event) => void | null;
    onvolumechange: (event: Event) => void | null;
    onwaiting: (event: Event) => void | null;
    /**
     * Returns autoplay.
     *
     * @returns Autoplay.
     */
    get autoplay(): boolean;
    /**
     * Sets autoplay.
     *
     * @param autoplay Autoplay.
     */
    set autoplay(autoplay: boolean);
    /**
     * Returns controls.
     *
     * @returns Controls.
     */
    get controls(): boolean;
    /**
     * Sets controls.
     *
     * @param controls Controls.
     */
    set controls(controls: boolean);
    /**
     * Returns loop.
     *
     * @returns Loop.
     */
    get loop(): boolean;
    /**
     * Sets loop.
     *
     * @param loop Loop.
     */
    set loop(loop: boolean);
    /**
     * Returns muted.
     *
     * @returns Muted.
     */
    get muted(): boolean;
    /**
     * Sets muted.
     *
     * @param muted Muted.
     */
    set muted(muted: boolean);
    /**
     * Returns defaultMuted.
     *
     * @returns DefaultMuted.
     */
    get defaultMuted(): boolean;
    /**
     * Sets defaultMuted.
     *
     * @param defaultMuted DefaultMuted.
     */
    set defaultMuted(defaultMuted: boolean);
    /**
     * Returns src.
     *
     * @returns Src.
     */
    get src(): string;
    /**
     * Sets src.
     *
     * @param src Src.
     */
    set src(src: string);
    /**
     * Returns currentSrc.
     *
     * @returns CurrentrSrc.
     */
    get currentSrc(): string;
    /**
     * Returns volume.
     *
     * @returns Volume.
     */
    get volume(): number;
    /**
     * Sets volume.
     *
     * @param volume Volume.
     */
    set volume(volume: number | string);
    /**
     * Returns crossOrigin.
     *
     * @returns CrossOrigin.
     */
    get crossOrigin(): string;
    /**
     * Sets crossOrigin.
     *
     * @param crossOrigin CrossOrigin.
     */
    set crossOrigin(crossOrigin: string | null);
    /**
     * Returns currentTime.
     *
     * @returns CurrentTime.
     */
    get currentTime(): number;
    /**
     * Sets currentTime.
     *
     * @param currentTime CurrentTime.
     */
    set currentTime(currentTime: number | string);
    /**
     * Returns playbackRate.
     *
     * @returns PlaybackRate.
     */
    get playbackRate(): number;
    /**
     * Sets playbackRate.
     *
     * @param playbackRate PlaybackRate.
     */
    set playbackRate(playbackRate: number | string);
    /**
     * Returns defaultPlaybackRate.
     *
     * @returns DefaultPlaybackRate.
     */
    get defaultPlaybackRate(): number;
    /**
     * Sets defaultPlaybackRate.
     *
     * @param defaultPlaybackRate DefaultPlaybackRate.
     */
    set defaultPlaybackRate(defaultPlaybackRate: number | string);
    /**
     * Returns preservesPitch.
     *
     * @returns PlaybackRate.
     */
    get preservesPitch(): boolean;
    /**
     * Sets preservesPitch.
     *
     * @param preservesPitch PreservesPitch.
     */
    set preservesPitch(preservesPitch: boolean);
    /**
     * Returns preload.
     *
     * @returns preload.
     */
    get preload(): string;
    /**
     * Sets preload.
     *
     * @param preload preload.
     */
    set preload(preload: string);
    /**
     * Returns paused.
     *
     * @returns Paused.
     */
    get paused(): boolean;
    /**
     * Pause played media.
     */
    pause(): void;
    /**
     * Start playing media.
     */
    play(): Promise<void>;
    /**
     *
     * @param _type
     */
    canPlayType(_type: string): string;
    /**
     * Load media.
     */
    load(): void;
    /**
     *
     */
    captureStream(): object;
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
    cloneNode(deep?: boolean): IHTMLMediaElement;
}
//# sourceMappingURL=HTMLMediaElement.d.ts.map