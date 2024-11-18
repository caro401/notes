---
title: Get docs while in iex with h
pubDate: 2024-11-14
lastUpdated: 2024-11-14
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

## Sources

- [Elixir Full Course: 10 - Basic Tooling](https://www.youtube.com/watch?v=f3zdDeRxFRk)
