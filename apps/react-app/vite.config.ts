import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@repo/i18n/locales": path.resolve(
        __dirname,
        "../../packages/i18n/src/locales",
      ),
    },
  },
});
