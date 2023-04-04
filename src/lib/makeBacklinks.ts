import { getCollection } from "astro:content";
import { unified } from "unified";
import markdown from "remark-parse";
import wikiLinkPlugin from "@flowershow/remark-wiki-link";
import remarkRehype from "remark-rehype";
import remarkStringify from "remark-stringify";
import { wikiLinkConfig } from "../consts";

type AstNode = {
  type: "paragraph" | "listitem" | "root";
  children: (AstNode | WikiLinkNode)[];
};
type WikiLinkNode = { type: "wikiLink"; data: { permalink: string } };

type Thing = {
  parent: AstNode;
  permalink: string;
};

function extractPermalinks(node: AstNode): Thing[] {
  const output = [];
  if (node.children) {
    for (const child of node.children) {
      if (child.type === "wikiLink") {
        output.push({
          parent: node,
          permalink: child.data.permalink,
          title: child.data.alias || child.data.target,
        });
      } else {
        output.push(...extractPermalinks(child));
      }
    }
  }

  return output;
}

async function makeLinks() {
  const allNotes = await getCollection("notes");
  let processor = unified()
    .use(markdown)
    .use(remarkRehype)
    .use(wikiLinkPlugin, wikiLinkConfig)
    .use(remarkStringify);

  let inLinks = new Map<
    string,
    { title: string; snippet: string; permalink: string }[]
  >();

  for (const notePage of allNotes) {
    for (const link of extractPermalinks(
      await processor.parse(notePage.body)
    )) {
      const links = inLinks.get(link.permalink) || [];
      links.push({
        title: notePage.data.title,
        // TODO make this process to just prose?
        // TODO handle aliases
        snippet: processor
          .stringify(link.parent)
          .replace("[[]]", `[[${link.title}]]`)
          .replace(`[[:${link.title}]]`, `[[${link.title}]]`),
        permalink: notePage.slug,
      });
      inLinks.set(link.permalink.replace("/", ""), links);
    }
  }

  return inLinks;
}

export const allLinks = makeLinks();

export async function get() {
  return {
    body: JSON.stringify(Object.fromEntries(await allLinks)),
  };
}
