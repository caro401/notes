---
title: Using Obsidian with Astro Starlight
pubDate: 2024-11-05
lastUpdated: 2024-11-05
id: 20241105201184-using-obsidian-with-astro-starlight
---

I like using [Starlight](https://starlight.astro.build/), the documentation starter kit from my favourite static site generator (among other things!) [Astro](https://astro.build/). Thankfully, a bunch of other people do too. There's two main integration points that I use between my Obsidian vault and Starlight.

[`starlight-obsidian`](https://github.com/HiDeoo/starlight-obsidian) grabs the contents of my vault, optionally filters it, and gets it into a place and format that Starlight can work with. It also handles generating the left sidebar, which lists all the note titles. It also handles the occasional bit of weird markup I use, like the mermaid diagram in my note on [[Entity relationship diagrams are used to visualise the schema of data in a database|entity-relationship diagram]]

I don't use [`starlight-site-graph`](https://github.com/fevol/starlight-site-graph) directly, but I do vendor in a chunk of code which originated there. I use it to calculate and display all the backlinks between my notes. I don't use the graph view, because I don't personally find that particularly useful, but I do really value not having to write the markdown-munging code to work out my link graph myself.

Starlight itself handles searching, table of contents, the light and dark theme, and generally making the site look not too terrible. I've had to write very little custom code.
