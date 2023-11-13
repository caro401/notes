---
title: A foreign key is a column in a table linked to a column in a different table
pubDate: 2023-10-26 16:59
updatedDate: 2023-10-26 16:59
id: 20231026161077-a-foreign-key-is-a-column-in-a-table-linked-to-a-column-in-a-different-table
aliases:
  - foreign key
---

Write foreign key [[Table constraints impose restrictions on values in tables|table constraints]] in a [[A database schema defines the tables and columns in a database|schema]] like this:

```sql
CREATE TABLE "visits" (
	"rider_id" INTEGER,
	"station_id" INTEGER,
	FOREIGN KEY("rider_id") REFERENCES "riders"("id"),
	FOREIGN KEY("station_id") REFERENCES "stations"("id")
)
```

You might want to specify what happens to these records if the related record is deleted from another table, so you don't end up with records that don't reference anything. This would be achieved using `ON DELETE` , for example `ON DELETE SET NULL` sets the reference to `NULL` if the thing referred to is deleted,
or `ON DELETE CASCADE` to delete things referencing the record in another table when that thing is deleted.

## Sources

- Things you can do [on delete in sqlite](https://www.sqlite.org/foreignkeys.html#fk_actions)
