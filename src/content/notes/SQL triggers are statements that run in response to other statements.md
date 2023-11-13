---
title: SQL triggers are statements that run in response to other statements
pubDate: 2023-11-13 15:22
updatedDate: 2023-11-13 15:22
id: 20231113151127-sql-triggers-are-statements-that-run-in-response-to-other-statements
---

```sql
CREATE TRIGGER "name of trigger"
BEFORE DELETE ON "table"
FOR EACH ROW
BEGIN
	<statement>;
END;
```

You could use this to create something like a transactions table on the basis of inserts and deletes on another table. For example

```sql
CREATE TRIGGER "sell"
BEFORE DELETE ON "collections"
FOR EACH ROW
BEGIN
	INSERT INTO "transactions" ("title", "action")
	VALUES (OLD."title", 'sold');
END;
```

Notice you have access to the special value `OLD`, which references the row which caused the trigger.

```sql
CREATE TRIGGER "buy"
AFTER INSERT ON "collections"
FOR EACH ROW
BEGIN
	INSERT INTO "transactions" ("title", "action")
	VALUES (NEW."title", 'bought');
END;
```

And here you have the special value `NEW` for the new row you've inserted.

This is one way to implement the concept of soft deletion. The other would be to

## Sources

- [sqlite syntax for create trigger](https://www.sqlite.org/lang_createtrigger.html)
