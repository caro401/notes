---
title: WHERE only returns rows that match a condition
pubDate: 2023-10-10 16:20
updatedDate: 2023-10-23T17:17
id: 20231010161044-where-only-returns-rows-that-match-a-condition
---

The `WHERE` keyword lets you filter the rows returned from your query to only those where the specified condition is true. For example, get only rows where the `year` column has the value `2022` like `SELECT "title", "author" FROM "longlist" WHERE "year" = 2022;`.

There's a bunch of operators you can use in the condition

- `=` for equal, like `WHERE "year" = 2022` year is 2022
- `!=` (or `<>`) for not equal, like `WHERE "year" != 2022` year is anything but 2022.
- You could achieve the same with `WHERE NOT "year" = 2022`
- `LIKE` does fuzzy string matching, for example `WHERE "title" like 'The%'` - `%` matches any string of characters, `_` matches a single character. This finds only titles that start with words that start with `The`. `LIKE` is case-insensitive in some DBMSs, but case-sensitive in PostgreSQL - use `ILIKE` for case-insensitive comparison.
- Range operators `<`, `>`, `<=` and `>=` when the data in your column can be compared like that (numbers, dates etc). There's also `BETWEEN ... AND ...` for inclusive range.

You can combine conditions using logical operators.

- `OR` like `WHERE "year" = 2022 or "year" = 2023`
- `AND` like `WHERE "year" = 2022 AND "format" = 'paperback'`
- show precedence using `()`, like `WHERE ("year" = 2022 OR "year" = 2023) AND "format" = 'paperback'`
- `IS` and `IS NOT` are used with [[NULL represents missing data|NULL]] , like `WHERE "translator" IS NULL` to find books with no translator.

Use `HAVING` instead of `WHERE` to specify a condition on the result of a `GROUP BY` rather than a single row.
