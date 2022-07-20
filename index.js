/*
 * @FilePath: /extend-menu-tree/index.js
 * @Author: maggot-code
 * @Date: 2022-07-21 00:34:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 01:49:27
 * @Description: 
 */
import MenuTree from "./menu-tree.js";

function hasChildren(node) {
    const { children } = node;
    return Array.isArray(children) && children.length > 0;
}

function setupTreeToStruct(tree) {
    return tree.map((node) => {
        node.hasChild = hasChildren(node);
        const nodeChild = node.hasChild ? node.children : [];
        const setupContainer = setupNodeContainer(node);
        console.log(nodeChild);
        return "";
    }).join("");
}
function setupNodeContainer(node) {
    return (struct) => (
        `<div class="menu-container">
            <ul class="menu-cell">${struct}</ul>
        </div>`
    );
}

export default (container) => {
    const { datasource } = MenuTree;

    setupTreeToStruct(datasource);
    // container.innerHTML = setupTreeToStruct(datasource);
}
