---
title: Search rust docs quickly from raycast
pubDate: 2023-04-17 10:40
updatedDate: 2023-04-17 10:40
id: 20230417100493-search-rust-docs-quickly-from-raycast
---

I use [Raycast](https://www.raycast.com/) on machines that support it, to act as a quick launcher and script runner. Since starting [[Learning rust]], I'm very often searching for the docs for a particular crate, so I made a "[quicklink](https://www.raycast.com/extensions/quicklinks)" command in Raycast to take me straight to `https://docs.rs/{crate}`. This lets me open Raycast, start typing `rust...` , hit enter, type the name of the crate I want to look up, then hit enter and that docs page opens in my browser of choice (Firefox).

I'm aware that I can get to a similar result via `cargo doc` from an active Rust project, but my fingers are very conditioned to using Raycast, so I want to make the task easy from that route too.
