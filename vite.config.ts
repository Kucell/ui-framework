import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'MyLib',
      // fileName: (format) => `my-lib.${format}.js`,
      formats:["es","cjs"]
    },
    rollupOptions: {
      input:['packages/components/index.ts'],
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: [
        {
          entryFileNames:`[name]/index.mjs`,
          dir:'lib/es',
          format: "esm",
          preserveModules:true,
          preserveModulesRoot:'components',
          exports:"named",
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        },
        {
          entryFileNames:`[name]/index.cjs`,
          dir:'lib/cjs',
          format: "cjs",
          // preserveModules:true,
          // preserveModulesRoot:'components',
          exports:"named",
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        },
      ]
    }
  },
  plugins: [vue()]
})
