/*
 * @FilePath: \extend-menu-tree\event.js
 * @Author: maggot-code
 * @Date: 2022-07-21 14:53:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 15:44:26
 * @Description: 
 */
import {
    MENU_CONTAINER_CLASS,
    MENU_CELL_CLASS,
    MENU_CELL_LABEL_CLASS,
    MENU_CELL_OPEN_CLASS,
    MENU_CELL_CLOSE_CLASS,
    MENU_CELL_ACTIVE_CLASS,
} from "./context.js";

const containerEvent = {
    click: () => console.log('容器点击')
};
const cellEvent = {
    click: () => console.log('单元格点击')
};
const cellLabelEvent = {
    click: () => console.log('标题点击')
};

function setupClickEvent(event) {
    const { target } = event;
    const { className } = target;
    console.log(className);
}
function setupMouseoverEvent() { }
function setupMouseoutEvent() { }

export function installEvent(app) {
    app.addEventListener("click", setupClickEvent);
    // app.addEventListener("mouseover", setupMouseoverEvent);
    // app.addEventListener("mouseout", setupMouseoutEvent);
}
export function uninstallEvent(app) { }
