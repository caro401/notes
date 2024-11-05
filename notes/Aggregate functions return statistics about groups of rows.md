---
title: Aggregate functions return statistics about groups of rows
pubDate: 2023-10-10
lastUpdated: 2023-10-23
id: 20231010161058-aggregate-functions-return-statistics-about-groups-of-rows
---

Aggregate functions like `COUNT`, `AVG`, `MIN`, `MAX` and `SUM` allow you to calculate things about groups of rows that you `SELECT`.

- `SELECT AVG("rating") FROM "longlist";` to get the average value in the "rating" column across your whole table. `SELECT ROUND(AVG("rating"), 2) AS "average rating" FROM "longlist";` to round the result to a sensible number of decimal points, and give the column a nice name.
- `SELECT SUM("votes") FROM "longlist";` to get the sum of all values in a column
- `SELECT COUNT(*) FROM "longlist";` to count the number of rows in your table. If you count on a specific column, you get the count of rows not including those that are [[NULL represents missing data|null]], eg `COUNT("translator")` gives you a smaller number than `COUNT(*)`. If you want to count unique values, use `SELECT COUNT(DISTINCT "publisher") FROM "longlist"`.

You can `GROUP BY` the value of a column when calculating aggregate functions, for example

```sql
SELECT "book_id", ROUND(AVG("rating"), 2) AS "average rating"
FROM "ratings"
GROUP BY "book_id"
HAVING "average rating" > 4.0;
```

Use `HAVING` instead of `WHERE` to specify a condition on the group rather than a single row.
