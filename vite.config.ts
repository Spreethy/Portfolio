import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  base: "/Portfolio/",
  plugins: [tanstackStart({ spa: { enabled: true } }), react(), tailwindcss()],
});
