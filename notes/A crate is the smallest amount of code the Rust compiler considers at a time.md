---
title: A crate is the smallest amount of code the Rust compiler considers at a time
pubDate: 2023-04-13
lastUpdated: 2023-07-06
id: 20230413160416-a-crate-is-the-smallest-amount-of-code-the-rust-compiler-considers-at-a-time
---

Even just a single source file is a crate. Crates can contain modules, and the modules may be defined in other files that get compiled with the crate.

Binary crates are programs you can compile to an executable that you can run, such as a command-line program or a server. These must have a `main` function, which defines what happens when the executable runs.

Library crates don’t have a `main` function, and they don’t compile to an executable. Instead, they define functionality intended to be shared with multiple projects. This is usually what Rust folks mean when they say crate.

A package is a bundle of one or more crates that provides a set of functionality. A package contains a Cargo.toml file that describes how to build those crates. It can contain as many binary crates as you want, but at most one library crate.

Cargo follows a convention that `src/main.rs` is the crate root of a binary crate with the same name as the package. A package can have multiple binary crates by placing files in the `src/bin` directory, each file will be a separate binary crate. Cargo knows that if the package directory contains `src/lib.rs`, the package contains a library crate with the same name as the package, and `src/lib.rs` is its crate root. Cargo passes the crate root files to `rustc` to build the library or binary.

Modules let you organise code within a crate for readability and easy reuse. The code in them is private by default, which means external code can't use it. Define a module with the `mod` keyword followed by the name of the module, then the stuff in the module goes inside `{}`. The `pub` keyword on a module only lets code in its ancestor modules refer to it, not access its inner code. onstruct relative paths that begin in the parent module, rather than the current module or the crate root, by using `super` at the start of the path. This is like starting a filesystem path with the `..` syntax.

If we use `pub` before a struct definition, we make the struct public, but the struct’s fields will still be private. We can make each field public or not on a case-by-case basis.

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

// idiomatic way to bring a function into scope with `use`, bringing in the parent module to make it clear the function isn't local
use crate::front_of_house::hosting;

mod customer {
    pub fn eat_at_restaurant() {
        hosting::add_to_waitlist();
    }
}

// idiomatic way to bring a struct into scope (unless there's 2 items with the same name)
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert(1, 2);
}
```

## Sources

- [The Rust Book chapter 7.1](https://rust-book.cs.brown.edu/ch07-01-packages-and-crates.html) and 7.2
