/*
 * @FilePath: \extend-menu-tree\core.js
 * @Author: maggot-code
 * @Date: 2022-07-21 13:28:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 14:43:29
 * @Description: 
 */
import { hasParentNode, hasChildren } from "./utils.js";

export const transformNode = (parent) => (node, index, tree) => {
    const hasParent = hasParentNode(parent);
    const hasChild = hasChildren(node);
    const level = hasParent ? parent.level + 1 : 0;
    const tnode = Object.assign({}, node, {
        hasParent,
        hasChild,
        parent,
        level,
    });
    tnode.path = useNodePath(tnode, index, tree);
    tnode.children = hasChild ? setupTree(tnode.children, tnode) : [];
    return tnode;
}

export function useNodePath(node, index, tree) {
    const { hasParent, parent, id } = node;
    const value = hasParent ? [...parent.path.value, id] : [id];
    const start = value[0];
    const end = value.at(-1);

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
        toString,
        findPrevNode,
        findNextNode,
    }
}

export function setupTree(tree, parent = null) {
    return tree.map(transformNode(parent));
}

export function setupTreeToStruct(tree, options) {
    const {
        setupContainer,
        setupCell,
        setupCellLabel,
        setupCellChild,
    } = options;
    const [{ level }] = tree;
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
                setupCellChild(child)
            );
        }).join("")
    ).replace(/\n|\r/g, "");
}
