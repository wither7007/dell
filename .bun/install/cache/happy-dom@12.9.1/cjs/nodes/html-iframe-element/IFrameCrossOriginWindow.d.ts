import EventTarget from '../../event/EventTarget.cjs';
import IWindow from '../../window/IWindow.cjs';
import Location from '../../location/Location.cjs';
/**
 * Browser window with limited access due to CORS restrictions in iframes.
 */
export default class IFrameCrossOriginWindow extends EventTarget {
    readonly self: this;
    readonly window: this;
    readonly parent: IWindow;
    readonly top: IWindow;
    readonly location: Location;
    private _targetWindow;
    /**
     * Constructor.
     *
     * @param parent Parent window.
     * @param target Target window.
     */
    constructor(parent: IWindow, target: IWindow);
    /**
     * Safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.
     *
     * @param message Message.
     * @param [targetOrigin=*] Target origin.
     * @param transfer Transfer. Not implemented.
     */
    postMessage(message: unknown, targetOrigin?: string, transfer?: unknown[]): void;
}
//# sourceMappingURL=IFrameCrossOriginWindow.d.ts.map