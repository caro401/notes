---
title: joins connect tables
pubDate: 2023-10-23 14:01
updatedDate: 2023-10-23T14:19
id: 20231023141099-joins-connect-tables
---
Use joins when you want to expand the data in one table with data from another table, where you have a matching foreign key column

```sql
SELECT * FROM "sea_lions"
JOIN "migrations" 
ON "migrations"."id" = "sea_lions"."id";
```

Start from the `sea_lions` table, add data from the `migrations` table, matching rows on the values in both `id` columns.

In sqlite, the default join is `INNER JOIN`, get results in the result only if there's an exact match on the ids in both tables.

`LEFT JOIN` prioritises the data in the left (first) table (relative to the `JOIN` keyword), so you get back all rows where there's data in your first table, regardless of whether there's anything matching in the joined table.

`RIGHT JOIN` prioritises the data in the right (second) table, so you get back all rows where there's data in your joined table, regardless of whether there's a matching row in the first table.

`FULL JOIN` gets rows where there's data in either or both of your tables. These are all kinds of 'outer' joins. Missing data is filled in with [[NULL represents missing data|NULL values]]

If the columns you use to match in your joins have the same name, you can use `NATURAL JOIN` to avoid specifying the column name. This query is equivalent to the above, but you don't get a duplicated `id` column in the result set.

```sql
SELECT * FROM "sea_lions"
NATURAL JOIN "migrations";
```