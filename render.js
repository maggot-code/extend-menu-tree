/*
 * @FilePath: \extend-menu-tree\render.js
 * @Author: maggot-code
 * @Date: 2022-07-21 11:04:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 15:54:29
 * @Description: 
 */
import {
    MENU_CONTAINER_CLASS,
    MENU_CELL_CLASS,
    MENU_CELL_LABEL_CLASS,
    MENU_CELL_CHILD_CLASS,
    MENU_CELL_OPEN_CLASS,
    MENU_CELL_CLOSE_CLASS,
    MENU_CELL_ACTIVE_CLASS,
} from "./context.js";

export function setupContainerClassName(options) {
    const { level } = options;
    return `menu-container-level-${level}`;
}
export function setupCellClassName(node) {
    const { level } = node;
    return `menu-cell-level-${level}`;
}

export function renderContainer(options, struct) {
    const className = setupContainerClassName(options);
    return (
        `<ul class="${MENU_CONTAINER_CLASS} ${className}">${struct}</ul>`
    );
}

export function renderCell(node, label, child) {
    const { id, level, hasChild } = node;
    const className = setupCellClassName(node);
    return (
        `<li
            class="${MENU_CELL_CLASS} ${MENU_CELL_CLOSE_CLASS} ${className}"
            id="${MENU_CELL_CLASS}-${id}"
            data-level="${level}"
            data-has-child="${hasChild}"
        >
            ${label}
            ${child}
        </li>`
    );
}

export function renderCellLabel(node) {
    const { title } = node;

    return (
        `<div class="${MENU_CELL_LABEL_CLASS}">
            <span class="menu-label-content">${title}</span>
        </div>`
    );
}

export function renderCellChild(struct) {
    return (
        `<div class="${MENU_CELL_CHILD_CLASS}">${struct}</div>`
    );
}
