---
title: Use cargo by convention
pubDate: 2023-04-13
lastUpdated: 2023-04-17
id: 20230413120482-use-cargo-by-convention
---

On small projects, it might not seem like using `cargo` has any advantage over just using `rustc`, but it is useful to have the same workflow and tooling for all your Rust projects. This makes it really easy to know how to manage dependencies, run the linter and formatter, build and run your project.

I try to manange all my other projects in other languages using a [`justfile`](https://just.systems/man/en/) so I don't have to remember whether I used `pip` or `poetry`, `npm` or `yarn` or even what language(s) I used, I always have a command `just dev` to run a dev server. Having this built into the language is really nice!

`cargo` also provides the `cargo doc` command, to build HTML docs of your code and its dependencies.

Use `cargo add` to add dependencies, rather than typing them into your `cargo.toml` file. When you add a package like this, cargo installs it and tells you what features are installed and availablt. If you want to add a feature for that crate, use the `-F` flag, like `cargo add tokio -F macros`

## Sources

- [The Rust Book, chapter 1.3](https://rust-book.cs.brown.edu/ch01-03-hello-cargo.html#cargo-as-convention)
- [The Cargo Book command reference](https://doc.rust-lang.org/cargo/commands/cargo-doc.html)
- [Introduction to Axum video](https://www.youtube.com/watch?v=QCktBeTkOjA&list=PLrmY5pVcnuE-_CP7XZ_44HN-mDrLQV4nS&index=6) covers `cargo add` and some tips for finding and assessing packages.
