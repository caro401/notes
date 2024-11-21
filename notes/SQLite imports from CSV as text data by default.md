---
title: SQLite imports from CSV as text data by default
pubDate: 2023-10-31
lastUpdated: 2023-11-13
id: 20231031151021-when-you-import-from-csv-to-sqlite,-data-comes-in-as-text-by-default
---

This means that you won't have [[NULL represents missing data|NULL]] values where you should. You can fix this with an update statement like

```sql
UPDATE some_import_table
SET
  "value" = NULL
WHERE
  "value" = '';
```
