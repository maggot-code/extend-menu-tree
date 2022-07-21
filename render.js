/*
 * @FilePath: \extend-menu-tree\render.js
 * @Author: maggot-code
 * @Date: 2022-07-21 11:04:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-21 14:44:45
 * @Description: 
 */
/**
<ul class="menu-container">
    <li class="menu-cell">
        <div class="menu-cell-label">
            <span class="menu-label-before">前缀</span>
            <span class="menu-label-content">卡巴拉生命树</span>
            <span class="menu-label-after">后缀</span>
        </div>
        <div class="menu-cell-child">
            <ul class="menu-container">
                <li class="menu-cell">
                    <div class="menu-cell-label">label</div>
                    <div class="menu-cell-child">child</div>
                </li>
            </ul>
        </div>
    </li>
    <li class="menu-cell">
        <div class="menu-cell-label">
            <span class="menu-label-before">前缀</span>
            <span class="menu-label-content">系统管理</span>
            <span class="menu-label-after">后缀</span>
        </div>
        <div class="menu-cell-child">
            <ul class="menu-container">
                <li class="menu-cell">
                    <div class="menu-cell-label">label</div>
                    <div class="menu-cell-child">child</div>
                </li>
            </ul>
        </div>
    </li>
</ul>
*/
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
        `<ul class="menu-container ${className}">${struct}</ul>`
    );
}

export function renderCell(node, label, child) {
    const { id, level, hasChild } = node;
    const className = setupCellClassName(node);
    return (
        `<li
            class="menu-cell ${className}"
            id="menu-cell-${id}"
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
        `<div class="menu-cell-label">
            <span class="menu-label-content">${title}</span>
        </div>`
    );
}

export function renderCellChild(struct) {
    return (
        `<div class="menu-cell-child">${struct}</div>`
    );
}
