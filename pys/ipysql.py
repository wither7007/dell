#!/usr/bin/python3.10
import sqlite3
conn = sqlite3.connect("/home/steff007/.ipython/profile_default/history.sqlite")
c = conn.cursor()
ip = c.execute("SELECT source from history")
ipl=list(ip)
fileName = r"/home/steff007/pys/ipy_linux3"
f = open(fileName, "w", encoding="utf-8")

mapping = dict.fromkeys(range(32))
for row in ipl:
    # print(len(str(row)))
    # myRow = row[0].translate(mapping)
    if len(row) != 0:
        # print(row[0])
        print(row[0], file=f)

