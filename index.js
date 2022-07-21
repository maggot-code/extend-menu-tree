/*
 * @FilePath: \extend-menu-tree\index.js
 * @Author: maggot-code
 * @Date: 2022-07-21 00:34:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 17:42:52
 * @Description: 
 */
import { setupTree, setupTreeToStruct, setupDefaultOpenCell, setupDefaultActiveNode } from "./core.js";
import { renderContainer, renderCell, renderCellLabel, renderCellChild } from "./render.js";
import { installEvent, uninstallEvent } from "./event.js";
import {
    findTreeNode,
} from "./utils.js";

export default (menuSource) => {
    const { datasource } = menuSource;
    const tree = setupTree(datasource);
    const struct = setupTreeToStruct(tree, {
        setupContainer: renderContainer,
        setupCell: renderCell,
        setupCellLabel: renderCellLabel,
        setupCellChild: renderCellChild,
    });

    function onMounted(app) {
        app.innerHTML = struct;

        const firstNode = findTreeNode(tree, (node) => node.hasPage, {})
        setupDefaultOpenCell(firstNode);
        setupDefaultActiveNode(firstNode);
        installEvent(app);
    }

    function onUnmounted(app) {
        uninstallEvent(app);
    }

    return {
        tree,
        struct,
        onMounted,
        onUnmounted,
    }
}
