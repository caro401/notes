---
title: A foreign key is a column in a table linked to a column in a different table
pubDate: 2023-10-26 16:59
updatedDate: 2023-10-26 16:59
id: 20231026161077-a-foreign-key-is-a-column-in-a-table-linked-to-a-column-in-a-different-table
aliases:
  - foreign key
---

Write foreign key [[Table constraints impose restrictions on values in tables|table constraints]] in a [[A database schema defines the tables and columns in a database|schema]] like this:

```sqlite
CREATE TABLE "visits" (
	"rider_id" INTEGER,
	"station_id" INTEGER,
	FOREIGN KEY("rider_id") REFERENCES "riders"("id"),
	FOREIGN KEY("station_id") REFERENCES "stations"("id")
)
```
