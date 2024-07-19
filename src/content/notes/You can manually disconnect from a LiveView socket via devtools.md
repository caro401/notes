---
title: You can manually disconnect from a LiveView socket via devtools
pubDate: 2024-07-16 15:06
updatedDate: 2024-07-16 15:06
id: 20240716150765-liveview-socket-devtools
---

Open devtools, in the JavaScript you can type `liveSocket.connect()` or `liveSocket.disconnect()` to play with what happens when you lose and regain connectivity. [Docs](https://hexdocs.pm/phoenix_live_view/js-interop.html#simulating-latency) , [video](https://youtu.be/Icmv09q3tUQ?t=1089) where I spotted someone do it first.