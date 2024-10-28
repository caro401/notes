---
title: a subquery is a SQL query inside another
pubDate: 2023-10-23 13:37
updatedDate: 2023-10-23T14:01
id: 20231023131057-a-subquery-is-a-sql-query-inside-another
---

Also called nested queries. You can use these to resolve one-to-many relations, eg find all the books from a specific publisher

```sql
SELECT "title" FROM "books"
WHERE "publisher_id" = (
	SELECT "id" FROM "publishers"
	WHERE "publisher" = 'the publisher I care about'
);
```

The bit in brackets `()` is the subquery. You could also use the `IN` keyword if your subquery returns more than one thing.

You can also use subqueries for many-to-many relations via an intermediate table.

```sql
SELECT "name" FROM "authors"
WHERE "id" = (
	SELECT "author_id" FROM "authored"
	WHERE "book_id" = (
		SELECT "id" FROM "books"
		WHERE "title" = 'some title'
	)
);
```

But this is starting to get really messy and hard to follow. You might prefer to use [[joins connect tables|joins]]
