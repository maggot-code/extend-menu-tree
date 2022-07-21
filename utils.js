/*
 * @FilePath: \extend-menu-tree\utils.js
 * @Author: maggot-code
 * @Date: 2022-07-21 11:08:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 17:45:02
 * @Description: 
 */
import {
    MENU_CELL_CLASS,
    MENU_CELL_OPEN_CLASS,
    MENU_CELL_CLOSE_CLASS,
    MENU_CELL_ACTIVE_CLASS
} from "./context.js";
import { hasClass, addClass, removeClass } from "./dom.js";

export function getCellAll() {
    return document.querySelectorAll(`.${MENU_CELL_CLASS}`);
}

export function setupCellId(id) {
    return `${MENU_CELL_CLASS}-${id}`;
}

export function setupCellActiveClass(dom) {
    if (hasClass(dom, MENU_CELL_ACTIVE_CLASS)) return;

    addClass(dom, MENU_CELL_ACTIVE_CLASS);
}

export function clearCellActiveClass(dom) {
    if (!hasClass(dom, MENU_CELL_ACTIVE_CLASS)) return;

    removeClass(dom, MENU_CELL_ACTIVE_CLASS);
}

export function setupCellOpenClass(dom) {
    if (hasClass(dom, MENU_CELL_OPEN_CLASS)) return;

    if (hasClass(dom, MENU_CELL_CLOSE_CLASS)) {
        removeClass(dom, MENU_CELL_CLOSE_CLASS);
        addClass(dom, MENU_CELL_OPEN_CLASS);
    }
}
export function setupCellCloseClass(dom) {
    if (hasClass(dom, MENU_CELL_CLOSE_CLASS)) return;

    if (hasClass(dom, MENU_CELL_OPEN_CLASS)) {
        removeClass(dom, MENU_CELL_OPEN_CLASS);
        addClass(dom, MENU_CELL_CLOSE_CLASS);
    }
}

export function hasChildren(node) {
    const { children } = node;
    return Array.isArray(children) && children.length > 0;
}

export function hasParentNode(node) {
    return node !== null && node !== undefined && typeof node === "object";
}

export function hasContentAddress(node) {
    const { url } = node;
    return url !== null && url !== undefined && typeof url === "string";
}

export function hasRenderNode(node) {
    const { show } = node;
    return show !== null && show !== undefined && typeof show === "boolean";
}

export function hasDisabledNode(node) {
    const { disabled } = node;
    return disabled !== null && disabled !== undefined && typeof disabled === "boolean";
}

export function searchTree(tree, callBack) {
    let cache = [];
    cache = cache.concat(tree);
    while (cache.length) {
        let temp = cache.shift();
        if (temp.hasChild) {
            cache = cache.concat(temp.children);
        }
        if (callBack(temp)) return temp;
    }
}

export function findTreeNode(tree, callBack, defaultValue = null) {
    const cache = [];
    const findNode = (data) => data.map((node) => {
        const { hasChild, children } = node;
        if (hasChild) findNode(children);
        if (callBack(node)) cache.push(node);
    });
    findNode(tree);
    return cache[0] ?? defaultValue;
}
