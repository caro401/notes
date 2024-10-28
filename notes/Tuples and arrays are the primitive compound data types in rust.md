---
title: Tuples and arrays are the primitive compound data types in rust
pubDate: 2023-04-13 14:32
updatedDate: 2023-04-13 15:29
id: 20230413140490-tuples-and-arrays-are-the-primitive-compound-data-types-in-rust
---

Tuples are fixed length things that can contain elements of different types. Here's one:

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);  // specifying the types is optional

    let (x, y, z) = tup;  // this is called destructuring
    println!("The value of y is: {y}");
    // 6.4

    // access an element directly using . then the index (0-indexed)
    let five_hundred = tup.0;
}
```

The tuple without any values is called "unit". This value and its corresponding type are both written `()` and represent an empty value or an empty return type. Expressions implicitly return the unit value if they don’t return any other value.

Arrays are also fixed-length, and must contain things of the same type. You define them like this

```rust
let a: [i32; 5] = [1, 2, 3, 4, 5];
//      ^^^^^^ an array of i32 things, 5 things long

let a = [3; 5];  // a shorter way of declaring [3, 3, 3, 3, 3]
```

You can access things in arrays by index like this

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];
}
```

You can get a runtime error if you use a list index out of range, when the index is some value determined at runtime. This protects you from accessing memory that doesn't belong to your program

## Sources

- [The Rust Book chapter 3.2](https://rust-book.cs.brown.edu/ch03-02-data-types.html#compound-types)
