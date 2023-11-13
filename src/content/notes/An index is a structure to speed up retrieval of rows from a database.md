---
title: An index is a structure to speed up retrieval of rows from a database
pubDate: 2023-11-13T17:13
updatedDate: 2023-11-13T17:33
id: 20231113171105-an-index-is-a-structure-to-speed-up-retrieval-of-rows-from-a-database
---

Create an index like this, you have to tell it what table(s) and column(s) to include

```sql
CREATE INDEX "title_index" ON "movies" ("title");
```

Creating the index takes some time, but then if you do a query like

```sql
SELECT * FROM "movies" WHERE "title" = 'Cars';
```

the query will run much faster if you have a lot of rows.

Check whether a given query will use an index using `EXPLAIN`, or for [[SQLite is a DBMS|sqlite]] `EXPLAIN QUERY PLAN` before the query, and the DBMS will tell you how it intends to execute that query. You can also use this on a query to see if it's doing something that would benefit from an index. For example, if you did

```sql
EXPLAIN QUERY PLAN
SELECT "title" FROM "movies" WHERE "id" IN (
    SELECT "movie_id" FROM "stars" WHERE "person_id" = (
        SELECT "id" FROM "people" WHERE "name" = 'Tom Hanks'
    )
);
```

and had no indexes, you would see [[Scanning each row in a database can be slow|scans]] across both `stars` and `people`, which are both big tables. Adding an index over `stars`, including both of the bits of data we need like this

```sql
CREATE INDEX "person_index" ON "stars" ("person_id", "movie_id");
```

takes a bit of time to run and create the index, but can really speed up that query. The `EXPLAIN` will then mention `USING COVERING INDEX`. A _covering index_ is one in which all the data you need for a query can be retrieved from the index itself, without also having to go back to the indexed tables.

Primary key columns automatically have indexes created for them, but other columns don't.

Indexes take up disk space, so you probably don't want to just index everything. They are usually based on B-trees, balanced tree structures. B-trees are very fast to search, but you're duplicating all the data from the columns you index. If you're concerned about space, and know your users are (mostly) likely to query only a subset of data, you can make a partial index instead. This looks like creating an index, but with a `WHERE` clause, for example

```sql
CREATE INDEX "recents" ON "movies" ("titles")
WHERE "year" = 2023;
```

Updating indexes when your data changes is also slow, as the b-tree has to work out where to put the new data. This means that inserts into tables with these indexes are slow.
