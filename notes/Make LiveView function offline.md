---
title: Make LiveView function offline
pubDate: 2024-11-11
lastUpdated: 2024-11-11
id: 20241111121144-making-liveview-function-offline
---

LiveView works over a websocket, so inherently can't be offline. Combine it with [LiveSvelte](https://github.com/woutdp/live_svelte) for client-side state holding, localstorage or indexedDB to hold that state across reloads, a service worker to sync with the server, and [Yjs](https://github.com/yjs/yjs) for conflict resolution (or in principle any other CRDT solution).

Not sure how best to run yjs in the elixir context - seems from the youtube comments they haven't really solved this yet either.

Not sure how much I should worry about the transition to svelte 5

## Sources

- [This video by Tony Dang](https://www.youtube.com/watch?v=PX9-lq0LL9Q), and the [follow-up one](https://www.youtube.com/watch?v=SWC182dPh2I). I found these via their Elixir Mentor episode

## Related

- [this demo](https://www.youtube.com/watch?v=LBYQ_NLVKCw) also uses live svelte, but for working with canvas rather than offline. [source code](https://github.com/ChristianAlexander/Scribble-Pad)
