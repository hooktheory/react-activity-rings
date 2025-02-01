import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
//import svgr from "vite-plugin-svgr";
//import { nodePolyfills } from "vite-plugin-node-polyfills";
//import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    // A Vite plugin to polyfill Node's Core Modules for browser environments
    // Since browsers do not support Node's Core Modules, packages that use them
    // must be polyfilled to function in browser environments. In an attempt to
    // prevent runtime errors, Vite produces errors or warnings when your code
    // references builtin modules such as fs or path

    //nodePolyfills(),
    react(),
    //svgr(),
  ],
  // See https://vite.dev/guide/build#library-mode
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
    },
    rollupOptions: {
      // Mark peer dependencies as external so they're not bundled
      external: ["react", "react-dom"],
      output: {
        // Provide the global variable names for UMD builds
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },

  // Mimic support for process.env. NODE_DEBUG
  // csvtojson relies on this
  //   define: {
  //     "process.env.NODE_DEBUG": JSON.stringify("false"),
  //   },
  server: {
    port: 3000,
    open: true, //'index-chord-crush.html',
  },
});
