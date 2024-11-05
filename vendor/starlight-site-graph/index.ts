import type { StarlightPlugin } from "@astrojs/starlight/types";
import { validateConfig, type StarlightSiteGraphConfig } from "./config";

import integration from "./integration";
import { ensureTrailingSlash } from "./sitemap/util";

export default function plugin(
  userConfig?: StarlightSiteGraphConfig,
): StarlightPlugin {
  const parsedConfig = validateConfig(userConfig);
  return {
    name: "starlight-sitemap-plugin",
    hooks: {
      setup: async ({ addIntegration, config, command, logger }) => {
        if (command === "preview") return;

        if (parsedConfig.sitemapConfig.ignoreStarlightLinks) {
          let starlightIgnoredLinks = [];
          if (config.credits) {
            starlightIgnoredLinks.push("!https://starlight.astro.build/");
          }

          if (config.editLink?.baseUrl) {
            starlightIgnoredLinks.push(
              `!${ensureTrailingSlash(config.editLink.baseUrl)}**`,
            );
          }

          for (const link of Object.values(config.social ?? {})) {
            starlightIgnoredLinks.push(`!${ensureTrailingSlash(link)}`);
          }

          parsedConfig.sitemapConfig.linkInclusionRules.splice(
            -1,
            0,
            ...starlightIgnoredLinks,
          );
          logger.info(
            "Ignoring following Starlight links in sitemap: " +
              starlightIgnoredLinks.join(", "),
          );
        }

        addIntegration(integration(parsedConfig));
      },
    },
  };
}
