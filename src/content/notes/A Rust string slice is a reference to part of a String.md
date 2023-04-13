---
title: A Rust string slice is a reference to part of a String
pubDate: 2023-04-13 16:15
updatedDate: 2023-04-13 16:59
id: 20230413160406-a-rust-string-slice-is-a-reference-to-part-of-a-string
---

```rust
let s = String::from("hello world");  // a String

let hello: &str = &s[0..5];  // a string slice
let world: &str = &s[6..11];
let s2: &String = &s;  // a normal reference to a whole string

// string literals are also slices
let s_literal = "Hello, world!";  // this guy is a &str

```

Slices are special kinds of references because they are "fat" pointers, or pointers with metadata, which in this case is the length of the slice.

## Sources

- [The Rust Book chapter 4.4](https://rust-book.cs.brown.edu/ch04-04-slices.html#string-slices)