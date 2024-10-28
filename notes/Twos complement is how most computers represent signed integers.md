---
title: Two's complement is how most computers represent signed integers
pubDate: 2023-04-13 14:10
updatedDate: 2023-04-13 14:20
id: 20230413140464-twos-complement-is-how-most-computers-represent-integers
---

Two's complement is a mathematical operation to reversibly convert a positive binary number into a negative binary number with equivalent negative value, using the most significant bit as the sign to indicate whether the binary number is positive or negative. When the most significant bit of a binary number is 1, the number is signed as negative, else it is positive.

For example, working with 8-bit binary numbers, you can get the representation for -28 as follows. Write 28 in binary `00011100`, invert all the digits `11100011` then add 1 `11100100`. Note that the most significant bit (first/leftmost) changed from `0` to `1`. The procedure for working out what a negative number is the negative of is exactly the same, invert the digits and add 1. This works because maths.

This is how Rust stores integers too.

## Sources

- [Wikipedia page on Two's Complement](https://en.wikipedia.org/wiki/Two%27s_complement)
- [This page with a lot of worked examples](https://www.cs.cornell.edu/~tomf/notes/cps104/twoscomp.html)
