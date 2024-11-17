import react from "@vitejs/plugin-react";
import { defineConfig, UserConfig } from "vite";
import type { InlineConfig } from "vitest/node";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
    environment: "happy-dom",
  },
} as UserConfig & {
  test: InlineConfig;
});
