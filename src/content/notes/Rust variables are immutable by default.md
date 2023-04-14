---
title: Rust variables are immutable by default
pubDate: 2023-04-13 13:48
updatedDate: 2023-04-13 14:22
id: 20230413130434-rust-variables-are-immutable-by-default
---

When you declare a variable with `let`, the value can't be changed later. If you try to change the value, the compiler will complain.

If you want a variable to be mutable, you have to declare it with `let mut`, then you can change its value (but not its type).

There are also constants, which you declare like `const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;` . Constants have to be assigned to a constant expression (think the result of some maths or a string), not something that has to be computed at runtime. They have to have an explicit type annotation. You can declare them in any scope

You can "shadow" an immutable variable by declaring another variable with the same name, in the same or a different scope

```rust
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
        // prints 12, then that value goes out of scope
    }

    println!("The value of x is: {x}");
    // prints 6
}
```

Shadowing also allows you to change the type of an already declared variable, like this

```rust
fn main() {
    let spaces = "   ";  // this one is an &str
    let spaces = spaces.len();  // this one is a usize - i'm on a 64-bit machine so this is a 64 bit unsigned integer
}
```

## Sources

- [The Rust Book, chapter 3.1](https://rust-book.cs.brown.edu/ch03-01-variables-and-mutability.html)
- [more about constants](https://doc.rust-lang.org/reference/const_eval.html)
