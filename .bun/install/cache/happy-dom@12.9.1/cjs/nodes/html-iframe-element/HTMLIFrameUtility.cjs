"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URL_js_1 = __importDefault(require("../../url/URL.cjs"));
const Event_js_1 = __importDefault(require("../../event/Event.cjs"));
const ErrorEvent_js_1 = __importDefault(require("../../event/events/ErrorEvent.cjs"));
const IFrameCrossOriginWindow_js_1 = __importDefault(require("./IFrameCrossOriginWindow.cjs"));
/**
 * HTML Iframe Utility.
 */
class HTMLIFrameUtility {
    /**
     * Loads an iframe page.
     *
     * @param element
     */
    static async loadPage(element) {
        if (element.isConnected &&
            !element.ownerDocument.defaultView.happyDOM.settings.disableIframePageLoading) {
            const src = element.src;
            if (src) {
                // To avoid circular dependency, we use a reference to the window class instead of importing it.
                const contentWindow = new element.ownerDocument['_windowClass']({
                    url: new URL_js_1.default(src, element.ownerDocument.defaultView.location.href).href,
                    settings: {
                        ...element.ownerDocument.defaultView.happyDOM.settings
                    }
                });
                contentWindow.parent = element.ownerDocument.defaultView;
                contentWindow.top = element.ownerDocument.defaultView;
                if (src === 'about:blank') {
                    element._contentWindow = contentWindow;
                    return;
                }
                if (src.startsWith('javascript:')) {
                    element._contentWindow = contentWindow;
                    element._contentWindow.eval(src.replace('javascript:', ''));
                    return;
                }
                const originURL = element.ownerDocument.defaultView.location;
                const targetURL = new URL_js_1.default(src, originURL);
                const isCORS = (originURL.hostname !== targetURL.hostname &&
                    !originURL.hostname.endsWith(targetURL.hostname)) ||
                    originURL.protocol !== targetURL.protocol;
                let responseText;
                element._contentWindow = null;
                try {
                    const response = await element.ownerDocument.defaultView.fetch(src);
                    responseText = await response.text();
                }
                catch (error) {
                    element.dispatchEvent(new ErrorEvent_js_1.default('error', {
                        message: error.message,
                        error
                    }));
                    element.ownerDocument.defaultView.dispatchEvent(new ErrorEvent_js_1.default('error', {
                        message: error.message,
                        error
                    }));
                    element.ownerDocument.defaultView.console.error(error);
                    return;
                }
                element._contentWindow = isCORS
                    ? new IFrameCrossOriginWindow_js_1.default(element.ownerDocument.defaultView, contentWindow)
                    : contentWindow;
                contentWindow.document.write(responseText);
                element.dispatchEvent(new Event_js_1.default('load'));
            }
        }
    }
}
exports.default = HTMLIFrameUtility;
//# sourceMappingURL=HTMLIFrameUtility.cjs.map