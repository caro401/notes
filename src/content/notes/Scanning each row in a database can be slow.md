---
title: Scanning each row in a database can be slow
pubDate: 2023-11-13T17:10
updatedDate: 2023-11-13T17:13
id: 20231113171119-scanning-each-row-in-a-database-can-be-slow
---

Usually when you do a [[SELECT gets data from rows in a table|select]], you have to look at all the rows in in the table sequentially, to check whether they need to be included in your results set. This is called a full table scan. The execution time is predictable, but probably slower than using an [[An index is a structure to speed up retrieval of rows from a database|index]]

## Sources

- [Wikipedia on full table scans](https://en.wikipedia.org/wiki/Full_table_scan)
