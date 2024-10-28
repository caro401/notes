---
title: SQL is a language used to interact with data in a database
pubDate: 2023-10-10 15:52
updatedDate: 2023-10-23T14:02
id: 20231010151097-sql-is-a-language-used-to-interact-with-data-in-a-database
---

SQL or Structured Query Language lets you create, read, update and delete data in a database. You write queries against your database in SQL.

Different [[A DBMS is a way to interact with a database|DBMSs]] have slightly different dialects of SQL, but there's a lot of commonality.

Usually use `""` around your SQL identifiers - table and column names. It isn't always required, but is useful. Use `''` around SQL strings, so it is easy to tell them apart. This is just convention, but it helps. Likewise, use `ALLCAPS` for SQL keywords like `SELECT`, `FROM` and stuff.

- [[SELECT gets data from rows in a table]], [[LIMIT limits the number of rows returned]].
- [[WHERE only returns rows that match a condition]].
- [[NULL represents missing data]].
- [[ORDER BY sorts query results]].
- [[Aggregate functions return statistics about groups of rows]]
- [[a subquery is a SQL query inside another]], [[joins connect tables|JOIN connects tables]]
-
