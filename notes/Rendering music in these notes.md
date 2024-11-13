---
title: Rendering music in these notes
pubDate: 2024-11-13
lastUpdated: 2024-11-13
id: 20241113101126-rendering-music-in-these-notes
---

Bit of a hacky manual solution, but seems to be working well enough for now, in Obsidian when I'm writing and in the published version of my notes.

The standard for writing folk music is [abc notation](https://abcnotation.com/wiki/abc:standard:v2.1). There's a javascript solution for rendering music in abc notation called [abcjs](https://paulrosen.github.io/abcjs/), which works client-side.

I need to tell Starlight to load `abcjs`, currently on all pages, by adding that script to the [head](https://starlight.astro.build/reference/configuration/#head) in `astro.config.js`. This means I have access to `abcjs` in client-side scripts on all pages, called `ABCJS`.

Then, on a page where I want to render music, add a script that calls `ABCJS.renderAbc`. Give that 3 arguments

- the ID of an empty `div` somewhere on the page, where the music will be rendered to
- the text of the tune in `abc`. Only include the required metadata and things you want to render.
- `{responsive: 'resize'}` to make the rendered music fit on the page at whatever width it ends up at. There's a bunch more configuration I could do here.

```html
<div id="tune"></div>

<script>
  ABCJS.renderAbc(
    "tune",
    `X:1
T:C i G, Grind Hans Jässpodspolska
M:3/4
L:1/8
K:G
D2 G2 A>B | (3c2 (B2 G2) E2- | E2 cB A>G | (FG) (AF) D2- | D2 G2 A>B | (3c2 (B2 G2) E2- |
E2 (cB) A>G | FE/F/ G4 :: G>(B dc) B>A | (Gc) (ed) c>B | A>(B c/d/)c/A/ B>G |
(FG) (AF) D2- | D2 (dc) B>A | (Gc) (ed) c>B | A>(B c/d/)c/A/ B>G | FE/F/ G4 :|`,
    { responsive: "resize" },
  );
</script>
```

Just in case rendering doesn't work, also put the abc text in a code block. Starlight helpfully makes this really easy to copy.

```abc
X:1
T:C i G, Grind Hans Jässpodspolska
S:Efter Falu Spelmanslag
D:I Stöten, Tongång AWCD-18
F:http://www.folkwiki.se/Musik/1193
Z:Karen Myers (#1585)
Z:Upptecknad 7/2008
M:3/4
L:1/8
R:Polska
O:Rättvik, Dalarna
K:G
D2 G2 A>B | (3c2 (B2 G2) E2- | E2 cB A>G | (FG) (AF) D2- | D2 G2 A>B | (3c2 (B2 G2) E2- |
E2 (cB) A>G | FE/F/ G4 :: G>(B dc) B>A | (Gc) (ed) c>B | A>(B c/d/)c/A/ B>G |
(FG) (AF) D2- | D2 (dc) B>A | (Gc) (ed) c>B | A>(B c/d/)c/A/ B>G | FE/F/ G4 :|
```

I've made a template in Obsidian to insert this structure (empty abc code block, empty div with ID, script with options configured) so I don't have to remember how to do it every time. Obsidian ignores the script tags, but does have a plugin [`obsidian-plugin-abcjs`](https://github.com/abcjs-music/obsidian-plugin-abcjs) which renders abc codeblocks (using abcjs under the hood of course!).

I don't use any of the MIDI capabilities of abcjs, mostly because a lot of the things I intend to write down are Swedish tunes, which aren't transcribed much like they are played. I much prefer to link out to or embed a recording of an actual human playing the tune, so I can get a truer understanding of the groove of these tunes.

If you know of a better way to achieve any of this, please [let me know](mailto:hi@caro.fyi).
