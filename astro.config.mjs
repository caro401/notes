import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlightSiteGraph from "./vendor/starlight-site-graph";
import starlight from "@astrojs/starlight";
import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";

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
      lastUpdated: true,
      customCss: [
        "./src/styles/global.css",
        "@fontsource-variable/newsreader",
        "@fontsource-variable/newsreader/wght-italic.css",
        "@fontsource/fira-mono/400.css",
      ],
      components: {
        PageSidebar: "./src/components/PageSidebar.astro",
        Footer: "./src/components/Footer.astro",
      },
      expressiveCode: { themes: ["catppuccin-frappe", "catppuccin-latte"] },
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://cdn.usefathom.com/script.js",
            "data-site": "GWBRQJFW",
            defer: true,
          },
        },
      ],
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
});
