---
title: Override the default Tailwind colour palette to prevent design drift
pubDate: 2024-11-14
lastUpdated: 2024-11-14
id: 20241114111188-override-the-default-tailwind-colour-palette-to-prevent-design-drift
---

Tailwind provides a whole bunch of colours by default, including like 6 different scales of grey. Usually when I'm writing code it's not in the context of a proper design system or anything, it's just me slinging CSS. And sometimes I forget which kind of grey or green I picked, and end up with 3 different kinds of grey tone in the same project.

You can [disable default colours in Tailwind](https://tailwindcss.com/docs/customizing-colors#disabling-a-default-color), usually by explicitly picking which ones of the default colours you include. This looks like:

```js title="tailwind.config.js"
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      // always keep these!
      transparent: "transparent",
      current: "currentColor",
      // you probably want these
      black: colors.black,
      white: colors.white,
      // now define the colours you want in your application
      grey: colors.stone, // pick your grey scale
      green: colors.emerald, // probably for success states etc
      red: colors.rose, // probably for error states
      brand: colors.sky, // the accent colour you're using
    },
  },
  // ...
};
```

The Tailwind folks [don't recommend you renaming their things](https://tailwindcss.com/docs/customizing-colors#naming-your-colors), but I find it fits into my workflow a bit easier, especially when I'm working across a bunch of projects with similar structure. It doesn't matter what my grey or brand colour actually is, I just need to remember the class is called `text-grey-800` or whatever, in all my contexts where I've set up my Tailwind config file like this.
