---
title: Soft deletion means marking data as deleted without actually deleting it
pubDate: 2023-11-13
lastUpdated: 2023-11-13
id: 20231113151109-soft-deletion-means-marking-data-as-deleted-without-actually-deleting-it
---

You can implement this using [[SQL triggers are statements that run in response to other statements|trigger statements]], or by updating the value in a specific column (for example `deleted`) to something that your application logic knows means deleted. This is often done as a boolean, but you might prefer to have `deleted_at` be null if the thing isn't deleted, and a timestamp if it is, representing when the thing was deleted, not just that it was.

Combine this concept with [[A view is a virtual table defined by a query|views]] to make it easy to only query data that hasn't been deleted, for example:

```sql
CREATE VIEW "current_collections" AS
SELECT "id", "title", "accession_number", "acquired"
FROM "collections"
WHERE "deleted" = 0;
```

You can implement a special trigger to intercept deletion on this table, and instead set the value in the `deleted` column on the underlying `collections` table.

```sql
CREATE TRIGGER "delete"
INSTEAD OF DELETE ON "current_collections"
FOR EACH ROW
BEGIN
    UPDATE "collections" SET "deleted" = 1
    WHERE "id" = OLD."id";
END;
```

Sometimes this can be helpful for users, allowing them or you to recover accidentally deleted data, but you need to consider the ethics of what data you should be keeping around and for how long if a user has requested to delete it. This is particularly important for sensitive data or PII, but you should think about it for all data.
