---
title: LIMIT limits the number of rows returned
pubDate: 2023-10-10
lastUpdated: 2023-10-10
id: 20231010161005-limit-limits-the-number-of-rows-returned
---

If you don't want data for all your rows, you can use `LIMIT` to only get data for the first x rows. For example, `SELECT "title" FROM "longlist" LIMIT 10;` gets only the first 10 titles. This is useful for having a quick peek at some examples of data you have in a table.

If you don't want the first 10, rather some later 10 rows, you can combine limit with `OFFSET` to skip some rows. This is a pattern you'd often see when writing queries to handle pagination of results. For example, get the next page of 10 rows like `SELECT "title" FROM "longlist" LIMIT 10 OFFSET 10;`.
