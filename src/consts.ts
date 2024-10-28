// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Caro's Notes";
export const SITE_DESCRIPTION = "Caro is thinking out loud";
import { readdirSync } from "fs";

export const wikiLinkConfig = {
  aliasDivider: "|",
  hrefTemplate: (permalink) => `/${permalink}`,
  pageResolver: (name) => [name.replace(/ /g, "-").toLowerCase()],
  pathFormat: "obsidian-absolute",
  permalinks: readdirSync("./notes").map((note) =>
    note.toLowerCase().replace(".md", "").replaceAll(" ", "-"),
  ),
};
