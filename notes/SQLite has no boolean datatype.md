---
title: SQLite has no boolean datatype
pubDate: 2023-10-26
lastUpdated: 2023-10-26
id: 20231026161090-sqlite-has-no-boolean-datatype
---

[[SQLite is a DBMS|sqlite]] doesn't have a special [[SQLite distinguishes storage classes and data types|storage class]] for boolean values. Instead, you should usually use a really small integer (0 for false and 1 for true)

## Sources

- [SQLite docs on representing booleans](https://www.sqlite.org/datatype3.html#boolean_datatype)
