---
title: elixir atoms are constants where the name is the value
pubDate: 2024-11-21
lastUpdated: 2024-11-21
id: 20241121121125-elixir-atoms-are-constants-where-the-name-is-the-value
---

`:hello` is an atom

You use them as keys in maps often.

They are compared by name (so alphabetically)

Booleans and nil are atoms under the hood/

Atoms aren't garbage collected, so be careful creating them dynamically via eg `String.to_atom()` on user input. There's a fixed number of them.

## Sources

- [Elixir Course 15: Atoms from Elixir Mentor](https://www.youtube.com/watch?v=wrxWxSei2no)
