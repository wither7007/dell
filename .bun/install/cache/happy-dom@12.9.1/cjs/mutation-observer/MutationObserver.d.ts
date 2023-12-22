import INode from '../nodes/node/INode.cjs';
import IMutationObserverInit from './IMutationObserverInit.cjs';
import MutationRecord from './MutationRecord.cjs';
/**
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
export default class MutationObserver {
    private callback;
    private target;
    private listener;
    /**
     * Constructor.
     *
     * @param callback Callback.
     */
    constructor(callback: (records: MutationRecord[], observer: MutationObserver) => void);
    /**
     * Starts observing.
     *
     * @param target Target.
     * @param options Options.
     */
    observe(target: INode, options: IMutationObserverInit): void;
    /**
     * Disconnects.
     */
    disconnect(): void;
    /**
     * Takes records.
     */
    takeRecords(): [];
}
//# sourceMappingURL=MutationObserver.d.ts.map