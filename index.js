/*
 * @FilePath: \extend-menu-tree\index.js
 * @Author: maggot-code
 * @Date: 2022-07-21 00:34:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 14:17:44
 * @Description: 
 */
import { setupTree, setupTreeToStruct } from "./core.js";
import { renderContainer, renderCell, renderCellLabel, renderCellChild } from "./render.js";

// container.innerHTML = setupTreeToStruct(datasource);
export default (menuSource) => {
    const { datasource } = menuSource;

    const tree = setupTree(datasource);
    const struct = setupTreeToStruct(tree, {
        setupContainer: renderContainer,
        setupCell: renderCell,
        setupCellLabel: renderCellLabel,
        setupCellChild: renderCellChild,
    });

    return {
        tree,
        struct,
    }
}
