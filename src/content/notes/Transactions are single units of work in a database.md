---
title: Transactions are single units of work in a database
pubDate: 2023-11-13T17:41
updatedDate: 2023-11-13T17:53
id: 20231113171109-transactions-are-single-units-of-work-in-a-database
---

Either all the things wrapped in a transaction happen, or none of them do. This can help handle concurrent requests on a database.

Transactions have some properties, which can be remembered using the acronym ACID:

- **atomicity**: can’t be broken down into smaller pieces,
- **consistency**: should not violate a database constraint,
- **isolation**: if multiple users access a database, their transactions cannot interfere with each other, (this helps guard against [[Race conditions]] using [[Transactional locking]])
- **durability**: in case of any failure within the database, all data changed by transactions will remain.

Make a transaction like this:

```sql
BEGIN TRANSACTION;
UPDATE "accounts" SET "balance" = "balance" + 10 WHERE "id" = 2;
UPDATE "accounts" SET "balance" = "balance" - 10 WHERE "id" = 1;
COMMIT;
```

So, `BEGIN TRANSACTION;`, then some SQL statements, then `COMMIT;` when you're done with all the things. This means no one will ever see the intermediate state of one person having gained money, but the other not having lost the money yet - this is atomicity.

If you want to revert changes if there's a problem ([[Table constraints impose restrictions on values in tables|constraint]] failure for example) with any of the statements in a transaction, use `ROLLBACK;` instead of `COMMIT;`
