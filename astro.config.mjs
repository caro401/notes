import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { wikiLinkConfig } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.caro.fyi/",
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: `../../../../../../src/styles/frappe`,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    remarkPlugins: [["@flowershow/remark-wiki-link", wikiLinkConfig]],
    rehypePlugins: [["rehype-external-links", { target: "_blank" }]],
  },
  integrations: [sitemap(), tailwind()],
  build: { format: "file" },
});
