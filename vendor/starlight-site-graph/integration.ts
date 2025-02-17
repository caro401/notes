import fs from "node:fs";

import { addVirtualImports, defineIntegration } from "astro-integration-kit";

import { starlightSiteGraphConfigSchema } from "./config";
import { SiteMapBuilder } from "./sitemap/build";
import { processSitemap } from "./sitemap/process";
import { onlyTrailingSlash } from "./sitemap/util";

import { fileURLToPath } from "node:url";

/**
 * Generates a static sitemap for all md files in the docs directory inside public/sitemap.json,
 * consumed by graph generating code
 */
export default defineIntegration({
  name: "starlight-sitemap-integration",
  optionsSchema: starlightSiteGraphConfigSchema,
  setup({ name, options }) {
    const { sitemapConfig } = options;
    const builder = new SiteMapBuilder(sitemapConfig);
    let outputPath: string;

    return {
      hooks: {
        "astro:config:setup": async (args) => {
          const { config, logger, command } = args;
          outputPath = fileURLToPath(config.outDir);

          if (!options.sitemapConfig.sitemap) {
            logger.info(
              "Retrieving links from Markdown content" +
                (sitemapConfig.pageInclusionRules.length
                  ? ` (with patterns ${sitemapConfig.pageInclusionRules.join(", ")})`
                  : ""),
            );

            if (sitemapConfig.ignoreStarlightLinks) {
              let starlightIgnoredLinks = [
                `!${onlyTrailingSlash(config.base)}`,
              ];

              sitemapConfig.linkInclusionRules.splice(
                -1,
                0,
                ...starlightIgnoredLinks,
              );
              logger.info(
                "Ignoring following Starlight links in sitemap: " +
                  starlightIgnoredLinks.join(", "),
              );
            }

            // Generate sitemap (links, backlinks, tags, nodeStyle) from markdown content
            if (command === "dev" || command === "build") {
              builder.setBasePath(config.base);
              try {
                await fs.promises.access(sitemapConfig.contentRoot);
                await builder.addMDContentFolder(
                  sitemapConfig.contentRoot,
                  sitemapConfig.pageInclusionRules,
                );
                options.sitemapConfig.sitemap = builder.process().toSitemap();
                logger.info("Finished retrieving links from Markdown content");
              } catch (e) {
                logger.error(
                  "Failed to retrieve links from Markdown content, reason: " +
                    e,
                );
                return;
              }
            }
          } else {
            logger.info("Using applied sitemap");
            options.sitemapConfig.sitemap = processSitemap(
              options.sitemapConfig.sitemap,
              options,
            );
          }

          addVirtualImports(args, {
            name,
            imports: {
              "virtual:starlight-site-graph/config": `export default ${JSON.stringify(options)}`,
              "virtual:starlight-site-graph/astro-config": `export default ${JSON.stringify(config)}`,
            },
          });
        },
        "astro:config:done": async (args) => {
          const { injectTypes } = args;

          injectTypes({
            filename: "types.d.ts",
            content: `declare module 'virtual:starlight-site-graph/config' {
							export default ${JSON.stringify(options)};
						}

						declare module 'virtual:starlight-site-graph/astro-config' {
							export default ${JSON.stringify(args.config)};
						}`,
          });
        },
        "astro:build:done": async (args) => {
          const { logger } = args;

          if (!outputPath) {
            logger.warn(
              "Output directory couldn't be determined, graph sitemap will not make use of HTML content.",
            );
          }

          if (!Object.keys(options.sitemapConfig.sitemap!).length) {
            logger.info("Retrieving links from generated HTML content");
            try {
              await fs.promises.access(outputPath);
              options.sitemapConfig.sitemap = (
                await builder.addHTMLContentFolder(
                  outputPath,
                  sitemapConfig.pageInclusionRules,
                )
              )
                .process()
                .toSitemap();
              logger.info(
                "Finished generating sitemap from generated HTML content",
              );
            } catch (e) {
              options.sitemapConfig.sitemap = builder.process().toSitemap();
              logger.error(
                "Failed to retrieve links from generated HTML content, reason: " +
                  e,
              );
            }
          }

          await fs.promises.mkdir(`${outputPath}/sitegraph`, {
            recursive: true,
          });
          await fs.promises.writeFile(
            `${outputPath}/sitegraph/sitemap.json`,
            JSON.stringify(options.sitemapConfig.sitemap, null, 2),
          );
          logger.info("`sitemap.json` created at `dist/sitegraph`");
        },
      },
    };
  },
});
