---
title: Clean up unused space in a database using vacuum or optimise
pubDate: 2023-11-13
lastUpdated: 2023-11-13
id: 20231113171119-clean-up-unused-space-in-a-database-using-vacuum-or-optimise
---

Remember sqlite databases are files, you can ask how big it is like `du my_database.db`

When you drop things from your schema or delete rows, disk usage isn't immediately reduced, rather those bytes are marked as available for reuse by the DBMS.

Do this in [[SQLite is a DBMS|sqlite]] by running the SQL statement `VACUUM;` and waiting for some time depending on how many bytes need reallocating. Other DBMSs may call this `OPTIMIZE TABLE` or similar.

## Sources

- [sqlite docs on vacuum](https://www.sqlite.org/lang_vacuum.html)
