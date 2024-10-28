import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlightSiteGraph from "starlight-site-graph";
import starlight from "@astrojs/starlight";
import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";
import rehypeLinkProcessor from "rehype-link-processor";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.caro.fyi/",

  integrations: [
    tailwind(),
    starlight({
      title: "Caro is thinking out loud",
      social: {
        github: "https://github.com/caro401",
        mastodon: "https://fosstodon.org/@carofyi",
      },
      pagination: false,
      customCss: [
        "./src/styles/global.css",
        "@fontsource-variable/newsreader",
        "@fontsource-variable/newsreader/wght-italic.css",
        "@fontsource/fira-mono/400.css",
      ],
      expressiveCode: { themes: ["catppuccin-frappe", "catppuccin-latte"] },
      plugins: [
        starlightSiteGraph({
          backlinksConfig: { glob: ["**/*"] },
          trackVisitedPages: "disable",
        }),
        starlightObsidian({
          vault: "./notes",
          autoLinkHeadings: true,
          tableOfContentsOverview: "title",
        }),
      ],

      sidebar: [obsidianSidebarGroup],
    }),
  ],
  build: { format: "file" },
  markdown: {
    rehypePlugins: [rehypeLinkProcessor()],
  },
});
