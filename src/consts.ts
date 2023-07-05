// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Caro's Notes";
export const SITE_DESCRIPTION = "Caro is thinking out loud";

import { getPermalinks } from "@flowershow/remark-wiki-link";

const permalinks = (await getPermalinks("src/content/notes")).map((permalink) =>
  permalink.toLowerCase().replaceAll(" ", "-")
);
export const wikiLinkConfig = {
  pathFormat: "obsidian-absolute",
  permalinks,
};
