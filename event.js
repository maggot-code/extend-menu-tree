/*
 * @FilePath: \extend-menu-tree\event.js
 * @Author: maggot-code
 * @Date: 2022-07-21 14:53:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 17:58:16
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
import { on, off } from "./dom.js";

export function setupClickEvent(event) {
    console.log(event);
}

export function installEvent(app) {
    on(app, "click", setupClickEvent);
    // on(app, "mouseover",)
    // on(app, "mouseout",)
}
export function uninstallEvent(app) { }
