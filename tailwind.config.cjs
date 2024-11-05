const defaultTheme = require("tailwindcss/defaultTheme");
import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: colors.lime,
        gray: colors.neutral,
      },
      fontFamily: {
        sans: [
          "Newsreader Variable",
          "Newsreader",
          ...defaultTheme.fontFamily.serif,
        ],
        mono: ["Fira Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), starlightPlugin()],
};
