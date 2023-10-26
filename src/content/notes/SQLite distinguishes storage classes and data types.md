---
title: SQLite distinguishes storage classes and data types
pubDate: 2023-10-26 16:29
updatedDate: 2023-10-26 16:29
id: 20231026161026-sqlite-distinguishes-storage-classes-and-data-types
---
In [[SQLite is a DBMS|sqlite]], there's 5 main _storage classes_, `NULL`, `INTEGER`, `REAL` (floats),  `TEXT` and `BLOB` (binary data). These apply to individual values stored in the database. There can be several data types under each storage class, for example different number of bytes for integers. Sqlite thinks you shouldn't have to care about the specifics, but it will deal with picking the right underlying data type for you. For the most part, the terms can be used interchangeably. 

## Sources
- [the SQLite docs on datatypes](https://www.sqlite.org/datatype3.html)