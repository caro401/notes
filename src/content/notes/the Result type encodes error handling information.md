---
title: the Result type encodes error handling information
pubDate: 2023-04-13 12:55
updatedDate: 2023-04-13 13:05
id: 20230413120427-the-result-type-encodes-error-handling-information
---

Lots of Rust functions return `Result`, which is an `Enum` of `Ok` and `Err`. The `Ok` variant indicates the operation was successful, and inside `Ok` is the successfully generated value. The `Err` variant means the operation failed, and `Err` contains information about how or why the operation failed.

An instance of `Result` has an [`expect` method](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect) . Calling `expect()` on a `Result` will make your program crash if it was an `Err`, or give you back the successful value inside the `Ok` so you can use it. This can look like

```rust
use std::io;

fn main() {
    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");  // get the value or panic with this message

    println!("You guessed: {guess}");
}
```

There's also `unwrap()` which does a similar thing, but doesn't let you provide a message to be displayed with the panic. Generally prefer `expect()` in production code, as it will help with debugging.

Another common pattern if you don't want to just crash is using `unwrap_or_else()` (or a bunch of match statments), for example

```rust
use std::fs::File;
use std::io::ErrorKind;

fn main() {
    let greeting_file = File::open("hello.txt").unwrap_or_else(|error| {
        if error.kind() == ErrorKind::NotFound {
            File::create("hello.txt").unwrap_or_else(|error| {
                panic!("Problem creating the file: {:?}", error);
            })
        } else {
            panic!("Problem opening the file: {:?}", error);
        }
    });
}
```

`cargo` will tell you if you forgot to handle a `Result` properly with a compiler warning.



## Sources

- The Rust Book, [chapter 2](https://rust-book.cs.brown.edu/ch02-00-guessing-game-tutorial.html#handling-potential-failure-with-the-result-type)  [and chapter 9.2](https://rust-book.cs.brown.edu/ch09-02-recoverable-errors-with-result.html#alternatives-to-using-match-with-resultt-e)