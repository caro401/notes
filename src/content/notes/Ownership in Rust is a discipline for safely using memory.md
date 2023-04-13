---
title: Ownership in Rust is a discipline for safely using memory
pubDate: 2023-04-13 15:22
updatedDate: 2023-04-13 16:07
id: 20230413150471-ownership-in-rust-is-a-discipline-for-safely-using-memory
---

Ownership is how the Rust compiler thinks about memory, and is a key feature of Rust that helps with safety and avoiding whole classes of ways your programs can go wrong, such as use after free and the like.

Rust variables (usually) live in frames in the stack (occasionally the compiler puts them in registers instead). A frame is a mapping from variables to values within a single scope, such as a function. Frames are organized into a stack of currently-called-functions. After a function returns, Rust deallocates (aka "frees") the function's frame. Because this is a stack, the most recent frame added is always the next frame freed. When an expression reads a variable, the variable's value is copied from its slot in the stack frame.

Copying data can take a lot of memory. To transfer access to data without copying it, Rust uses a pointers - a value that describes a location in memory. 

One common way to make a pointer is to allocate memory in the heap. The heap is a separate region of memory where data can live indefinitely, not tied to a specific stack frame. Rust provides a construct called [`Box`](https://doc.rust-lang.org/std/boxed/index.html) for putting data on the heap.

```rust
let a = Box::new([0; 1_000_000]);  // a is a pointer to somewhere on the heap
let b = a; // b is a copy of the pointer, not the pointed-to data
```

Rust doesn't let you do manual allocation and deallocation of memory. This is useful, because you will probably mess it up and cause memory leaks or accessing bad memory. Rust handles knowing when to free a `Box`'s  heap memory, roughly by knowing if a variable is bound to a box, then when Rust deallocates the variable's frame, it deallocates the box's heap memory. More correctly (to handle when more than one variable is bound to a box like above), if a variable owns a box, when Rust deallocates the variable's frame, then Rust deallocates the box's heap memory. In the example above, `b` owns the boxed array. Therefore when the scope ends, Rust deallocates the box only once on behalf of `b`, not `a`.

```rust
let a = Box::new([0; 1_000_000]);  // at this point, a "owns" the box
let b = a; // this statement "moves" ownership of the box from a to b
```

Box-like things are used by Rust's collection data structures like `Vec`, `String` and `HashMap` to hold a variable number of elements.

Variables can't be used after being moved. Look at this example:
```rust
// This won't compile!

fn main() {
    let first = String::from("Ferris");
    let full = add_suffix(first);
    println!("{full}, originally {first}"); // first is now used here
}

fn add_suffix(mut name: String) -> String {
    name.push_str(" Jr.");  // after this, first points to deallocated memory
    // this isn't a problem until we try to use first again
    name
}
```

You can use `.clone()` to avoid moves, but this is no longer just a copy of the pointer, rather the whole data structure, so beware if it is big. 

Or you can use "borrowing". See this example:

```rust
fn main() {
    let m1 = String::from("Hello");
    let m2 = String::from("world");
    greet(&m1, &m2);  // &m1 uses the ampersand operator to create a reference to (or "borrow") m1
    let s = format!("{} {}", m1, m2);
}

fn greet(g1: &String, g2: &String) { // note that your function now takes &String types, say this "reference to a String"
    println!("{} {}!", g1, g2);
    // g1 is a pointer to m1, not an owner of it, so no data is deallocated here
}
```
## Sources

- [The Rust Book chapter 4.1](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html). This has some interactive examples too!