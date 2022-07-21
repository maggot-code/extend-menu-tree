/*
 * @FilePath: \extend-menu-tree\utils.js
 * @Author: maggot-code
 * @Date: 2022-07-21 11:08:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 13:41:03
 * @Description: 
 */
export function hasChildren(node) {
    const { children } = node;
    return Array.isArray(children) && children.length > 0;
}

export function hasParentNode(node) {
    return node !== null && node !== undefined && typeof node === "object";
}
