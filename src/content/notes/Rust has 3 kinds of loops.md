---
title: Rust has 3 kinds of loops
pubDate: 2023-04-13 15:04
updatedDate: 2023-04-14 17:50
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
    let a = [10, 20, 30, 40, 50];  // this is an array remember

    for element in a {
        println!("the value is: {element}");
    }
}
```

Sure you could do this with a `while`, but you are much more likely to mess up. `for` is probably the most common type of loop.

## `while let` loops also exist

which you might want to use when doing something over a collection that might be a nasty nested match statement otherwise.

```rust
fn main() {
    let mut optional = Some(0);

    // This reads: "while `let` destructures `optional` into
    // `Some(i)`, evaluate the block (`{}`). Else `break`.
    while let Some(i) = optional {
        if i > 9 {
            println!("Greater than 9, quit!");
            optional = None;
        } else {
            println!("`i` is `{:?}`. Try again.", i);
            optional = Some(i + 1);
        }
        // ^ Less rightward drift than match, and doesn't
        // require explicitly handling the failing case.
    }
}
```

Usually you want a for-loop for iterating over a collection, but you'd use this thing instead when the thing you are iterating over needs something async doing to it, for example reading lines from a file where the value needs to be awaited.

```rust
use tokio::fs::File;
use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader, Result as TokioResult};

#[tokio::main]
async fn main() -> TokioResult<()> {
create_file().await?;
let file = File::open("/tmp/test.txt").await?;

// Shadow file here because I don't really care there is a bufreader thingy,
// I just want the file contents
let mut file = BufReader::new(file).lines();

// You have to call lines before your loop so you have an iterator thingy, not a BufReader,
// because the loop needs to access the thing every time it runs and ownership things
while let Some(line) = file.next_line().await? {
println!("{line}");
}

// You can't do this because for is trying to do iterator.next(),
// but Lines (from tokio) isn't an iterator (because it does async things it's a stream)
// for line in file {
// println!("{line}");
// }

Ok(())
// prints hello then world, because that's whats in your file until it runs out of lines
}

async fn create_file() -> tokio::io::Result<()> {
File::create("/tmp/test.txt")
.await?
.write_all(b"hello\nworld")
.await
}
```

## Sources

- [The Rust Book chapter 3.5](https://rust-book.cs.brown.edu/ch03-05-control-flow.html#repetition-with-loops)
- [Rust by example explaining while let](https://doc.rust-lang.org/rust-by-example/flow_control/while_let.html)
