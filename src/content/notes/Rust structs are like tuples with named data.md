---
title: Rust structs are like tuples with named data
pubDate: 2023-04-13 16:19
updatedDate: 2023-04-13 16:59
id: 20230413160462-rust-structs-are-like-tuples-with-named-data
---

This is kinda like the tuple-namedtuple or dataclass relation in Python.

Define a `struct` like this
```rust
struct User {
    active: bool,  // these things are called fields
    // for now, you want these to be owned types or you will get confused by lifetimes
    username: String,
    email: String,
    sign_in_count: u64,
}
```

then you can make one like

```rust
fn main() {
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
    // access and change (if mutable instance) fields with . notation
    user1.email = String::from("anotheremail@example.com"); 

	// make another user with mostly the same data as user1 
    let user2 = User {
        email: String::from("another@example.com"),
        ..user1
    };
    // but note that this moves data, so now you can't access user1.username anymore
}
```

There's a shorthand for making structs where some field values come from variables with the same name. This is like making objects in JavaScript.

```rust
fn build_user(email: String, username: String) -> User {
    User {
        email,  // you don't have to write email: email
        username,
        active: true,
        sign_in_count: 1,
    }
}
```


You can also make "tuple structs" which are tuples with names, but not named fields, for example
```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
    // these guys are both different types
}
```

You can put derived traits on structs, like this one that lets you print out a representation of the struct
```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    // note the {:?} to get the Debug output format
    println!("rect1 is {:?}", rect1);
}
```

## Sources

- [The Rust Book chapter 5.1](https://rust-book.cs.brown.edu/ch05-01-defining-structs.html)