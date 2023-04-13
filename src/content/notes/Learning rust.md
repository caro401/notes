---
title: Learning Rust
pubDate: 2023-04-13 11:57
updatedDate: 2023-04-13 16:51
id: 20230413110483-learning-rust
---

I'm having a go at properly learning [Rust](https://www.rust-lang.org/), following the [book](https://doc.rust-lang.org/book/), or more specifically the [interactive version of the book](https://rust-book.cs.brown.edu/)  to help my brain stay engaged. As usual, I'm pairing 'reading' the book with Firefox's reader mode and MacOS's TTS engine, because reading large chunks of text is hard for me.

My programming background is Python and Clojure, with a sprinkling of other things like JavaScript, TypeScript and Haskell, and this informs what I will probably find hard.

Why Rust and why now? The other day I stumbled across [this Reddit post about ADHD friendly programming languages](https://www.reddit.com/r/ADHD_Programmers/comments/127ujwg/adhd_friendly_programming_languages/), which made me think about what I like in a programming language, and what I've been struggling with lately. Then my partner suggested taking a look at [Leptos](https://github.com/leptos-rs/leptos), a super new and shiny front- and back-end web framework thingy for Rust. [This video walking some features of the newest release](https://youtu.be/AD3FHodVgE8) was such a breath of fresh air compared to a lot of things I've come across recently in the JavaScript world, so I decided to give Rust a go. I have a small web project in mind that I think Leptos would be a good fit for, but I definitely need to understand some fundamentals first!

## Learnings
- [[Use Rustup to install Rust]]
- [[Use cargo by convention]]
- [[Use cargo check to quickly see if your code compiles]]
- [[the Result type encodes error handling information]]
- [[Rust variables are immutable by default]]
- [[Rust char type is a scalar type like numbers]]
- [[Tuples and arrays are the primitive compound data types in rust]]
- [[Statements perform actions, expressions return values]]
- [[Rust has 3 kinds of loops]]
- [[Ownership in Rust is a discipline for safely using memory]]
- [[A Rust string slice is a reference to part of a String]]
- [[Rust structs are like tuples with named data]]
- [[Rust methods are like functions defined in the context of a struct]]
- [[A crate is the smallest amount of code the Rust compiler considers at a time]]