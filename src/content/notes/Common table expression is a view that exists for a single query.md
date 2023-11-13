---
title: Common table expression is a view that exists for a single query
pubDate: 2023-11-13 16:02
updatedDate: 2023-11-13 16:02
id: 20231113161193-common-table-expression-is-a-view-that-exists-for-a-single-query
aliases:
  - CTE
  - Common table expression
---

Here's an example

```sql
WITH "average_book_ratings" AS (
    SELECT "book_id", "title", "year", ROUND(AVG("rating"), 2) AS "rating" FROM "ratings"
    JOIN "books" ON "ratings"."book_id" = "books"."id"
    GROUP BY "book_id"
)
SELECT "year" ROUND(AVG("rating"), 2) AS "rating" FROM "average_book_ratings"
GROUP BY "year";
```

this first bit in the `WITH` is the CTE defining a view called `average_book_ratings`, which you then query like any other table or view. Once the query has been run, that thing disappears.
