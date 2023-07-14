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
from contextlib import redirect_stdout
from datetime import datetime
print('''/mnt/c/projects/p3/modules/start2.py''')
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

def zdir(z):
    global me
    methods=[a for a in dir(z) if not a.startswith('_')]
    print(methods)
    me=methods
    # return methods


#silly page print
          
def chop(x,l=14):
    ch=re.split('\s', x)
    n=0
    # pdb.set_trace()
    r=[]
    fl=len(ch)
    for a in range(len(ch)):
        # pdb.set_trace()
        r.append(' '.join(ch[n:n+l]))
        n+=l
        if n>fl:
             break
    return r
   
def d():
    global dd
    dd=sorted([a for a in globals() if not a.startswith('_')])
    rend(dd)
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


