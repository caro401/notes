---
title: The type affinity of a sqlite column is the recommended type for data in that column
pubDate: 2023-10-26 16:38
updatedDate: 2023-10-26 16:38
id: 20231026161069-the-type-affinity-of-a-sqlite-column-is-the-recommended-type-for-data-in-that-column
---
[[SQLite is a DBMS|Sqlite]] columns can have one of 5 type affinities - `TEXT`, `NUMERIC`, `INTEGER`, `REAL` or `BLOB`. This is related but not the same as [[SQLite distinguishes storage classes and data types|storage classes]], which refer to individual values. 

The default type affinity is numeric unless you give some data that doesn't fit it.
## Sources
- [the sqlite docs on type affinity](https://www.sqlite.org/datatype3.html#type_affinity)

