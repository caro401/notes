---
title: Column constraints impose constraints on values in a column
pubDate: 2023-10-26
lastUpdated: 2023-10-26
id: 20231026171097-column-constraints-impose-constraints-on-values-in-a-column
---

Defined in the database [[A database schema defines the tables and columns in a database|schema]] like [[Table constraints impose restrictions on values in tables|table constraints]], but just for a specific column. [[SQLite is a DBMS|sqlite]] has 4 possible ones, `CHECK`, `DEFAULT`, `NOT NULL` and `UNIQUE`.

Use `DEFAULT CURRENT_TIMESTAMP` to set the value of a column to now if nothing else is supplied.

You provide your own logical expressions to `CHECK`, for example make sure a column never gets a zero value like `CHECK("amount" != 0)` where your column is called `amount`, or `CHECK("type" IN ('enter', 'exit', 'deposit'))` to represent something like a string enum.

Setting a column as a primary key usually implies both `UNIQUE` and `NOT NULL` on that column. Setting a column as a [[A foreign key is a column in a table linked to a column in a different table|foreign key]] implies `NOT NULL`.

When you try to insert rows into a table with constraints, the insert will fail if the constraints are violated.

## Sources

- [sqlite docs about column constraints](https://www.sqlite.org/lang_createtable.html#the_primary_key)
