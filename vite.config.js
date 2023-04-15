import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import scss from "rollup-plugin-scss";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({ remarkPlugins: [remarkMdxFrontmatter] }),
    },

    react(),
  ],
});
