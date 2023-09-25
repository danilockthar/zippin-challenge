// vite.config.ts
import { defineConfig } from "file:///C:/Users/danil/projects/zippin/node_modules/.pnpm/vite@4.4.9_@types+node@20.6.1/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/danil/projects/zippin/node_modules/.pnpm/@vitejs+plugin-react@4.0.4_vite@4.4.9/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\danil\\projects\\zippin";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src/"),
      components: `${path.resolve(__vite_injected_original_dirname, "./src/components/")}`,
      services: `${path.resolve(__vite_injected_original_dirname, "./src/services/")}`,
      lib: `${path.resolve(__vite_injected_original_dirname, "./src/lib/")}`
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYW5pbFxcXFxwcm9qZWN0c1xcXFx6aXBwaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRhbmlsXFxcXHByb2plY3RzXFxcXHppcHBpblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZGFuaWwvcHJvamVjdHMvemlwcGluL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICByZXNvbHZlOntcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL1wiKSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvY29tcG9uZW50cy9cIil9YCxcbiAgICAgICAgICAgIHNlcnZpY2VzOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3NlcnZpY2VzL1wiKX1gLFxuICAgICAgICAgICAgbGliOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2xpYi9cIil9YCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVzdDoge1xuICAgICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgICAgICBzZXR1cEZpbGVzOiBcIi4vc3JjL3Rlc3RzL3NldHVwLnRzXCIsXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVE7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNILEtBQUssS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxNQUNyQyxZQUFZLEdBQUcsS0FBSyxRQUFRLGtDQUFXLG1CQUFtQixDQUFDO0FBQUEsTUFDM0QsVUFBVSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUIsQ0FBQztBQUFBLE1BQ3ZELEtBQUssR0FBRyxLQUFLLFFBQVEsa0NBQVcsWUFBWSxDQUFDO0FBQUEsSUFDakQ7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDRixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsRUFDaEI7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
