#!/usr/bin/python3.10
import os
import datetime

now = datetime.datetime.now()
ago = now - datetime.timedelta(minutes=3330)

path = '.'

for root, dirs, files in os.walk(path):

    for fname in files:

        path = os.path.join(root, fname)
        st = os.stat(path)
        mtime = datetime.datetime.fromtimestamp(st.st_mtime)

        if mtime > ago:
            print(f'{path} modified {mtime}')
