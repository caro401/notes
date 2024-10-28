---
title: Transactional locking
pubDate: 2023-11-13T17:52
updatedDate: 2023-11-13T17:57
id: 20231113171181-transactional-locking
---

Different DBMSs have very different implementations of this. For [[SQLite is a DBMS|sqlite]], there's 3 kinds of locking state a table can be in:

- **UNLOCKED**: this is the default state when no user is accessing the database,
- **SHARED**: when a transaction is reading data from the database, it obtains shared lock that allows other transactions to read simultaneously from the database,
- **EXCLUSIVE**: if a transaction needs to write or update data, it obtains an exclusive lock on the database that does not allow other transactions to occur at the same time (not even a read)

Make a [[Transactions are single units of work in a database|transaction]] be exclusive like `BEGIN EXCLUSIVE TRANSACTION;` - in sqlite this locks up the whole database for everything, which can cause problems. Sqlite has some internal stuff that helps make sure transactions only take these locks for as short a time as possible.
