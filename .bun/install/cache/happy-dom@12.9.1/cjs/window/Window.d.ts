/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import CustomElementRegistry from '../custom-element/CustomElementRegistry.cjs';
import Document from '../nodes/document/Document.cjs';
import HTMLDocument from '../nodes/html-document/HTMLDocument.cjs';
import XMLDocument from '../nodes/xml-document/XMLDocument.cjs';
import SVGDocument from '../nodes/svg-document/SVGDocument.cjs';
import Node from '../nodes/node/Node.cjs';
import Text from '../nodes/text/Text.cjs';
import Comment from '../nodes/comment/Comment.cjs';
import ShadowRoot from '../nodes/shadow-root/ShadowRoot.cjs';
import Element from '../nodes/element/Element.cjs';
import HTMLTemplateElement from '../nodes/html-template-element/HTMLTemplateElement.cjs';
import HTMLFormElement from '../nodes/html-form-element/HTMLFormElement.cjs';
import HTMLElement from '../nodes/html-element/HTMLElement.cjs';
import HTMLUnknownElement from '../nodes/html-unknown-element/HTMLUnknownElement.cjs';
import HTMLInputElement from '../nodes/html-input-element/HTMLInputElement.cjs';
import HTMLSelectElement from '../nodes/html-select-element/HTMLSelectElement.cjs';
import HTMLTextAreaElement from '../nodes/html-text-area-element/HTMLTextAreaElement.cjs';
import HTMLLinkElement from '../nodes/html-link-element/HTMLLinkElement.cjs';
import HTMLStyleElement from '../nodes/html-style-element/HTMLStyleElement.cjs';
import HTMLSlotElement from '../nodes/html-slot-element/HTMLSlotElement.cjs';
import HTMLLabelElement from '../nodes/html-label-element/HTMLLabelElement.cjs';
import HTMLMetaElement from '../nodes/html-meta-element/HTMLMetaElement.cjs';
import HTMLMediaElement from '../nodes/html-media-element/HTMLMediaElement.cjs';
import HTMLAudioElement from '../nodes/html-audio-element/HTMLAudioElement.cjs';
import HTMLVideoElement from '../nodes/html-video-element/HTMLVideoElement.cjs';
import HTMLBaseElement from '../nodes/html-base-element/HTMLBaseElement.cjs';
import HTMLIFrameElement from '../nodes/html-iframe-element/HTMLIFrameElement.cjs';
import HTMLDialogElement from '../nodes/html-dialog-element/HTMLDialogElement.cjs';
import SVGSVGElement from '../nodes/svg-element/SVGSVGElement.cjs';
import SVGElement from '../nodes/svg-element/SVGElement.cjs';
import SVGGraphicsElement from '../nodes/svg-element/SVGGraphicsElement.cjs';
import HTMLScriptElement from '../nodes/html-script-element/HTMLScriptElement.cjs';
import HTMLImageElement from '../nodes/html-image-element/HTMLImageElement.cjs';
import CharacterData from '../nodes/character-data/CharacterData.cjs';
import NodeIterator from '../tree-walker/NodeIterator.cjs';
import TreeWalker from '../tree-walker/TreeWalker.cjs';
import Event from '../event/Event.cjs';
import CustomEvent from '../event/events/CustomEvent.cjs';
import AnimationEvent from '../event/events/AnimationEvent.cjs';
import KeyboardEvent from '../event/events/KeyboardEvent.cjs';
import MessageEvent from '../event/events/MessageEvent.cjs';
import ProgressEvent from '../event/events/ProgressEvent.cjs';
import MediaQueryListEvent from '../event/events/MediaQueryListEvent.cjs';
import EventTarget from '../event/EventTarget.cjs';
import MessagePort from '../event/MessagePort.cjs';
import { URLSearchParams } from 'url';
import URL from '../url/URL.cjs';
import Location from '../location/Location.cjs';
import MutationObserver from '../mutation-observer/MutationObserver.cjs';
import MutationRecord from '../mutation-observer/MutationRecord.cjs';
import DOMParserImplementation from '../dom-parser/DOMParser.cjs';
import XMLSerializer from '../xml-serializer/XMLSerializer.cjs';
import ResizeObserver from '../resize-observer/ResizeObserver.cjs';
import Blob from '../file/Blob.cjs';
import File from '../file/File.cjs';
import DOMException from '../exception/DOMException.cjs';
import History from '../history/History.cjs';
import CSSStyleSheet from '../css/CSSStyleSheet.cjs';
import CSSStyleDeclaration from '../css/declaration/CSSStyleDeclaration.cjs';
import CSS from '../css/CSS.cjs';
import CSSUnitValue from '../css/CSSUnitValue.cjs';
import CSSRule from '../css/CSSRule.cjs';
import CSSContainerRule from '../css/rules/CSSContainerRule.cjs';
import CSSFontFaceRule from '../css/rules/CSSFontFaceRule.cjs';
import CSSKeyframeRule from '../css/rules/CSSKeyframeRule.cjs';
import CSSKeyframesRule from '../css/rules/CSSKeyframesRule.cjs';
import CSSMediaRule from '../css/rules/CSSMediaRule.cjs';
import CSSStyleRule from '../css/rules/CSSStyleRule.cjs';
import CSSSupportsRule from '../css/rules/CSSSupportsRule.cjs';
import MouseEvent from '../event/events/MouseEvent.cjs';
import PointerEvent from '../event/events/PointerEvent.cjs';
import FocusEvent from '../event/events/FocusEvent.cjs';
import WheelEvent from '../event/events/WheelEvent.cjs';
import DataTransfer from '../event/DataTransfer.cjs';
import DataTransferItem from '../event/DataTransferItem.cjs';
import DataTransferItemList from '../event/DataTransferItemList.cjs';
import InputEvent from '../event/events/InputEvent.cjs';
import UIEvent from '../event/UIEvent.cjs';
import ErrorEvent from '../event/events/ErrorEvent.cjs';
import StorageEvent from '../event/events/StorageEvent.cjs';
import SubmitEvent from '../event/events/SubmitEvent.cjs';
import Screen from '../screen/Screen.cjs';
import AsyncTaskManager from '../async-task-manager/AsyncTaskManager.cjs';
import IResponse from '../fetch/types/IResponse.cjs';
import IResponseInit from '../fetch/types/IResponseInit.cjs';
import IRequest from '../fetch/types/IRequest.cjs';
import IRequestInit from '../fetch/types/IRequestInit.cjs';
import IHeaders from '../fetch/types/IHeaders.cjs';
import IHeadersInit from '../fetch/types/IHeadersInit.cjs';
import Storage from '../storage/Storage.cjs';
import IWindow from './IWindow.cjs';
import HTMLCollection from '../nodes/element/HTMLCollection.cjs';
import HTMLFormControlsCollection from '../nodes/html-form-element/HTMLFormControlsCollection.cjs';
import NodeList from '../nodes/node/NodeList.cjs';
import MediaQueryList from '../match-media/MediaQueryList.cjs';
import Selection from '../selection/Selection.cjs';
import Navigator from '../navigator/Navigator.cjs';
import MimeType from '../navigator/MimeType.cjs';
import MimeTypeArray from '../navigator/MimeTypeArray.cjs';
import Plugin from '../navigator/Plugin.cjs';
import PluginArray from '../navigator/PluginArray.cjs';
import DOMRect from '../nodes/element/DOMRect.cjs';
import * as PerfHooks from 'perf_hooks';
import { webcrypto } from 'crypto';
import XMLHttpRequestUpload from '../xml-http-request/XMLHttpRequestUpload.cjs';
import XMLHttpRequestEventTarget from '../xml-http-request/XMLHttpRequestEventTarget.cjs';
import Attr from '../nodes/attr/Attr.cjs';
import NamedNodeMap from '../named-node-map/NamedNodeMap.cjs';
import IElement from '../nodes/element/IElement.cjs';
import ProcessingInstruction from '../nodes/processing-instruction/ProcessingInstruction.cjs';
import RequestInfo from '../fetch/types/IRequestInfo.cjs';
import FileList from '../nodes/html-input-element/FileList.cjs';
import Stream from 'stream';
import FormData from '../form-data/FormData.cjs';
import AbortController from '../fetch/AbortController.cjs';
import AbortSignal from '../fetch/AbortSignal.cjs';
import IResponseBody from '../fetch/types/IResponseBody.cjs';
import IRequestInfo from '../fetch/types/IRequestInfo.cjs';
import IHappyDOMOptions from './IHappyDOMOptions.cjs';
import RadioNodeList from '../nodes/html-form-element/RadioNodeList.cjs';
import ValidityState from '../validity-state/ValidityState.cjs';
import VirtualConsolePrinter from '../console/VirtualConsolePrinter.cjs';
import IHappyDOMSettings from './IHappyDOMSettings.cjs';
import Permissions from '../permissions/Permissions.cjs';
import PermissionStatus from '../permissions/PermissionStatus.cjs';
import Clipboard from '../clipboard/Clipboard.cjs';
import ClipboardItem from '../clipboard/ClipboardItem.cjs';
import ClipboardEvent from '../event/events/ClipboardEvent.cjs';
/**
 * Browser window.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window.
 */
export default class Window extends EventTarget implements IWindow {
    readonly happyDOM: {
        whenAsyncComplete: () => Promise<void>;
        cancelAsync: () => void;
        asyncTaskManager: AsyncTaskManager;
        setWindowSize: (options: {
            width?: number;
            height?: number;
        }) => void;
        setURL: (url: string) => void;
        virtualConsolePrinter: VirtualConsolePrinter | null;
        settings: IHappyDOMSettings;
        /**
         * @deprecated
         */
        setInnerWidth: (width: number) => void;
        /**
         * @deprecated
         */
        setInnerHeight: (height: number) => void;
    };
    readonly Node: typeof Node;
    readonly Attr: typeof Attr;
    readonly SVGSVGElement: typeof SVGSVGElement;
    readonly SVGElement: typeof SVGElement;
    readonly SVGGraphicsElement: typeof SVGGraphicsElement;
    readonly Text: typeof Text;
    readonly Comment: typeof Comment;
    readonly ShadowRoot: typeof ShadowRoot;
    readonly ProcessingInstruction: typeof ProcessingInstruction;
    readonly Element: typeof Element;
    readonly CharacterData: typeof CharacterData;
    readonly Document: typeof Document;
    readonly HTMLDocument: typeof HTMLDocument;
    readonly XMLDocument: typeof XMLDocument;
    readonly SVGDocument: typeof SVGDocument;
    readonly HTMLElement: typeof HTMLElement;
    readonly HTMLUnknownElement: typeof HTMLUnknownElement;
    readonly HTMLTemplateElement: typeof HTMLTemplateElement;
    readonly HTMLFormElement: typeof HTMLFormElement;
    readonly HTMLInputElement: typeof HTMLInputElement;
    readonly HTMLSelectElement: typeof HTMLSelectElement;
    readonly HTMLTextAreaElement: typeof HTMLTextAreaElement;
    readonly HTMLImageElement: typeof HTMLImageElement;
    readonly HTMLScriptElement: typeof HTMLScriptElement;
    readonly HTMLLinkElement: typeof HTMLLinkElement;
    readonly HTMLStyleElement: typeof HTMLStyleElement;
    readonly HTMLLabelElement: typeof HTMLLabelElement;
    readonly HTMLSlotElement: typeof HTMLSlotElement;
    readonly HTMLMetaElement: typeof HTMLMetaElement;
    readonly HTMLMediaElement: typeof HTMLMediaElement;
    readonly HTMLAudioElement: typeof HTMLAudioElement;
    readonly HTMLVideoElement: typeof HTMLVideoElement;
    readonly HTMLBaseElement: typeof HTMLBaseElement;
    readonly HTMLIFrameElement: typeof HTMLIFrameElement;
    readonly HTMLDialogElement: typeof HTMLDialogElement;
    readonly HTMLHeadElement: typeof HTMLElement;
    readonly HTMLTitleElement: typeof HTMLElement;
    readonly HTMLBodyElement: typeof HTMLElement;
    readonly HTMLHeadingElement: typeof HTMLElement;
    readonly HTMLParagraphElement: typeof HTMLElement;
    readonly HTMLHRElement: typeof HTMLElement;
    readonly HTMLPreElement: typeof HTMLElement;
    readonly HTMLUListElement: typeof HTMLElement;
    readonly HTMLOListElement: typeof HTMLElement;
    readonly HTMLLIElement: typeof HTMLElement;
    readonly HTMLMenuElement: typeof HTMLElement;
    readonly HTMLDListElement: typeof HTMLElement;
    readonly HTMLDivElement: typeof HTMLElement;
    readonly HTMLAnchorElement: typeof HTMLElement;
    readonly HTMLAreaElement: typeof HTMLElement;
    readonly HTMLBRElement: typeof HTMLElement;
    readonly HTMLButtonElement: typeof HTMLElement;
    readonly HTMLCanvasElement: typeof HTMLElement;
    readonly HTMLDataElement: typeof HTMLElement;
    readonly HTMLDataListElement: typeof HTMLElement;
    readonly HTMLDetailsElement: typeof HTMLElement;
    readonly HTMLDirectoryElement: typeof HTMLElement;
    readonly HTMLFieldSetElement: typeof HTMLElement;
    readonly HTMLFontElement: typeof HTMLElement;
    readonly HTMLHtmlElement: typeof HTMLElement;
    readonly HTMLLegendElement: typeof HTMLElement;
    readonly HTMLMapElement: typeof HTMLElement;
    readonly HTMLMarqueeElement: typeof HTMLElement;
    readonly HTMLMeterElement: typeof HTMLElement;
    readonly HTMLModElement: typeof HTMLElement;
    readonly HTMLOutputElement: typeof HTMLElement;
    readonly HTMLPictureElement: typeof HTMLElement;
    readonly HTMLProgressElement: typeof HTMLElement;
    readonly HTMLQuoteElement: typeof HTMLElement;
    readonly HTMLSourceElement: typeof HTMLElement;
    readonly HTMLSpanElement: typeof HTMLElement;
    readonly HTMLTableCaptionElement: typeof HTMLElement;
    readonly HTMLTableCellElement: typeof HTMLElement;
    readonly HTMLTableColElement: typeof HTMLElement;
    readonly HTMLTableElement: typeof HTMLElement;
    readonly HTMLTimeElement: typeof HTMLElement;
    readonly HTMLTableRowElement: typeof HTMLElement;
    readonly HTMLTableSectionElement: typeof HTMLElement;
    readonly HTMLFrameElement: typeof HTMLElement;
    readonly HTMLFrameSetElement: typeof HTMLElement;
    readonly HTMLEmbedElement: typeof HTMLElement;
    readonly HTMLObjectElement: typeof HTMLElement;
    readonly HTMLParamElement: typeof HTMLElement;
    readonly HTMLTrackElement: typeof HTMLElement;
    readonly Event: typeof Event;
    readonly UIEvent: typeof UIEvent;
    readonly CustomEvent: typeof CustomEvent;
    readonly AnimationEvent: typeof AnimationEvent;
    readonly KeyboardEvent: typeof KeyboardEvent;
    readonly MessageEvent: typeof MessageEvent;
    readonly MouseEvent: typeof MouseEvent;
    readonly PointerEvent: typeof PointerEvent;
    readonly FocusEvent: typeof FocusEvent;
    readonly WheelEvent: typeof WheelEvent;
    readonly InputEvent: typeof InputEvent;
    readonly ErrorEvent: typeof ErrorEvent;
    readonly StorageEvent: typeof StorageEvent;
    readonly SubmitEvent: typeof SubmitEvent;
    readonly ProgressEvent: typeof ProgressEvent;
    readonly MediaQueryListEvent: typeof MediaQueryListEvent;
    readonly ClipboardEvent: typeof ClipboardEvent;
    readonly AudioProcessingEvent: typeof Event;
    readonly BeforeInputEvent: typeof Event;
    readonly BeforeUnloadEvent: typeof Event;
    readonly BlobEvent: typeof Event;
    readonly CloseEvent: typeof Event;
    readonly CompositionEvent: typeof Event;
    readonly CSSFontFaceLoadEvent: typeof Event;
    readonly DeviceLightEvent: typeof Event;
    readonly DeviceMotionEvent: typeof Event;
    readonly DeviceOrientationEvent: typeof Event;
    readonly DeviceProximityEvent: typeof Event;
    readonly DOMTransactionEvent: typeof Event;
    readonly DragEvent: typeof Event;
    readonly EditingBeforeInputEvent: typeof Event;
    readonly FetchEvent: typeof Event;
    readonly GamepadEvent: typeof Event;
    readonly HashChangeEvent: typeof Event;
    readonly IDBVersionChangeEvent: typeof Event;
    readonly MediaStreamEvent: typeof Event;
    readonly MutationEvent: typeof Event;
    readonly OfflineAudioCompletionEvent: typeof Event;
    readonly OverconstrainedError: typeof Event;
    readonly PageTransitionEvent: typeof Event;
    readonly PaymentRequestUpdateEvent: typeof Event;
    readonly PopStateEvent: typeof Event;
    readonly RelatedEvent: typeof Event;
    readonly RTCDataChannelEvent: typeof Event;
    readonly RTCIdentityErrorEvent: typeof Event;
    readonly RTCIdentityEvent: typeof Event;
    readonly RTCPeerConnectionIceEvent: typeof Event;
    readonly SensorEvent: typeof Event;
    readonly SVGEvent: typeof Event;
    readonly SVGZoomEvent: typeof Event;
    readonly TimeEvent: typeof Event;
    readonly TouchEvent: typeof Event;
    readonly TrackEvent: typeof Event;
    readonly TransitionEvent: typeof Event;
    readonly UserProximityEvent: typeof Event;
    readonly WebGLContextEvent: typeof Event;
    readonly TextEvent: typeof Event;
    readonly NamedNodeMap: typeof NamedNodeMap;
    readonly NodeFilter: {
        FILTER_ACCEPT: number;
        FILTER_REJECT: number;
        FILTER_SKIP: number;
        SHOW_ALL: number;
        SHOW_ELEMENT: number;
        SHOW_ATTRIBUTE: number;
        SHOW_TEXT: number;
        SHOW_CDATA_SECTION: number;
        SHOW_ENTITY_REFERENCE: number;
        SHOW_ENTITY: number;
        SHOW_PROCESSING_INSTRUCTION: number;
        SHOW_COMMENT: number;
        SHOW_DOCUMENT: number;
        SHOW_DOCUMENT_TYPE: number;
        SHOW_DOCUMENT_FRAGMENT: number;
        SHOW_NOTATION: number;
    };
    readonly NodeIterator: typeof NodeIterator;
    readonly TreeWalker: typeof TreeWalker;
    readonly MutationObserver: typeof MutationObserver;
    readonly MutationRecord: typeof MutationRecord;
    readonly EventTarget: typeof EventTarget;
    readonly MessagePort: typeof MessagePort;
    readonly DataTransfer: typeof DataTransfer;
    readonly DataTransferItem: typeof DataTransferItem;
    readonly DataTransferItemList: typeof DataTransferItemList;
    readonly URL: typeof URL;
    readonly Location: typeof Location;
    readonly CustomElementRegistry: typeof CustomElementRegistry;
    readonly Window: typeof Window;
    readonly XMLSerializer: typeof XMLSerializer;
    readonly ResizeObserver: typeof ResizeObserver;
    readonly CSSStyleSheet: typeof CSSStyleSheet;
    readonly Blob: typeof Blob;
    readonly File: typeof File;
    readonly DOMException: typeof DOMException;
    readonly History: typeof History;
    readonly Screen: typeof Screen;
    readonly Storage: typeof Storage;
    readonly URLSearchParams: typeof URLSearchParams;
    readonly HTMLCollection: typeof HTMLCollection;
    readonly HTMLFormControlsCollection: typeof HTMLFormControlsCollection;
    readonly NodeList: typeof NodeList;
    readonly CSSUnitValue: typeof CSSUnitValue;
    readonly CSSRule: typeof CSSRule;
    readonly CSSContainerRule: typeof CSSContainerRule;
    readonly CSSFontFaceRule: typeof CSSFontFaceRule;
    readonly CSSKeyframeRule: typeof CSSKeyframeRule;
    readonly CSSKeyframesRule: typeof CSSKeyframesRule;
    readonly CSSMediaRule: typeof CSSMediaRule;
    readonly CSSStyleRule: typeof CSSStyleRule;
    readonly CSSSupportsRule: typeof CSSSupportsRule;
    readonly Selection: typeof Selection;
    readonly Navigator: typeof Navigator;
    readonly MimeType: typeof MimeType;
    readonly MimeTypeArray: typeof MimeTypeArray;
    readonly Plugin: typeof Plugin;
    readonly PluginArray: typeof PluginArray;
    readonly FileList: typeof FileList;
    readonly Headers: {
        new (init?: IHeadersInit): IHeaders;
    };
    readonly DOMRect: typeof DOMRect;
    readonly RadioNodeList: typeof RadioNodeList;
    readonly ValidityState: typeof ValidityState;
    readonly Request: {
        new (input: IRequestInfo, init?: IRequestInit): IRequest;
    };
    readonly Response: {
        new (body?: IResponseBody, init?: IResponseInit): IResponse;
    };
    readonly XMLHttpRequestUpload: typeof XMLHttpRequestUpload;
    readonly XMLHttpRequestEventTarget: typeof XMLHttpRequestEventTarget;
    readonly ReadableStream: typeof Stream.Readable;
    readonly WritableStream: typeof Stream.Writable;
    readonly TransformStream: typeof Stream.Transform;
    readonly AbortController: typeof AbortController;
    readonly AbortSignal: typeof AbortSignal;
    readonly FormData: typeof FormData;
    readonly Permissions: typeof Permissions;
    readonly PermissionStatus: typeof PermissionStatus;
    readonly Clipboard: typeof Clipboard;
    readonly ClipboardItem: typeof ClipboardItem;
    readonly XMLHttpRequest: any;
    readonly DOMParser: typeof DOMParserImplementation;
    readonly Range: any;
    readonly FileReader: any;
    readonly Image: any;
    readonly DocumentFragment: any;
    readonly Audio: any;
    onload: (event: Event) => void;
    onerror: (event: ErrorEvent) => void;
    readonly document: Document;
    readonly customElements: CustomElementRegistry;
    readonly location: Location;
    readonly history: History;
    readonly navigator: Navigator;
    readonly console: Console;
    readonly self: this;
    readonly top: this;
    readonly parent: this;
    readonly window: this;
    readonly globalThis: this;
    readonly screen: Screen;
    readonly devicePixelRatio = 1;
    readonly sessionStorage: Storage;
    readonly localStorage: Storage;
    readonly performance: PerfHooks.Performance;
    readonly innerWidth: number;
    readonly innerHeight: number;
    readonly outerWidth: number;
    readonly outerHeight: number;
    readonly crypto: webcrypto.Crypto;
    Array: typeof Array;
    ArrayBuffer: typeof ArrayBuffer;
    Boolean: typeof Boolean;
    Buffer: BufferConstructor;
    DataView: typeof DataView;
    Date: typeof Date;
    Error: typeof Error;
    EvalError: typeof EvalError;
    Float32Array: typeof Float32Array;
    Float64Array: typeof Float64Array;
    Function: typeof Function;
    Infinity: typeof Infinity;
    Int16Array: typeof Int16Array;
    Int32Array: typeof Int32Array;
    Int8Array: typeof Int8Array;
    Intl: typeof Intl;
    JSON: typeof JSON;
    Map: MapConstructor;
    Math: typeof Math;
    NaN: typeof NaN;
    Number: typeof Number;
    Object: typeof Object;
    Promise: typeof Promise;
    RangeError: typeof RangeError;
    ReferenceError: typeof ReferenceError;
    RegExp: typeof RegExp;
    Set: SetConstructor;
    String: typeof String;
    Symbol: Function;
    SyntaxError: typeof SyntaxError;
    TypeError: typeof TypeError;
    URIError: typeof URIError;
    Uint16Array: typeof Uint16Array;
    Uint32Array: typeof Uint32Array;
    Uint8Array: typeof Uint8Array;
    Uint8ClampedArray: typeof Uint8ClampedArray;
    WeakMap: WeakMapConstructor;
    WeakSet: WeakSetConstructor;
    decodeURI: typeof decodeURI;
    decodeURIComponent: typeof decodeURIComponent;
    encodeURI: typeof encodeURI;
    encodeURIComponent: typeof encodeURIComponent;
    eval: typeof eval;
    /**
     * @deprecated
     */
    escape: (str: string) => string;
    global: typeof globalThis;
    isFinite: typeof isFinite;
    isNaN: typeof isNaN;
    parseFloat: typeof parseFloat;
    parseInt: typeof parseInt;
    undefined: typeof undefined;
    /**
     * @deprecated
     */
    unescape: (str: string) => string;
    gc: () => void;
    v8debug?: unknown;
    _captureEventListenerCount: {
        [eventType: string]: number;
    };
    private _setTimeout;
    private _clearTimeout;
    private _setInterval;
    private _clearInterval;
    private _queueMicrotask;
    /**
     * Constructor.
     *
     * @param [options] Options.
     * @param [options.width] Window width. Defaults to "1024".
     * @param [options.height] Window height. Defaults to "768".
     * @param [options.innerWidth] Inner width. Deprecated. Defaults to "1024".
     * @param [options.innerHeight] Inner height. Deprecated. Defaults to "768".
     * @param [options.url] URL.
     * @param [options.settings] Settings.
     */
    constructor(options?: IHappyDOMOptions);
    /**
     * The number of pixels that the document is currently scrolled horizontally
     *
     * @returns number
     */
    get scrollX(): number;
    /**
     * The read-only Window property pageXOffset is an alias for scrollX.
     *
     * @returns number
     */
    get pageXOffset(): number;
    /**
     * The number of pixels that the document is currently scrolled vertically
     *
     * @returns number
     */
    get scrollY(): number;
    /**
     * The read-only Window property pageYOffset is an alias for scrollY.
     *
     * @returns number
     */
    get pageYOffset(): number;
    /**
     * The CSS interface holds useful CSS-related methods.
     *
     * @returns CSS interface.
     */
    get CSS(): CSS;
    /**
     * Returns an object containing the values of all CSS properties of an element.
     *
     * @param element Element.
     * @returns CSS style declaration.
     */
    getComputedStyle(element: IElement): CSSStyleDeclaration;
    /**
     * Returns selection.
     *
     * @returns Selection.
     */
    getSelection(): Selection;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scroll(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y?: number): void;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scrollTo(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y?: number): void;
    /**
     * Returns a new MediaQueryList object that can then be used to determine if the document matches the media query string.
     *
     * @param mediaQueryString A string specifying the media query to parse into a MediaQueryList.
     * @returns A new MediaQueryList.
     */
    matchMedia(mediaQueryString: string): MediaQueryList;
    /**
     * Sets a timer which executes a function once the timer expires.
     *
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @param args Arguments passed to the callback function.
     * @returns Timeout ID.
     */
    setTimeout(callback: Function, delay?: number, ...args: unknown[]): NodeJS.Timeout;
    /**
     * Cancels a timeout previously established by calling setTimeout().
     *
     * @param id ID of the timeout.
     */
    clearTimeout(id: NodeJS.Timeout): void;
    /**
     * Calls a function with a fixed time delay between each call.
     *
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @param args Arguments passed to the callback function.
     * @returns Interval ID.
     */
    setInterval(callback: Function, delay?: number, ...args: unknown[]): NodeJS.Timeout;
    /**
     * Cancels a timed repeating action which was previously established by a call to setInterval().
     *
     * @param id ID of the interval.
     */
    clearInterval(id: NodeJS.Timeout): void;
    /**
     * Mock animation frames with timeouts.
     *
     * @param callback Callback.
     * @returns ID.
     */
    requestAnimationFrame(callback: (timestamp: number) => void): NodeJS.Immediate;
    /**
     * Mock animation frames with timeouts.
     *
     * @param id ID.
     */
    cancelAnimationFrame(id: NodeJS.Immediate): void;
    /**
     * Queues a microtask to be executed at a safe time prior to control returning to the browser's event loop.
     *
     * @param callback Function to be executed.
     */
    queueMicrotask(callback: Function): void;
    /**
     * This method provides an easy, logical way to fetch resources asynchronously across the network.
     *
     * @param url URL.
     * @param [init] Init.
     * @returns Promise.
     */
    fetch(url: RequestInfo, init?: IRequestInit): Promise<IResponse>;
    /**
     * Creates a Base64-encoded ASCII string from a binary string (i.e., a string in which each character in the string is treated as a byte of binary data).
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/btoa
     * @param data Binay data.
     * @returns Base64-encoded string.
     */
    btoa(data: unknown): string;
    /**
     * Decodes a string of data which has been encoded using Base64 encoding.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/atob
     * @see https://infra.spec.whatwg.org/#forgiving-base64-encode.
     * @see Https://html.spec.whatwg.org/multipage/webappapis.html#btoa.
     * @param data Binay string.
     * @returns An ASCII string containing decoded data from encodedData.
     */
    atob(data: unknown): string;
    /**
     * Safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.
     *
     * @param message Message.
     * @param [targetOrigin=*] Target origin.
     * @param _transfer Transfer. Not implemented.
     */
    postMessage(message: unknown, targetOrigin?: string, _transfer?: unknown[]): void;
    /**
     * Setup of VM context.
     */
    protected _setupVMContext(): void;
}
//# sourceMappingURL=Window.d.ts.map