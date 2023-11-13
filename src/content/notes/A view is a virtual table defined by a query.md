---
title: A view is a virtual table defined by a query
pubDate: 2023-11-13T15:43
updatedDate: 2023-11-13T16:41
id: 20231113151111-a-view-is-a-virtual-table-defined-by-a-query
---

There's lots of reasons you might want to do this, including but not limited to:

- make querying across a lot of joined tables simpler
- calculating and querying aggregates over more raw data that you store.
- partitioning the data you have into meaningful logical chunks, for example all the data for a specific year so you can query over a smaller table.

For example

```sql
CREATE VIEW "longlist" AS
SELECT "name", "title" FROM "authors"
JOIN "authored" ON "authors"."id" = "authored"."author_id"
JOIN "books" ON "books"."id" = "authored"."book_id";
```

This will make a table called `longlist` appear in your database schema, and you can query it in the same way as any other table. In this example, it makes it really easy to query for book titles across a many-to-many relation of books to authors, without actually storing duplicate data in the database itself. The query you use to create a view can be anything, you can do all sorts of useful things like sorting, limiting and calculating aggregates.

If you keep all individual ratings for a book in your raw data in your database, you can make a view to show the average rating for a book if that's often useful for you

```sql
CREATE VIEW "average_book_ratings" AS
SELECT "book_id" AS "id", "title", "year", ROUND(AVG("rating"), 2) AS "rating"
FROM "ratings"
JOIN "books" ON "ratings"."book_id" = "books"."id"
GROUP BY "book_id";
```

When new data is added to the underlying table, the average is recalculated when you do another query on your view.

If you don't want a view to remain always in the database, use instead `CREATE TEMPORARY VIEW`. This persists as long as your connection does, and is useful if you're a human data analyst for example making things to make analysis easier for you just this one time, using that views that won't be generally useful in the future. If you want an even shorter-lived view-like thing, use a [[Common table expression is a view that exists for a single query|CTE]]
