import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  markdown: {
    remarkPlugins: [
      [
        "remark-wiki-link",
        {
          pageResolver: (name) => [name.replace(/ /g, "-").toLowerCase()],
          hrefTemplate: (permalink) => `/notes/${permalink}`,
          newClassName: "not-created",
        },
      ],
    ],
    rehypePlugins: [["rehype-external-links", { target: "_blank" }]],
  },
  integrations: [sitemap(), tailwind()],
});
