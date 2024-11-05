---
title: Time a query in sqlite using the timer command
pubDate: 2023-11-13
lastUpdated: 2023-11-13
id: 20231113171146-time-a-query-in-sqlite-using-the-timer-command
---

run `.timer on` at the [[SQLite is a DBMS|sqlite]] prompt, then run a query, and with the response sqlite will return some timing information. This can be useful for working out if you have a slow query. The time is reported in seconds. You probably care most about `real` (ie wall) time, but it also reports `sys` time - how long it was waiting for system resources - and `user` time - how long sqlite itself was doing stuff for.
