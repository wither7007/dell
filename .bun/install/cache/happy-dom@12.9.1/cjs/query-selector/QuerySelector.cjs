"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NodeList_js_1 = __importDefault(require("../nodes/node/NodeList.cjs"));
const NodeTypeEnum_js_1 = __importDefault(require("../nodes/node/NodeTypeEnum.cjs"));
const SelectorCombinatorEnum_js_1 = __importDefault(require("./SelectorCombinatorEnum.cjs"));
const SelectorParser_js_1 = __importDefault(require("./SelectorParser.cjs"));
/**
 * Utility for query selection in an HTML element.
 *
 * @class QuerySelector
 */
class QuerySelector {
    /**
     * Finds elements based on a query selector.
     *
     * @param node Node to search in.
     * @param selector Selector.
     * @returns HTML elements.
     */
    static querySelectorAll(node, selector) {
        if (selector === '') {
            throw new Error("Failed to execute 'querySelectorAll' on 'Element': The provided selector is empty.");
        }
        if (selector === null || selector === undefined) {
            return new NodeList_js_1.default();
        }
        const groups = SelectorParser_js_1.default.getSelectorGroups(selector);
        let matches = [];
        for (const items of groups) {
            matches = matches.concat(node.nodeType === NodeTypeEnum_js_1.default.elementNode
                ? this.findAll(node, [node], items)
                : this.findAll(null, node._children, items));
        }
        const nodeList = new NodeList_js_1.default();
        const matchesMap = {};
        for (let i = 0, max = matches.length; i < max; i++) {
            matchesMap[matches[i].documentPosition] = matches[i].element;
        }
        const keys = Object.keys(matchesMap).sort();
        for (let i = 0, max = keys.length; i < max; i++) {
            nodeList.push(matchesMap[keys[i]]);
        }
        return nodeList;
    }
    /**
     * Finds an element based on a query selector.
     *
     * @param node Node to search in.
     * @param selector Selector.
     * @returns HTML element.
     */
    static querySelector(node, selector) {
        if (selector === '') {
            throw new Error("Failed to execute 'querySelector' on 'Element': The provided selector is empty.");
        }
        if (selector === null || selector === undefined) {
            return null;
        }
        for (const items of SelectorParser_js_1.default.getSelectorGroups(selector)) {
            const match = node.nodeType === NodeTypeEnum_js_1.default.elementNode
                ? this.findFirst(node, [node], items)
                : this.findFirst(null, node._children, items);
            if (match) {
                return match;
            }
        }
        return null;
    }
    /**
     * Checks if an element matches a selector and returns priority weight.
     *
     * @param element Element to match.
     * @param selector Selector to match with.
     * @returns Result.
     */
    static match(element, selector) {
        if (selector === '*') {
            return {
                priorityWeight: 1
            };
        }
        for (const items of SelectorParser_js_1.default.getSelectorGroups(selector)) {
            const result = this.matchSelector(element, element, items.reverse());
            if (result) {
                return result;
            }
        }
        return null;
    }
    /**
     * Checks if a node matches a selector.
     *
     * @param targetElement Target element.
     * @param currentElement Current element.
     * @param selectorItems Selector items.
     * @param [priorityWeight] Priority weight.
     * @returns Result.
     */
    static matchSelector(targetElement, currentElement, selectorItems, priorityWeight = 0) {
        const selectorItem = selectorItems[0];
        const result = selectorItem.match(currentElement);
        if (result) {
            if (selectorItems.length === 1) {
                return {
                    priorityWeight: priorityWeight + result.priorityWeight
                };
            }
            switch (selectorItem.combinator) {
                case SelectorCombinatorEnum_js_1.default.adjacentSibling:
                    if (currentElement.previousElementSibling) {
                        const match = this.matchSelector(targetElement, currentElement.previousElementSibling, selectorItems.slice(1), priorityWeight + result.priorityWeight);
                        if (match) {
                            return match;
                        }
                    }
                    break;
                case SelectorCombinatorEnum_js_1.default.child:
                case SelectorCombinatorEnum_js_1.default.descendant:
                    if (currentElement.parentElement) {
                        const match = this.matchSelector(targetElement, currentElement.parentElement, selectorItems.slice(1), priorityWeight + result.priorityWeight);
                        if (match) {
                            return match;
                        }
                    }
                    break;
            }
        }
        if (selectorItem.combinator === SelectorCombinatorEnum_js_1.default.descendant &&
            targetElement !== currentElement &&
            currentElement.parentElement) {
            return this.matchSelector(targetElement, currentElement.parentElement, selectorItems, priorityWeight);
        }
        return null;
    }
    /**
     * Finds elements based on a query selector for a part of a list of selectors separated with comma.
     *
     * @param rootElement Root element.
     * @param children Child elements.
     * @param selectorItems Selector items.
     * @param [documentPosition] Document position of the element.
     * @returns Document position and element map.
     */
    static findAll(rootElement, children, selectorItems, documentPosition) {
        const selectorItem = selectorItems[0];
        const nextSelectorItem = selectorItems[1];
        let matched = [];
        for (let i = 0, max = children.length; i < max; i++) {
            const child = children[i];
            const position = (documentPosition ? documentPosition + '>' : '') + String.fromCharCode(i);
            if (selectorItem.match(child)) {
                if (!nextSelectorItem) {
                    if (rootElement !== child) {
                        matched.push({
                            documentPosition: position,
                            element: child
                        });
                    }
                }
                else {
                    switch (nextSelectorItem.combinator) {
                        case SelectorCombinatorEnum_js_1.default.adjacentSibling:
                            if (child.nextElementSibling) {
                                matched = matched.concat(this.findAll(rootElement, [child.nextElementSibling], selectorItems.slice(1), position));
                            }
                            break;
                        case SelectorCombinatorEnum_js_1.default.descendant:
                        case SelectorCombinatorEnum_js_1.default.child:
                            matched = matched.concat(this.findAll(rootElement, child._children, selectorItems.slice(1), position));
                            break;
                    }
                }
            }
            if (selectorItem.combinator === SelectorCombinatorEnum_js_1.default.descendant &&
                child._children.length) {
                matched = matched.concat(this.findAll(rootElement, child._children, selectorItems, position));
            }
        }
        return matched;
    }
    /**
     * Finds an element based on a query selector for a part of a list of selectors separated with comma.
     *
     * @param rootElement Root element.
     * @param children Child elements.
     * @param selectorItems Selector items.
     * @returns HTML element.
     */
    static findFirst(rootElement, children, selectorItems) {
        const selectorItem = selectorItems[0];
        const nextSelectorItem = selectorItems[1];
        for (const child of children) {
            if (selectorItem.match(child)) {
                if (!nextSelectorItem) {
                    if (rootElement !== child) {
                        return child;
                    }
                }
                else {
                    switch (nextSelectorItem.combinator) {
                        case SelectorCombinatorEnum_js_1.default.adjacentSibling:
                            if (child.nextElementSibling) {
                                const match = this.findFirst(rootElement, [child.nextElementSibling], selectorItems.slice(1));
                                if (match) {
                                    return match;
                                }
                            }
                            break;
                        case SelectorCombinatorEnum_js_1.default.descendant:
                        case SelectorCombinatorEnum_js_1.default.child:
                            const match = this.findFirst(rootElement, child._children, selectorItems.slice(1));
                            if (match) {
                                return match;
                            }
                            break;
                    }
                }
            }
            if (selectorItem.combinator === SelectorCombinatorEnum_js_1.default.descendant &&
                child._children.length) {
                const match = this.findFirst(rootElement, child._children, selectorItems);
                if (match) {
                    return match;
                }
            }
        }
        return null;
    }
}
exports.default = QuerySelector;
//# sourceMappingURL=QuerySelector.cjs.map