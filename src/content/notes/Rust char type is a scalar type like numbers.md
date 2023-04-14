---
title: Rust char type is a scalar type like numbers
pubDate: 2023-04-13 14:27
updatedDate: 2023-04-13 15:30
id: 20230413140454-rust-char-type-is-a-scalar-type-like-numbers
---

Along with the various number types (`i32`, `f64`) and `bool`, `char` is a scalar type. You declare one by using single quotes, like `let z: char = 'ℤ';` , as opposed to the double quotes you use for string literals. Remember that a `char` might not line up with your human intuition of what a character/letter is - Rust's `char` is a 4-bit Unicode Scalar Value.

## Sources

- [The Rust Book chapter 3.2](https://rust-book.cs.brown.edu/ch03-02-data-types.html)
