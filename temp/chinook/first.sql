SELECT * from books
SELECT * from sqlite_schema
CREATE TABLE IF NOT EXISTS books (title text)
CREATE TABLE IF NOT EXISTS no_thing (title text)
PRAGMA table_info('books') 
INSERT INTO books (title) values ('war and peace');
INSERT INTO books (title) values ('crime and punishment');
INSERT INTO books (title) values ('crime and punishment');
def x(a):
    return f'INSERT INTO books (title) values  "{a}"'
