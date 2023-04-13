---
title: Use cargo by convention
pubDate: 2023-04-13 12:32
updatedDate: 2023-04-13 13:31
id: 20230413120482-use-cargo-by-convention
---

On small projects, it might not seem like using `cargo` has any advantage over just using `rustc`, but it is useful to have the same workflow and tooling for all your Rust projects. This makes it really easy to know how to manage dependencies, run the linter and formatter, build and run your project.

I try to manange all my other projects in other languages using a [`justfile`](https://just.systems/man/en/) so I don't have to remember whether I used `pip` or `poetry`, `npm` or `yarn` or even what language(s) I used, I always have a command `just dev` to run a dev server. Having this built into the language is really nice!

`cargo` also provides the `cargo doc` command, to build HTML docs of your code and its dependencies. 

## Sources

- [The Rust Book, chapter 1.3](https://rust-book.cs.brown.edu/ch01-03-hello-cargo.html#cargo-as-convention)
- [The Cargo Book command reference](https://doc.rust-lang.org/cargo/commands/cargo-doc.html)