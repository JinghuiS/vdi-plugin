import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  resolve: {},
  plugins: [vue()],
  build: {
    target: "es2015",
    lib: {
      entry: "index.ts",
      name: "vdi",
      fileName: (format) => `vdi.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["@wendellhu/redi", "vdi"],
    },
    minify: "esbuild",
  },
});
