---
title: Use Rustup to install Rust
pubDate: 2023-04-13 12:12
updatedDate: 2023-04-13 12:31
id: 20230413120458-Use-Rustup
---

[Here's the official docs on installing Rust](https://www.rust-lang.org/tools/install), in which they recommend `rustup` as the default. `rustup` is somewhat equivalent to `pyenv` or `nvm` in that it allows you to install and use several versions of the whole toolchain. Unlike those other tools, it is the main recommended way to install Rust and associated tools, endorsed and managed by the Rust project itself.

Rust comes with standardised tools for doing linting (clippy) and formatting (rustfmt)

As well as the toolchain, `rustup` gives you a local, offline-accessible version of the standard library docs, accessible via `rustup doc`.
