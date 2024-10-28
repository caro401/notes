---
title: ORDER BY sorts query results
pubDate: 2023-10-10 16:42
updatedDate: 2023-10-10T16:48
id: 20231010161065-order-by-sorts-query-results
---

`ORDER BY` sorts the rows returned from a `SELECT` according to the values in the specified column(s). By default, the order is ascending (small numbers, letter A first). For example, `SELECT "title", "rating" FROM "longlist" ORDER BY "rating" LIMIT 10;` gives the 10 worst-rated books in our data set. For the highest rated, use `SELECT "title", "rating" FROM "longlist" ORDER BY "rating" DESC LIMIT 10;`.

You can `ORDER BY` more than one column, like `ORDER BY "rating" DESC, "votes" DESC` to sort first by rating number (highest first), then within any ties by the number of votes (highest first).

If you use `ORDER BY` with text fields, pay attention to the collation your table uses, as this can affect what alphabetical order is.
