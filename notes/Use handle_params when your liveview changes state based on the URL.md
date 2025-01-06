---
title: Use handle_params when your liveview changes state based on the URL
pubDate: 2024-12-29
lastUpdated: 2025-01-06
id: 20241229171269-use-handle_params-when-your-liveview-changes-state-based-on-the-url
---

[This little article](https://dev.to/herminiotorres/when-to-use-the-handleparams-callback-4n12) really helped me get my head around what goes in `handle_params` and what goes in `mount` in LiveView.

> The **[handle_params/3](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html#c:handle_params/3)** callback helps use the state in the URL to drive the presentation of your LiveView. This is nice because you can share the URL with anyone and see the same LiveView state. **handle_params** is invoked after **mount** or during a live navigation event.

This is useful for things like searching and filtering. Assign the relevant values here rather than in the `mount` function, so you don't have to calculate them twice..

> To trigger `handle_params/3`, [push_patch/2](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html#push_patch/2) can be used server-side, while [live_patch/2](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.Helpers.html#live_patch/2) will trigger `handle_param/3` through a client-side interaction.

## Sources

- [this article on when to use handle_params](https://dev.to/herminiotorres/when-to-use-the-handleparams-callback-4n12)
