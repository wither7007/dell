import SVGGraphicsElement from './SVGGraphicsElement.cjs';
import SVGRect from './SVGRect.cjs';
import SVGPoint from './SVGPoint.cjs';
import SVGLength from './SVGLength.cjs';
import SVGAngle from './SVGAngle.cjs';
import SVGNumber from './SVGNumber.cjs';
import SVGTransform from './SVGTransform.cjs';
import SVGAnimatedRect from './SVGAnimatedRect.cjs';
import ISVGSVGElement from './ISVGSVGElement.cjs';
import INode from '../node/INode.cjs';
import Event from '../../event/Event.cjs';
/**
 * SVGSVGElement.
 */
export default class SVGSVGElement extends SVGGraphicsElement implements ISVGSVGElement {
    onafterprint: (event: Event) => void | null;
    onbeforeprint: (event: Event) => void | null;
    onbeforeunload: (event: Event) => void | null;
    ongamepadconnected: (event: Event) => void | null;
    ongamepaddisconnected: (event: Event) => void | null;
    onhashchange: (event: Event) => void | null;
    onlanguagechange: (event: Event) => void | null;
    onmessage: (event: Event) => void | null;
    onmessageerror: (event: Event) => void | null;
    onoffline: (event: Event) => void | null;
    ononline: (event: Event) => void | null;
    onpagehide: (event: Event) => void | null;
    onpageshow: (event: Event) => void | null;
    onpopstate: (event: Event) => void | null;
    onrejectionhandled: (event: Event) => void | null;
    onstorage: (event: Event) => void | null;
    onunhandledrejection: (event: Event) => void | null;
    onunload: (event: Event) => void | null;
    /**
     * Returns preserveAspectRatio.
     *
     * @returns PreserveAspectRatio.
     */
    get preserveAspectRatio(): string;
    /**
     * Sets preserveAspectRatio.
     *
     * @param preserveAspectRatio PreserveAspectRatio.
     */
    set preserveAspectRatio(preserveAspectRatio: string);
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width(): string;
    /**
     * Sets width.
     *
     * @param width Width.
     */
    set width(width: string);
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height(): string;
    /**
     * Sets height.
     *
     * @param height Height.
     */
    set height(height: string);
    /**
     * Returns x.
     *
     * @returns X.
     */
    get x(): string;
    /**
     * Sets x.
     *
     * @param x X.
     */
    set x(x: string);
    /**
     * Returns y.
     *
     * @returns Y.
     */
    get y(): string;
    /**
     * Sets y.
     *
     * @param y Y.
     */
    set y(y: string);
    /**
     * Returns contentScriptType.
     *
     * @returns ContentScriptType.
     */
    get contentScriptType(): string;
    /**
     * Sets contentScriptType.
     *
     * @param contentScriptType ContentScriptType.
     */
    set contentScriptType(contentScriptType: string);
    /**
     * Returns currentScale.
     *
     * @returns CurrentScale.
     */
    get currentScale(): number;
    /**
     * Sets currentScale.
     *
     * @param currentScale CurrentScale.
     */
    set currentScale(currentScale: number);
    /**
     * Returns viewport.
     *
     * @returns SVG rect.
     */
    get viewport(): SVGRect;
    /**
     * Returns current translate.
     *
     * @returns SVG point.
     */
    get currentTranslate(): SVGPoint;
    /**
     * Returns view box.
     *
     * @returns Viewbox.
     */
    get viewBox(): SVGAnimatedRect;
    /**
     * Pauses animation.
     */
    pauseAnimations(): void;
    /**
     * Unpauses animation.
     */
    unpauseAnimations(): void;
    /**
     * Returns "true" if animation is paused.
     *
     * @returns "true" if animation is paused.
     */
    animationsPaused(): boolean;
    /**
     * Returns the current time in seconds relative to the start time for the current SVG document fragment.
     *
     * @returns Current time.
     */
    getCurrentTime(): number;
    /**
     * Sets current time.
     */
    setCurrentTime(): void;
    /**
     * Returns intersection list.
     *
     * @returns Intersection list.
     */
    getIntersectionList(): INode[];
    /**
     * Returns enclousure list.
     *
     * @returns Enclousure list.
     */
    getEnclosureList(): INode[];
    /**
     * Returns true if the rendered content of the given element intersects the supplied rectangle.
     *
     * @returns Intersection state.
     */
    checkIntersection(): boolean;
    /**
     * Returns true if the rendered content of the given element is entirely contained within the supplied rectangle.
     *
     * @returns Enclousure state.
     */
    checkEnclosure(): boolean;
    /**
     * Unselects any selected objects, including any selections of text strings and type-in bars.
     */
    deselectAll(): void;
    /**
     * Returns a number.
     *
     * @returns Number.
     */
    createSVGNumber(): SVGNumber;
    /**
     * Returns a length.
     *
     * @returns Length.
     */
    createSVGLength(): SVGLength;
    /**
     * Returns a angle.
     *
     * @returns Angle.
     */
    createSVGAngle(): SVGAngle;
    /**
     * Returns a point.
     *
     * @returns Point.
     */
    createSVGPoint(): SVGPoint;
    /**
     * Returns a rect.
     *
     * @returns Rect.
     */
    createSVGRect(): SVGRect;
    /**
     * Returns a transform.
     *
     * @returns Transform.
     */
    createSVGTransform(): SVGTransform;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): ISVGSVGElement;
}
//# sourceMappingURL=SVGSVGElement.d.ts.map