---
title: Get docs while in iex with h
pubDate: 2024-11-14
lastUpdated: 2024-12-20
id: 20241114121141-get-docs-while-in-iex-with-h
---

When you're in `iex` (the Elixir repl), you can ask for documentation like

```shellsession
iex > h HelloWorld
```

where `HelloWorld` is a module in your project with some module doc.

Ask what functions are exported from a module like

```shellsession
iex > exports(HelloWorld)
```

There's a whole bunch of other [`iex` helpers](https://dev.to/abreujp/advanced-iex-helpers-mastering-commands-and-features-in-elixir-4ecc) too.

## Sources

- [Elixir Full Course: 10 - Basic Tooling](https://www.youtube.com/watch?v=f3zdDeRxFRk)
