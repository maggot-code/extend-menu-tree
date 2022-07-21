<!--
 * @FilePath: /extend-menu-tree/src/MenuTree.vue
 * @Author: maggot-code
 * @Date: 2022-07-22 01:19:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-22 01:41:57
 * @Description: 
-->
<script setup>
import { computed } from 'vue';
import MenuContainer from './MenuContainer.vue';
const props = defineProps({
    tree: {
        type: Array,
        default: () => []
    }
});
console.log(props.tree);
const treeRef = computed(() => {
    return props.tree;
});
</script>

<template>
    <div class="menu-tree">
        <template v-for="(node, index) in treeRef">
            <MenuContainer :key="node.id" :node="node" :index="index"></MenuContainer>
        </template>
    </div>
</template>

<style scoped>
</style>
