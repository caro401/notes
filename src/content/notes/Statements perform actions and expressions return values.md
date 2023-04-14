---
title: Statements perform actions, expressions return values
pubDate: 2023-04-13 14:47
updatedDate: 2023-04-13 15:29
id: 20230413140467-statements-perform-actions,-expressions-return-values
---

In Rust, function definitions and variable declarations are statements. You can't bind a statement to a variable, because it doesn't return anything. Calling functions or macros, or making scope blocks are expressions.

Expressions do not include ending semicolons. If you add a semicolon to the end of an expression, you turn it into a statement, and it will then not return a value. This will probably bite you at some point.

```rust
// this doesn't compile!

fn main() {
    let x = plus_one(5);

    println!("The value of x is: {x}");
}

fn plus_one(x: i32) -> i32 {
    x + 1;  // this has a semicolon so is a statement
}

// cargo is sad, but helpfully reminds you that you probably didn't want to include that semicolon
```

Function bodies are made up of a series of statements optionally ending in an expression. The last expression is implicitly returned, although you can return early using the `return` keyword.

`if` is an expression, so you can use it in a `let` statement like this, kind of like a ternary operator.

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };
    // note that both of these ^^         ^^ must be the same type
    println!("The value of number is: {number}");
    //                                   5
}
```

## Sources

- The Rust Book [chapter 3.3](https://rust-book.cs.brown.edu/ch03-03-how-functions-work.html#statements-and-expressions) and [chapter 3.5](https://rust-book.cs.brown.edu/ch03-05-control-flow.html#if-expressions)
