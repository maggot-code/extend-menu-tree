/*
 * @FilePath: \extend-menu-tree\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-21 23:41:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-22 09:48:13
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const isProduction = command === 'build';

    return {
        base: isProduction ? "/kjmis_zmny/resources/js/test/" : "",
        plugins: [
            vue(),
            legacy({
                targets: ['defaults', 'not ie < 9'],
            }),
        ],
        resolve: {
            extensions: [
                '.mjs',
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
                '.json',
                '.proto',
            ],
            preserveSymlinks: false,
            dedupe: ['vue'],
            alias: {
                '@': '/src',
            }
        },
    }
});