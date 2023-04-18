// @ts-nocheck
// vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    // 此配置是为了在vue中使用jsx
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import { h } from 'vue';",
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  }
});