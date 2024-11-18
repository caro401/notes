---
title: Mix hex.info tells you about a package
pubDate: 2024-11-14
lastUpdated: 2024-11-14
id: 20241114111109-mix-hex.info-tells-you-about-a-package
---

Find out about the package called `jason` like this:

```shellsession
❯ mix hex.info jason
A blazing fast JSON parser and generator in pure Elixir.

Config: {:jason, "~> 1.4"}
Releases: 1.5.0-alpha.2, 1.5.0-alpha.1, 1.4.4, 1.4.3, 1.4.2, 1.4.1, 1.4.0, 1.3.0, ...

Licenses: Apache-2.0
Links:
  GitHub: https://github.com/michalmuskala/jason

```

This is super useful because it tells you what to write into the `deps` bit of your `mix.exs` file, in this case add `{:jason, "~> 1.4"}`. It also gives you the useful links, saving you going through a search.

`mix help` tells you all the tasks you have available.

## Sources

- [Elixir Full Course: 10 - Basic Tooling](https://www.youtube.com/watch?v=f3zdDeRxFRk)
