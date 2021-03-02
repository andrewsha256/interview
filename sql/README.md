# Goalscorers List

## Clubs

| id  | name                |
| --- | ------------------- |
| 1   | Bayern Munich       |
| 2   | Barcelona           |
| 3   | Eintracht Frankfurt |
| 4   | Juventus            |
| 5   | ...                 |

## Players

| id  | name               | number | goals | club_id |
| --- | ------------------ | ------ | ----- | ------- |
| 1   | Robert Lewandowski | 9      | 28    | 1       |
| 2   | Lionel Messi       | 10     | 19    | 2       |
| 3   | Andre Silva        | 33     | 19    | 3       |
| 4   | Cristiano Ronaldo  | 7      | 19    | 4       |
| 5   | ...                | ...    | ...   | ...     |

## SQLite Example

```sql
/** https://www.jdoodle.com/execute-sql-online/ */
create table clubs(id int, name varchar);
create table players(id int, name varchar, number int, goals int, club_id int, foreign key(club_id) REFERENCES clubs(id));

insert into clubs values(1, 'Bayern Munich');
insert into clubs values(2, 'Barcelona');
insert into clubs values(3, 'Eintracht Frankfurt');
insert into clubs values(4, 'Juventus');

insert into players values (1, 'Robert Lewandowski', 9, 28, 1);
insert into players values (2, 'Lionel Messi', 10, 19, 2);
insert into players values (3, 'Andre Silva', 3, 19, 3);
insert into players values (4, 'Cristiano Ronaldo', 7, 19, 4);
```
