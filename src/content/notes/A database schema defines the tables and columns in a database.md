---
title: A database schema defines the tables and columns in a database
pubDate: 2023-10-26 16:11
updatedDate: 2023-10-26 16:11
id: 20231026161075-a-database-schema-defines-the-tables-and-columns-in-a-database
---
You also need to decide what type of data can go in each column. Think about the data you will want to have, and look for inconsistencies or duplication of information. 

Normalizing refers to finding all the entities in their own table (for example separating books and their authors), and putting all and only the information about that entity in that table.

Then, you can [[Relational databases usually have several tables with related data|relate]] these tables together to represent the relationships between the entities in your data set.

You can ask [[SQLite is a DBMS|sqlite]] to show the schema for a database using the `.schema` command at the sqlite prompt, or `.schema <table name>` for just one table. This shows the `CREATE TABLE` command that could be used to create that table.

Create a new database with [[SQLite is a DBMS|sqlite]] by just naming the file - `sqlite3 newdatabase.db`. Then you can run some `CREATE TABLE` statements. These look (minimally) like
```sql
CREATE TABLE "riders" (
	"id", 
	"name"
);
```

You probably also want to define the [[Databases support lots of data types|data types]] and [[SQLite distinguishes storage classes and data types|storage classes]] for each of your columns though, and any [[A foreign key is a column in a table linked to a column in a different table|foreign key]] relations that exist.

The opposite of `CREATE TABLE` is `DROP TABLE`, this deletes a table and also all the data in that table. You can also edit existing tables using `ALTER TABLE` statements. This lets you do things like rename the table, add, remove or change a column.