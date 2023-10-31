---
title: Table constraints impose restrictions on values in tables
pubDate: 2023-10-26 16:52
updatedDate: 2023-10-26 16:52
id: 20231026161079-table-constraints-impose-restrictions-on-values-in-tables
---

Common uses for these are for representing primary keys and [[A foreign key is a column in a table linked to a column in a different table|foreign key]]. You add these to the [[A database schema defines the tables and columns in a database|schema]] of the table.

```sqlite
CREATE TABLE "riders" (
	"id" INTEGER,
	"name" TEXT,
	PRIMARY KEY ("id")
)
```

You can have primary keys composed of more than one column, called a _joint primary key_. Often you'll see these when you don't want duplicate combinations in a join table. If you don't declare an explicit primary

## Sources

- [sqlite docs on primary keys](https://www.sqlite.org/lang_createtable.html#the_primary_key)
