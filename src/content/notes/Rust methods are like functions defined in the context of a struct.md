---
title: Rust methods are like functions defined in the context of a struct
pubDate: 2023-04-13 16:34
updatedDate: 2023-04-13 17:00
id: 20230413160491-rust-methods-are-like-functions-defined-in-the-context-of-a-struct
---

(or an enum or a trait object). The first parameter to the function is always `self`, which represents the instance of the struct that the method is called on. Here's an example
```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}


impl Rectangle {
    // here's the method
    fn area(&self) -> u32 {
        //  ^^^^^ this is an alias for self: &Self
        self.width * self.height
    }
    // there could be more things associated with Rectangle here inside this impl block
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()  // call the method with dot notation on the struct instance
    );
}
```

Note that methods can take ownership of `self` (though this is pretty rare), borrow `self` immutably as we’ve done here, or borrow `self` mutably, just as they can any other parameter.

## Sources

- [The Rust Book chapter 5.3](https://rust-book.cs.brown.edu/ch05-03-method-syntax.html)