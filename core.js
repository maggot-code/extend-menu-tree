/*
 * @FilePath: \extend-menu-tree\core.js
 * @Author: maggot-code
 * @Date: 2022-07-21 13:28:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 17:55:34
 * @Description: 
 */
import {
    hasParentNode,
    hasChildren,
    hasContentAddress,
    hasRenderNode,
    hasDisabledNode,
    getCellAll,
    setupCellId,
    setupCellOpenClass,
    setupCellActiveClass,
    clearCellActiveClass,
} from "./utils.js";

export const transformNode = (parent) => (node, index, tree) => {
    const hasParent = hasParentNode(parent);
    const hasChild = hasChildren(node);
    const hasPage = hasContentAddress(node);
    const hasRender = hasRenderNode(node) ? node.isRender : true;
    const hasDisabled = hasDisabledNode(node) ? node.disabled : false;
    const level = hasParent ? parent.level + 1 : 0;
    const tnode = Object.assign({}, node, {
        hasParent,
        hasChild,
        hasPage,
        hasRender,
        hasDisabled,
        parent,
        level,
    });
    tnode.path = useNodePath(tnode, index, tree);
    tnode.children = hasChild ? setupTree(tnode.children, tnode) : [];
    // console.log(tnode);
    return tnode;
}

export function useNodePath(node, index, tree) {
    const { hasParent, parent, id } = node;
    const value = hasParent ? [...parent.path.value, id] : [id];
    const start = value[0];
    const end = value.at(-1);

    const map = (callBack) => {
        return value.map(callBack);
    }
    const toString = (connect = ",") => value.join(connect);
    const findPrevNode = () => {
        if (!hasParent) return null;

        const { children } = parent;
        return children.at(index - 1);
    };
    const findNextNode = () => {
        if (!hasParent) return null;

        const { children } = parent;
        return children.at(index + 1);
    };

    return {
        index,
        value,
        start,
        end,
        map,
        toString,
        findPrevNode,
        findNextNode,
    }
}

export function setupTree(tree, parent = null) {
    return tree.map(transformNode(parent));
}

export function setupTreeToStruct(tree, options) {
    const [{ level }] = tree;
    const {
        setupContainer,
        setupCell,
        setupCellLabel,
        setupCellChild,
    } = options;
    const structOptions = {
        level,
    };

    return setupContainer(
        structOptions,
        tree.map((node) => {
            const { hasChild, children } = node;
            const label = setupCellLabel(node);
            const child = hasChild ? setupTreeToStruct(children, options) : "";

            return setupCell(
                node,
                label,
                setupCellChild(node, child)
            );
        }).join("")
    ).replace(/\n|\r/g, "");
}

export function setupDefaultOpenCell(node) {
    node.path.map((id) => {
        setupCellOpenClass(document.getElementById(setupCellId(id)));
    });
}
export function setupDefaultActiveNode(node) {
    const { id } = node;
    getCellAll().forEach(clearCellActiveClass);
    setupCellActiveClass(document.getElementById(setupCellId(id)));
}

export function setupActiveNode() { }
