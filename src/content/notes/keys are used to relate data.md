---
title: keys are used to identify and relate data
pubDate: 2023-10-23 13:25
updatedDate: 2023-10-23T13:34
id: 20231023131015-keys-are-used-to-relate-data
---
You probably want to give your rows primary keys - a column of unique (within that table) values. Some kinds of data have a built-in primary key or unique identifier. For books, this could be ISBN - every book has one and it is unique. Primary can be useful for looking up a specific single record, but they are most useful when treated as foreign keys - using the primary key from one table in a column in some other table, to represent a reference. 

[[A foreign key is a column in a table linked to a column in a different table|Foreign key]] directly in another table is great for representing one-to-many relationships. An example could be using the ISBN of a book in a ratings table, where each book can have lots of ratings, but ratings are for an individual book.

Think about how you store your primary keys. If you have a big dataset, you'll need an efficient datatype - number rather than a long string for example, so you don't use up loads of memory.

For a many-to-many relation, you probably want an additional "join" or "junction" table which has foreign keys to both the tables you want to relate