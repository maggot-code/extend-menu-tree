<!--
 * @FilePath: /extend-menu-tree/src/MenuContainer.vue
 * @Author: maggot-code
 * @Date: 2022-07-22 00:47:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-22 01:34:23
 * @Description: 
-->
<script setup>
import MenuNode from "./MenuNode.vue";
const props = defineProps({
    node: {
        type: Object,
        default: () => ({})
    }
});
console.log(props.node);
</script>

<template>
    <div class="menu-container">
        <h1>menu container</h1>
    </div>
</template>

<style scoped>
</style>
