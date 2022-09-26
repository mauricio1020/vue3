import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import vue from '@vitejs/plugin-vue';
//import inject from '@rollup/plugin-inject';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    compilerOptions: {
        isCustomElement: (tag) => {
            return tag.startsWith('select2') // (return true)
        }
    }

});
