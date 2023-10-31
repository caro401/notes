---
title: SELECT gets data from rows in a table
pubDate: 2023-10-10 16:16
updatedDate: 2023-10-10T16:58
id: 20231010161017-select-gets-data-from-rows-in-a-table
---

The `SELECT` keyword lets you get data from rows inside a table in your database, for example `SELECT * FROM "mytablename";` gets all the columns (`*`) of all the rows in your table called `mytablename`.

You can select only specific columns from your table like `SELECT "title", "author" FROM "longlist";` - get the `title` and `author` columns for all rows in the table called `longlist` (using the Booker Prize sample data).

Use `SELECT DISTINCT` to get rid of duplicate values for a column.
