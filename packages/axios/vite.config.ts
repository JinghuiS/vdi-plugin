import { defineConfig } from "vite";

export default defineConfig({
  resolve: {},
  plugins: [],
  build: {
    target: "es2015",
    lib: {
      entry: "index.ts",
      name: "@vdi-plugin-axios",
      fileName: (format) => `@vdi-plugin-axios.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["@wendellhu/redi", "vdi"],
    },
    minify: "esbuild",
  },
});
