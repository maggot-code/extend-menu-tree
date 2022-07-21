<!--
 * @FilePath: /extend-menu-tree/src/App.vue
 * @Author: maggot-code
 * @Date: 2022-07-21 23:41:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-22 01:19:28
 * @Description: 
-->
<script setup>
import MenuTree from "./MenuTree.vue";
import MenuJson from "@/assets/json/menu-tree";
const { datasource } = MenuJson;
</script>

<template>
    <MenuTree :tree=datasource></MenuTree>
</template>

<style scoped>
</style>
