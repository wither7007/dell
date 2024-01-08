"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLElement_js_1 = __importDefault(require("../nodes/html-element/HTMLElement.cjs"));
const HTMLTemplateElement_js_1 = __importDefault(require("../nodes/html-template-element/HTMLTemplateElement.cjs"));
const HTMLFormElement_js_1 = __importDefault(require("../nodes/html-form-element/HTMLFormElement.cjs"));
const HTMLInputElement_js_1 = __importDefault(require("../nodes/html-input-element/HTMLInputElement.cjs"));
const HTMLTextAreaElement_js_1 = __importDefault(require("../nodes/html-text-area-element/HTMLTextAreaElement.cjs"));
const SVGSVGElement_js_1 = __importDefault(require("../nodes/svg-element/SVGSVGElement.cjs"));
const SVGElement_js_1 = __importDefault(require("../nodes/svg-element/SVGElement.cjs"));
const HTMLScriptElement_js_1 = __importDefault(require("../nodes/html-script-element/HTMLScriptElement.cjs"));
const HTMLImageElement_js_1 = __importDefault(require("../nodes/html-image-element/HTMLImageElement.cjs"));
const HTMLLinkElement_js_1 = __importDefault(require("../nodes/html-link-element/HTMLLinkElement.cjs"));
const HTMLStyleElement_js_1 = __importDefault(require("../nodes/html-style-element/HTMLStyleElement.cjs"));
const HTMLLabelElement_js_1 = __importDefault(require("../nodes/html-label-element/HTMLLabelElement.cjs"));
const HTMLSlotElement_js_1 = __importDefault(require("../nodes/html-slot-element/HTMLSlotElement.cjs"));
const HTMLMetaElement_js_1 = __importDefault(require("../nodes/html-meta-element/HTMLMetaElement.cjs"));
const HTMLBaseElement_js_1 = __importDefault(require("../nodes/html-base-element/HTMLBaseElement.cjs"));
const HTMLSelectElement_js_1 = __importDefault(require("../nodes/html-select-element/HTMLSelectElement.cjs"));
const HTMLOptionElement_js_1 = __importDefault(require("../nodes/html-option-element/HTMLOptionElement.cjs"));
const HTMLOptGroupElement_js_1 = __importDefault(require("../nodes/html-opt-group-element/HTMLOptGroupElement.cjs"));
const HTMLDialogElement_js_1 = __importDefault(require("../nodes/html-dialog-element/HTMLDialogElement.cjs"));
const HTMLButtonElement_js_1 = __importDefault(require("../nodes/html-button-element/HTMLButtonElement.cjs"));
const HTMLAudioElement_js_1 = __importDefault(require("../nodes/html-audio-element/HTMLAudioElement.cjs"));
const HTMLVideoElement_js_1 = __importDefault(require("../nodes/html-video-element/HTMLVideoElement.cjs"));
const HTMLAnchorElement_js_1 = __importDefault(require("../nodes/html-anchor-element/HTMLAnchorElement.cjs"));
const HTMLIFrameElement_js_1 = __importDefault(require("../nodes/html-iframe-element/HTMLIFrameElement.cjs"));
exports.default = {
    A: HTMLAnchorElement_js_1.default,
    ABBR: HTMLElement_js_1.default,
    ADDRESS: HTMLElement_js_1.default,
    AREA: HTMLElement_js_1.default,
    ARTICLE: HTMLElement_js_1.default,
    ASIDE: HTMLElement_js_1.default,
    AUDIO: HTMLAudioElement_js_1.default,
    B: HTMLElement_js_1.default,
    BASE: HTMLBaseElement_js_1.default,
    BDI: HTMLElement_js_1.default,
    BDO: HTMLElement_js_1.default,
    BLOCKQUAOTE: HTMLElement_js_1.default,
    BODY: HTMLElement_js_1.default,
    TEMPLATE: HTMLTemplateElement_js_1.default,
    FORM: HTMLFormElement_js_1.default,
    INPUT: HTMLInputElement_js_1.default,
    TEXTAREA: HTMLTextAreaElement_js_1.default,
    SCRIPT: HTMLScriptElement_js_1.default,
    IMG: HTMLImageElement_js_1.default,
    LINK: HTMLLinkElement_js_1.default,
    STYLE: HTMLStyleElement_js_1.default,
    LABEL: HTMLLabelElement_js_1.default,
    SLOT: HTMLSlotElement_js_1.default,
    SVG: SVGSVGElement_js_1.default,
    G: SVGElement_js_1.default,
    CIRCLE: SVGElement_js_1.default,
    ELLIPSE: SVGElement_js_1.default,
    LINE: SVGElement_js_1.default,
    PATH: SVGElement_js_1.default,
    POLYGON: SVGElement_js_1.default,
    POLYLINE: SVGElement_js_1.default,
    RECT: SVGElement_js_1.default,
    STOP: SVGElement_js_1.default,
    USE: SVGElement_js_1.default,
    META: HTMLMetaElement_js_1.default,
    BLOCKQUOTE: HTMLElement_js_1.default,
    BR: HTMLElement_js_1.default,
    BUTTON: HTMLButtonElement_js_1.default,
    CANVAS: HTMLElement_js_1.default,
    CAPTION: HTMLElement_js_1.default,
    CITE: HTMLElement_js_1.default,
    CODE: HTMLElement_js_1.default,
    COL: HTMLElement_js_1.default,
    COLGROUP: HTMLElement_js_1.default,
    DATA: HTMLElement_js_1.default,
    DATALIST: HTMLElement_js_1.default,
    DD: HTMLElement_js_1.default,
    DEL: HTMLElement_js_1.default,
    DETAILS: HTMLElement_js_1.default,
    DFN: HTMLElement_js_1.default,
    DIALOG: HTMLDialogElement_js_1.default,
    DIV: HTMLElement_js_1.default,
    DL: HTMLElement_js_1.default,
    DT: HTMLElement_js_1.default,
    EM: HTMLElement_js_1.default,
    EMBED: HTMLElement_js_1.default,
    FIELDSET: HTMLElement_js_1.default,
    FIGCAPTION: HTMLElement_js_1.default,
    FIGURE: HTMLElement_js_1.default,
    FOOTER: HTMLElement_js_1.default,
    H1: HTMLElement_js_1.default,
    H2: HTMLElement_js_1.default,
    H3: HTMLElement_js_1.default,
    H4: HTMLElement_js_1.default,
    H5: HTMLElement_js_1.default,
    H6: HTMLElement_js_1.default,
    HEAD: HTMLElement_js_1.default,
    HEADER: HTMLElement_js_1.default,
    HGROUP: HTMLElement_js_1.default,
    HR: HTMLElement_js_1.default,
    HTML: HTMLElement_js_1.default,
    I: HTMLElement_js_1.default,
    IFRAME: HTMLIFrameElement_js_1.default,
    INS: HTMLElement_js_1.default,
    KBD: HTMLElement_js_1.default,
    LEGEND: HTMLElement_js_1.default,
    LI: HTMLElement_js_1.default,
    MAIN: HTMLElement_js_1.default,
    MAP: HTMLElement_js_1.default,
    MARK: HTMLElement_js_1.default,
    MATH: HTMLElement_js_1.default,
    MENU: HTMLElement_js_1.default,
    MENUITEM: HTMLElement_js_1.default,
    METER: HTMLElement_js_1.default,
    NAV: HTMLElement_js_1.default,
    NOSCRIPT: HTMLElement_js_1.default,
    OBJECT: HTMLElement_js_1.default,
    OL: HTMLElement_js_1.default,
    OPTGROUP: HTMLOptGroupElement_js_1.default,
    OPTION: HTMLOptionElement_js_1.default,
    OUTPUT: HTMLElement_js_1.default,
    P: HTMLElement_js_1.default,
    PARAM: HTMLElement_js_1.default,
    PICTURE: HTMLElement_js_1.default,
    PRE: HTMLElement_js_1.default,
    PROGRESS: HTMLElement_js_1.default,
    Q: HTMLElement_js_1.default,
    RB: HTMLElement_js_1.default,
    RP: HTMLElement_js_1.default,
    RT: HTMLElement_js_1.default,
    RTC: HTMLElement_js_1.default,
    RUBY: HTMLElement_js_1.default,
    S: HTMLElement_js_1.default,
    SAMP: HTMLElement_js_1.default,
    SECTION: HTMLElement_js_1.default,
    SELECT: HTMLSelectElement_js_1.default,
    SMALL: HTMLElement_js_1.default,
    SOURCE: HTMLElement_js_1.default,
    SPAN: HTMLElement_js_1.default,
    STRONG: HTMLElement_js_1.default,
    SUB: HTMLElement_js_1.default,
    SUMMARY: HTMLElement_js_1.default,
    SUP: HTMLElement_js_1.default,
    TABLE: HTMLElement_js_1.default,
    TBODY: HTMLElement_js_1.default,
    TD: HTMLElement_js_1.default,
    TFOOT: HTMLElement_js_1.default,
    TH: HTMLElement_js_1.default,
    THEAD: HTMLElement_js_1.default,
    TIME: HTMLElement_js_1.default,
    TITLE: HTMLElement_js_1.default,
    TR: HTMLElement_js_1.default,
    TRACK: HTMLElement_js_1.default,
    U: HTMLElement_js_1.default,
    UL: HTMLElement_js_1.default,
    VAR: HTMLElement_js_1.default,
    VIDEO: HTMLVideoElement_js_1.default,
    WBR: HTMLElement_js_1.default
};
//# sourceMappingURL=ElementTag.cjs.map