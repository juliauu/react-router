import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],

  optimizeDeps: {
    include: [
      "@rescui/ui-contexts",
      "@rescui/button",
      "@rescui/card",
      "@rescui/typography",
      "@rescui/tab-list",
      "@jetbrains/kotlin-web-site-ui/out/components/header",
      "@jetbrains/kotlin-web-site-ui/out/components/footer"
    ]
  },

  ssr: {
    noExternal: [
      /^@rescui/,
      /^@jetbrains\//
    ],
  },
});