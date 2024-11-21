import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlightSiteGraph from "./vendor/starlight-site-graph";
import starlight from "@astrojs/starlight";
import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.caro.fyi/",
  trailingSlash: "never",
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
        {
          tag: "script",
          attrs: {
            src: "https://cdn.jsdelivr.net/npm/abcjs/dist/abcjs-basic-min.js",
          },
        },
        {
          tag: "script",
          attrs: {
            type: "module",
            src: "https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.5.0/lite-youtube.js",
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
          copyFrontmatter: "all",
          tableOfContentsOverview: "title",
        }),
        starlightLinksValidator({ errorOnRelativeLinks: false }),
      ],

      sidebar: [obsidianSidebarGroup],
    }),
  ],
});
