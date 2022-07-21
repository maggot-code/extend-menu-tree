/*
 * @FilePath: \extend-menu-tree\utils.js
 * @Author: maggot-code
 * @Date: 2022-07-21 11:08:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 15:59:49
 * @Description: 
 */
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
