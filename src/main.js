/*
 * @FilePath: \extend-menu-tree\src\main.js
 * @Author: maggot-code
 * @Date: 2022-07-21 23:41:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-22 09:34:47
 * @Description: 
 */
import Vue from 'vue';
import App from './App.vue';

import "@/assets/style/common.css";

new Vue({
    render: (h) => h(App),
}).$mount('#lnavId')
