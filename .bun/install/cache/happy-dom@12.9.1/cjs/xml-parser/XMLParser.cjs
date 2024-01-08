"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VoidElements_js_1 = __importDefault(require("../config/VoidElements.cjs"));
const UnnestableElements_js_1 = __importDefault(require("../config/UnnestableElements.cjs"));
const NamespaceURI_js_1 = __importDefault(require("../config/NamespaceURI.cjs"));
const PlainTextElements_js_1 = __importDefault(require("../config/PlainTextElements.cjs"));
const Entities = __importStar(require("entities"));
/**
 * Markup RegExp.
 *
 * Group 1: Beginning of start tag (e.g. "div" in "<div").
 * Group 2: End tag (e.g. "div" in "</div>").
 * Group 3: Comment with ending "--" (e.g. " Comment 1 " in "<!-- Comment 1 -->").
 * Group 4: Comment without ending "--" (e.g. " Comment 1 " in "<!-- Comment 1 >").
 * Group 5: Exclamation mark comment (e.g. "DOCTYPE html" in "<!DOCTYPE html>").
 * Group 6: Processing instruction (e.g. "xml version="1.0"?" in "<?xml version="1.0"?>").
 * Group 7: End of self closing start tag (e.g. "/>" in "<img/>").
 * Group 8: End of start tag (e.g. ">" in "<div>").
 */
const MARKUP_REGEXP = /<([a-zA-Z0-9-]+)|<\/([a-zA-Z0-9-]+)\s*>|<!--([^-]+)-->|<!--([^>]+)>|<!([^>]+)>|<\?([^>]+)>|(\/>)|(>)/gm;
/**
 * Attribute RegExp.
 *
 * Group 1: Attribute name when the attribute has a value using double apostrophe (e.g. "name" in "<div name="value">").
 * Group 2: Attribute value when the attribute has a value using double apostrophe (e.g. "value" in "<div name="value">").
 * Group 3: Attribute name when the attribute has a value using double apostrophe (e.g. "name" in "<div name="value">").
 * Group 4: Attribute value when the attribute has a value using double apostrophe (e.g. "value" in "<div name="value">").
 * Group 5: Attribute end apostrophe when the attribute has a value using double apostrophe (e.g. '"' in "<div name="value">").
 * Group 6: Attribute name when the attribute has a value using single apostrophe (e.g. "name" in "<div name='value'>").
 * Group 7: Attribute value when the attribute has a value using single apostrophe (e.g. "value" in "<div name='value'>").
 * Group 8: Attribute end apostrophe when the attribute has a value using single apostrophe (e.g. "'" in "<div name='value'>").
 * Group 9: Attribute name when the attribute has no value (e.g. "disabled" in "<div disabled>").
 */
const ATTRIBUTE_REGEXP = /\s*([a-zA-Z0-9-_:.$@?]+) *= *([a-zA-Z0-9-_:.$@?{}/]+)|\s*([a-zA-Z0-9-_:.$@?]+) *= *"([^"]*)("{0,1})|\s*([a-zA-Z0-9-_:.$@?]+) *= *'([^']*)('{0,1})|\s*([a-zA-Z0-9-_:.$@?]+)/gm;
var MarkupReadStateEnum;
(function (MarkupReadStateEnum) {
    MarkupReadStateEnum["startOrEndTag"] = "startOrEndTag";
    MarkupReadStateEnum["insideStartTag"] = "insideStartTag";
    MarkupReadStateEnum["plainTextContent"] = "plainTextContent";
})(MarkupReadStateEnum || (MarkupReadStateEnum = {}));
/**
 * Document type attribute RegExp.
 *
 * Group 1: Attribute value.
 */
const DOCUMENT_TYPE_ATTRIBUTE_REGEXP = /"([^"]+)"/gm;
/**
 * XML parser.
 */
class XMLParser {
    /**
     * Parses XML/HTML and returns a root element.
     *
     * @param document Document.
     * @param xml XML/HTML string.
     * @param [options] Options.
     * @param [options.rootNode] Node to append elements to. Otherwise a new DocumentFragment is created.
     * @param [options.evaluateScripts = false] Set to "true" to enable script execution.
     * @returns Root node.
     */
    static parse(document, xml, options) {
        const root = options && options.rootNode ? options.rootNode : document.createDocumentFragment();
        const stack = [root];
        const markupRegexp = new RegExp(MARKUP_REGEXP, 'gm');
        const { evaluateScripts = false } = options || {};
        const unnestableTagNames = [];
        let currentNode = root;
        let match;
        let plainTextTagName = null;
        let readState = MarkupReadStateEnum.startOrEndTag;
        let startTagIndex = 0;
        let lastIndex = 0;
        if (xml !== null && xml !== undefined) {
            xml = String(xml);
            while ((match = markupRegexp.exec(xml))) {
                switch (readState) {
                    case MarkupReadStateEnum.startOrEndTag:
                        if (match.index !== lastIndex &&
                            (match[1] || match[2] || match[3] || match[4] || match[5] || match[6])) {
                            // Plain text between tags.
                            currentNode.appendChild(document.createTextNode(Entities.decodeHTML(xml.substring(lastIndex, match.index))));
                        }
                        if (match[1]) {
                            // Start tag.
                            const tagName = match[1].toUpperCase();
                            // Some elements are not allowed to be nested (e.g. "<a><a></a></a>" is not allowed.).
                            // Therefore we need to auto-close the tag, so that it become valid (e.g. "<a></a><a></a>").
                            const unnestableTagNameIndex = unnestableTagNames.indexOf(tagName);
                            if (unnestableTagNameIndex !== -1) {
                                unnestableTagNames.splice(unnestableTagNameIndex, 1);
                                while (currentNode !== root) {
                                    if (currentNode.tagName === tagName) {
                                        stack.pop();
                                        currentNode = stack[stack.length - 1] || root;
                                        break;
                                    }
                                    stack.pop();
                                    currentNode = stack[stack.length - 1] || root;
                                }
                            }
                            // NamespaceURI is inherited from the parent element.
                            // It should default to SVG for SVG elements.
                            const namespaceURI = tagName === 'SVG'
                                ? NamespaceURI_js_1.default.svg
                                : currentNode.namespaceURI || NamespaceURI_js_1.default.html;
                            const newElement = document.createElementNS(namespaceURI, tagName);
                            currentNode.appendChild(newElement);
                            currentNode = newElement;
                            stack.push(currentNode);
                            readState = MarkupReadStateEnum.insideStartTag;
                            startTagIndex = markupRegexp.lastIndex;
                        }
                        else if (match[2]) {
                            // End tag.
                            if (match[2].toUpperCase() === currentNode.tagName) {
                                // Some elements are not allowed to be nested (e.g. "<a><a></a></a>" is not allowed.).
                                // Therefore we need to auto-close the tag, so that it become valid (e.g. "<a></a><a></a>").
                                const unnestableTagNameIndex = unnestableTagNames.indexOf(currentNode.tagName);
                                if (unnestableTagNameIndex !== -1) {
                                    unnestableTagNames.splice(unnestableTagNameIndex, 1);
                                }
                                stack.pop();
                                currentNode = stack[stack.length - 1] || root;
                            }
                        }
                        else if (match[3] ||
                            match[4] ||
                            (match[6] && currentNode.namespaceURI === NamespaceURI_js_1.default.html)) {
                            // Comment.
                            let comment;
                            if (match[3]) {
                                comment = match[3];
                            }
                            else if (match[4]) {
                                comment = match[4].endsWith('--') ? match[4].slice(0, -2) : match[4];
                            }
                            else {
                                comment = '?' + match[6];
                            }
                            currentNode.appendChild(document.createComment(Entities.decodeHTML(comment)));
                        }
                        else if (match[5]) {
                            // Exclamation mark comment (usually <!DOCTYPE>).
                            const exclamationComment = Entities.decodeHTML(match[5]);
                            currentNode.appendChild(this.getDocumentTypeNode(document, exclamationComment) ||
                                document.createComment(exclamationComment));
                        }
                        else if (match[6]) {
                            // Processing instruction (not supported by HTML).
                            // TODO: Add support for processing instructions.
                        }
                        else {
                            // Plain text between tags, including the match as it is not a valid start or end tag.
                            currentNode.appendChild(document.createTextNode(Entities.decodeHTML(xml.substring(lastIndex, markupRegexp.lastIndex))));
                        }
                        break;
                    case MarkupReadStateEnum.insideStartTag:
                        // End of start tag
                        if (match[7] || match[8]) {
                            // End of start tag.
                            // Attribute name and value.
                            const attributeString = xml.substring(startTagIndex, match.index);
                            let hasAttributeStringEnded = true;
                            if (!!attributeString) {
                                const attributeRegexp = new RegExp(ATTRIBUTE_REGEXP, 'gm');
                                let attributeMatch;
                                while ((attributeMatch = attributeRegexp.exec(attributeString))) {
                                    if ((attributeMatch[1] && attributeMatch[2]) ||
                                        (attributeMatch[3] && attributeMatch[5] === '"') ||
                                        (attributeMatch[6] && attributeMatch[8] === "'") ||
                                        attributeMatch[9]) {
                                        // Valid attribute name and value.
                                        const name = attributeMatch[1] ||
                                            attributeMatch[3] ||
                                            attributeMatch[6] ||
                                            attributeMatch[9] ||
                                            '';
                                        const rawValue = attributeMatch[2] || attributeMatch[4] || attributeMatch[7] || '';
                                        const value = rawValue ? Entities.decodeHTMLAttribute(rawValue) : '';
                                        const namespaceURI = currentNode.tagName === 'SVG' && name === 'xmlns' ? value : null;
                                        currentNode.setAttributeNS(namespaceURI, name, value);
                                        startTagIndex += attributeMatch[0].length;
                                    }
                                    else if (!attributeMatch[1] &&
                                        ((attributeMatch[3] && !attributeMatch[5]) ||
                                            (attributeMatch[6] && !attributeMatch[8]))) {
                                        // End attribute apostrophe is missing (e.g. "attr='value" or 'attr="value').
                                        hasAttributeStringEnded = false;
                                        break;
                                    }
                                }
                            }
                            // We need to check if the attribute string is read completely.
                            // The attribute string can potentially contain "/>" or ">".
                            if (hasAttributeStringEnded) {
                                // Checks if the tag is a self closing tag (ends with "/>") or void element.
                                // When it is a self closing tag or void element it should be closed immediately.
                                // Self closing tags are not allowed in the HTML namespace, but the parser should still allow it for void elements.
                                // Self closing tags is supported in the SVG namespace.
                                if (VoidElements_js_1.default[currentNode.tagName] ||
                                    (match[7] && currentNode.namespaceURI === NamespaceURI_js_1.default.svg)) {
                                    stack.pop();
                                    currentNode = stack[stack.length - 1] || root;
                                    readState = MarkupReadStateEnum.startOrEndTag;
                                }
                                else {
                                    // Plain text elements such as <script> and <style> should only contain text.
                                    plainTextTagName = PlainTextElements_js_1.default[currentNode.tagName]
                                        ? currentNode.tagName
                                        : null;
                                    readState = !!plainTextTagName
                                        ? MarkupReadStateEnum.plainTextContent
                                        : MarkupReadStateEnum.startOrEndTag;
                                    if (UnnestableElements_js_1.default[currentNode.tagName]) {
                                        unnestableTagNames.push(currentNode.tagName);
                                    }
                                }
                                startTagIndex = markupRegexp.lastIndex;
                            }
                        }
                        break;
                    case MarkupReadStateEnum.plainTextContent:
                        if (match[2] && match[2].toUpperCase() === plainTextTagName) {
                            // End of plain text tag.
                            // Scripts are not allowed to be executed when they are parsed using innerHTML, outerHTML, replaceWith() etc.
                            // However, they are allowed to be executed when document.write() is used.
                            // See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement
                            if (plainTextTagName === 'SCRIPT') {
                                currentNode._evaluateScript = evaluateScripts;
                            }
                            else if (plainTextTagName === 'LINK') {
                                // An assumption that the same rule should be applied for the HTMLLinkElement is made here.
                                currentNode._evaluateCSS = evaluateScripts;
                            }
                            // Plain text elements such as <script> and <style> should only contain text.
                            currentNode.appendChild(document.createTextNode(Entities.decodeHTML(xml.substring(startTagIndex, match.index))));
                            stack.pop();
                            currentNode = stack[stack.length - 1] || root;
                            plainTextTagName = null;
                            readState = MarkupReadStateEnum.startOrEndTag;
                        }
                        break;
                }
                lastIndex = markupRegexp.lastIndex;
            }
            if (lastIndex !== xml.length) {
                // Plain text after tags.
                currentNode.appendChild(document.createTextNode(Entities.decodeHTML(xml.substring(lastIndex))));
            }
        }
        return root;
    }
    /**
     * Returns document type node.
     *
     * @param document Document.
     * @param value Value.
     * @returns Document type node.
     */
    static getDocumentTypeNode(document, value) {
        if (!value.toUpperCase().startsWith('DOCTYPE')) {
            return null;
        }
        const docTypeSplit = value.split(' ');
        if (docTypeSplit.length <= 1) {
            return null;
        }
        const docTypeString = docTypeSplit.slice(1).join(' ');
        const attributes = [];
        const attributeRegExp = new RegExp(DOCUMENT_TYPE_ATTRIBUTE_REGEXP, 'gm');
        const isPublic = docTypeString.toUpperCase().includes('PUBLIC');
        let attributeMatch;
        while ((attributeMatch = attributeRegExp.exec(docTypeString))) {
            attributes.push(attributeMatch[1]);
        }
        const publicId = isPublic ? attributes[0] || '' : '';
        const systemId = isPublic ? attributes[1] || '' : attributes[0] || '';
        return document.implementation.createDocumentType(docTypeSplit[1].toLowerCase(), publicId, systemId);
    }
}
exports.default = XMLParser;
//# sourceMappingURL=XMLParser.cjs.map