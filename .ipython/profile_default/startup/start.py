#frumious
# Previous /home/steff007/.ipython/profile_default/startup/start.py
# /mnt/c/projects/p3/modules/start2.py
# c:\projects\p3\modules\start2.py

import os
import sys
import re
import inspect
import pdb
import io
import pyperclip
from contextlib import redirect_stdout
from datetime import datetime
import requests
import json
print('''/mnt/c/projects/p3/modules/start2.py''')
print('''/home/steff007/.ipython/profile_default/startup/start.py''')
get_ipython().run_line_magic('alias_magic', 'h history ')
#get_ipython().run_line_magic('run', 'test.py')

# logging.basicConfig(format='%(asctime)s %(message)s')
#get_ipython().run_line_magic('alias_magic', 'x exit()')
get_ipython().run_line_magic('alias_magic', 'w whos')
get_ipython().run_line_magic('alias_magic', 'c clear')
get_ipython().run_line_magic('alias_magic', 'e edit')
get_ipython().run_line_magic('alias_magic', 'r run')
get_ipython().run_line_magic('alias_magic', 'l load')
#%run test.py

def sheet(sh):
    url = f"https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/{sh}?alt=json&key=AIzaSyCZ3y8Es42zvNGON7ezA6q4dxe8RNcyQIs"
    r=requests.get(url)
    ll=r.json()
    return ll

def cps(a):
    if type(a) != str:
        a=str(a)
        pyperclip.copy(a)
    else:
        pyperclip.copy(a)


def zdir(z):
    global me
    methods=[a for a in dir(z) if not a.startswith('_')]
    print(methods)
    me=methods
    # return methods


#silly page print
          
   
def d():
    global dd
    dd=sorted([a for a in globals() if not a.startswith('_')])
    print(dd)
    # return dd


def t(x):
    print(type(x))

def ins(x):
  xx=(inspect.getsource(x))
  cps(xx)
  print(xx)

def hi():
  for a in enumerate(In):
      print(a)


