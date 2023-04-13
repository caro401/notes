---
title: Rust has 3 kinds of loops
pubDate: 2023-04-13 15:04
updatedDate: 2023-04-13 15:28
id: 20230413150463-rust-has-3-kinds-of-loops
---

## `loop` loops

Loops defined with `loop` run forever until you explicitly tell them to stop with the `break` keyword. If you want to return a value from your loop, add this after the `break` keyword. You might want to use this kind of loop to retry things which might fail, for example waiting for a thread to complete its job.

```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {result}");
    // 20
}
```

If you have lots of nested loops, you can give them labels, and then use these labels to target specific loops with `break` or `continue`.

```rust
fn main() {
    let mut count = 0;
    'counting_up: loop { // label this loop "counting_up"
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;  // break out of this inner loop
            }
            if count == 2 {
                break 'counting_up;  // break out of the "counting_up" loop
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
    // 2
}
```

## `while` loops

Declare loops with `while` to loop if a condition is true, else break out of it. You could do this by hand with `loop`, conditionals and manual breaks, but this syntax is often cleaner

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{number}!");
        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

## `for` loops

Use `for` loops to execute some code for each item in a collection.

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {element}");
    }
}
```

Sure you could do this with a `while`, but you are much more likely to mess up. `for` is probably the most common type of loop. 

## Sources

- [The Rust Book chapter 3.5](https://rust-book.cs.brown.edu/ch03-05-control-flow.html#repetition-with-loops)