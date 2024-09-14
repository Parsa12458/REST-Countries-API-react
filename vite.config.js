import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import legacy from "@vitejs/plugin-legacy";
import autoprefixer from "autoprefixer";
import inject from "@rollup/plugin-inject";
import tailwindcss from "tailwindcss";

export default defineConfig({
  build: {
    outDir: "docs",
  },

  plugins: [
    react(),
    compression(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    inject({
      modules: {
        regeneratorRuntime: "regenerator-runtime/runtime",
      },
    }),
  ],

  // Configure Babel
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },

  // Configure css prefixing
  css: {
    postcss: {
      plugins: [autoprefixer({}), tailwindcss()], // add options if needed
    },
  },

  // Polyfill async functions
  optimizeDeps: {
    include: ["regenerator-runtime/runtime"],
  },
});
