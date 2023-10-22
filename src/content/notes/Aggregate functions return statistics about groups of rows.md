---
title: Aggregate functions return statistics about groups of rows
pubDate: 2023-10-10 16:49
updatedDate: 2023-10-10T16:57
id: 20231010161058-aggregate-functions-return-statistics-about-groups-of-rows
---

Aggregate functions like `COUNT`, `AVG`, `MIN`, `MAX` and `SUM` allow you to calculate things about groups of rows that you `SELECT`. 

- `SELECT AVG("rating") FROM "longlist";` to get the average value in the "rating" column across your whole table. `SELECT ROUND(AVG("rating"), 2) AS "average rating" FROM "longlist";` to round the result to a sensible number of decimal points, and give the column a nice name.
- `SELECT SUM("votes") FROM "longlist";` to get the sum of all values in a column
- `SELECT COUNT(*) FROM "longlist";` to count the number of rows in your table. If you count on a specific column, you get the count of rows not including those that are [[NULL represents missing data|null]], eg `COUNT("translator")` gives you a smaller number than `COUNT(*)`. If you want to count unique values, use `SELECT COUNT(DISTINCT "publisher") FROM "longlist"`.