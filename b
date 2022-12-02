q
get_ipython().run_line_magic('history', '')
get_ipython().run_line_magic('ls', '')
get_ipython().run_line_magic('whos', '')
import mysql.connector
db=mysql.connector.connect()
db=mysql.connector.connect(host="localhost" ,user="root", passwd="stars1")
print('thursday')
import sys
sys.executable
mycursor=db.cursor()
mycursor.execute("CREATE DATABASE testdatabase")
def ex(sq):
    mycursor.execute(sq)
    
ex('use testdatabase')
ex('CREATE DATABASE second')
ex('use second')
ex('CREATE TABLE pet (name VARCHAR(20), owner VARCHAR(20),
       species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);')
ex('CREATE TABLE pet (name VARCHAR(20), owner VARCHAR(20), species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);')
db=mysql.connector.connect(host="localhost" ,user="root", passwd="rootpress")
ex('show tables')
ex('use sys')
myresult = mycursor.fetchall()
for x in myresult:
  print(x)
  
for x in {2, 1, 3}: ... print(x) 1 2 3
print('friday')
dir(sys)
import clipboard
a=[1,2,3]
a in [4,5]
a in [3,4,5]
a
1 in [1,3]
1 in [2,3]
for p in a:
    print(p)
    if p in a:
      print('yes')
      
set(a)
get_ipython().run_line_magic('run', 'test.py')
import test.py
doub([1,3,4])
get_ipython().run_line_magic('who', '')
dir(doub)
print(dir(doub))
x="April is the cruellest month, breeding
Lilacs out of the dead land, mixing"
x='''ok'''
x
x='''April is the cruellest month, breeding
Lilacs out of the dead land, mixing'''
print(x)
x.replace('\n',' ')
import re
re.sub(r"\s", "x", x)
re.sub(r",", "", x)
re.sub(r"[,\n]", "", x)
re.sub(r"[,\n]", " ", x)
re.sub(r"[^a-z]", " ", x)
re.sub(r"[^a-zA-Z]", " ", x)
re.sub(r"[^a-zA-Z]", "", x)
y=re.sub(r"[^a-zA-Z]", " ", x)
y
re.sub(r"\s+", " ", y)
z=re.sub(r"\s+", " ", y)
z
z.split(' ')
from pathlib import Path
here = Path(".")
files = here.glob("**/*")
for item in files:
    print(item)
get_ipython().run_line_magic('pwd', '')
print(sys.path)
f'{{ {4*10} }}'
b='hi'
f' {b} there'
k=f' {b} there'
k
lt
cls
c
'abc'.replace('a','x')
re.sub(r"\{1,}", " ", y)
re.sub(r"\s{1,}", " ", y)
re.sub(r"\s{1,}", " ", 'nothing    nothing')
re.sub(r"\s{2,}", " ", 'nothing    nothing')
re.sub(r"\s{8,}", " ", 'nothing    nothing')
re.sub(r"\s{1,}", " ", 'nothing    nothing          a')
re.sub(r"x{1,}", " ", 'nothing    nothing    x      a')
re.sub(r"x{1,}", " ", 'nothing    nothing    xxxx      a')
re.sub(r"x{1,}", " ", 'nothing    nothing    xbxxx      a')
re.sub(r"x{0,}", " ", 'nothing    nothing    xbxxx      a')
re.sub(r"j{0,}", " ", 'nothing    nothing    xbxxx      a')
re.sub(r"j+", " ", 'nothing    nothing    xbxxx      a')
y=re.sub(r'[^a-zA=Z]', ' ' x)
y=re.sub(r'[^a-zA=Z]', ' ' ,x)
re.sub(r"\s+", " ", y).split(' ')
z=re.sub(r"\s+", " ", y).split(' ')
set(z)
print(set(z))
print(z)
z.sort()
z.sort(key=len)
v=sorted(z)
print(v)
len(z)
f'{len(z)} v is {len(v)}'
print(set(v))
print(sorted(set(v)))
print(sorted(set(v), key=str.lower))
'jim'[1]
print(sorted(set(v), key=lambda x:x[1]))
print(sorted(set(v), key=lambda x: x[1]))
sorted(v)
people = [('Anna', 'New York', 'Data Analyst'),('Chris', 'Berlin', 'Software Developer'),('Nancy', 'Toronto', 'Data Scientist')]
sorted(people, key=lambda x:x[1])
sorted(people, key=lambda x:x[1][1])
type(people)
people.append('xxx','xxx','xxx')
people.append('xxx')
people
people.append(('xxx','yyy','zzz'))
'xxx' in people
'xxxx' in people
people.remove('xxx')
people.append(('aaa','b','c'))
'aaa' in people
enumerate(people)
print(enumerate(people))
list(enumerate(people))
people.pop(4)
people.append(('aaa','bbb','ccc'))
people.append(('  ','  ','ccc'))
type(people[1])
people.pop(0)
list(enumerate(people))[1]
doub(v)
doub(z)
doub(x)
a(3)
get_ipython().run_line_magic('clear', '')
a(3,2)
a([2,2])
def a(p):
    return p
    return set(p)
print(f'the set is {a([4,4,5,6])}')
a("jim")
sorted(a("jim"))
a("jimxad")
a("zjimxad")
a("zjimxad")==a("zjimxad")
a("zjimxad")==a("zjimxadc")
set([8,9,20,1,3])
import random
random.random()
random.random()*50
for a in range(10):
    random.random()
    print(random.random())
    print(random.random())*50
    print(random.random()*50)
s=[]
    s.append(random.random*50)
    s.append(random.random()*50)
s
set(s)
for a in range(100):
print(s)
print(set(s))
print(sorted(set(s)))
sorted(set(s))==sorted(set(s))
def a(x):
    if len(x)>3:
        return x[2]
        
print(a("jim"))
"jim"[2]
len("jim")
print(a("jimste"))
"steffes"[2:4]
list(enumerate(s))
s[33:40]
s[-5]
a=10
if(a>10):
    print("Value of a is greater than 10")
else :
    print("Value of a is 10")
else:
s.remove(s[108])
s.remove(s[10:100])
s[10:20]
s.clear()
import inspect
inspect.getsource(doub)
print(inspect.getsource(doub))
for a in range(30):
round(s[1])
    s.append(round(random.random()*50))
print(sorted(s))
def u(p):
    p=sorted(p)
z[10:20]
print(list(enumerate(z[20:30])))
print(f's is {len(s)} and set is {len(set(s))}')
s.count(15)
u(s)
credits
date
import datetime
clear
[x for x in s]
[x*200 for x in s]
[round(x) for x in s]
s=[round(x) for x in s]
sorted(s)
[x for x in range(100)]
print([x for x in range(100)])
print(['z' for x in range(100)])
round(randome.random())
round(random.random())
round(random.random()*100)
def k:
    return round(random.random()*100)
def k():
p=k
p
p=k()
print([k() for x in range(100)])
print(inspect.getsource(s))
print(inspect.getsource(u))
print(inspect.getsource(k))
for l in enumerate(s):
    print(l)
t=sorted(s)
[x for x in z]
[x for x in z if x='in']
[x for x in z if x=='in']
[enumerate(x) for x in z if x=='in']
[str(enumerate(x)) for x in z if x=='in']
[x for x in enumerate(z) if x=='in']
[x for x in enumerate(z) if x.startswith=='a']
[x for x in enumerate(z) if x.startswith'a']
[x for x in enumerate(z) if x.startswith('a')]
[x for x  if x.startswith('a')]
[x for x if x.startswith('a')]
[x for x in z if x.startswith('a')]
[x for x in z if not x.startswith('a')]
[x for x in z if not x.contains('a')]
[x for x in z if not x.startswith(('a','b'))]
[x for x in z if not x.startswith(('a'))]
[x for x in z if not x.startswith('a'))]
[x for x in z if  x.startswith('a')]
[x for x in z if  x.startswith('a','b')]
[x for x in z if  x.startswith(('a','b'))]
x.replace('\n',' ').replace('  ','')
x.replace('\s','xxx')
x.replace(' ','xxx')
x.replace(' ','\t')
q== 'one\ntwo\r\nthree'
q= 'one\ntwo\r\nthree'
print(q)
print(repr(q))
print(repr(x))
print(repr(y))
s.find('the')
str(s).find('the')
str(s)
type(y)
y.find('the')
y[10]
y.find('  ')
y.split('  ')
x=whos
re.search('a',y)
re.search('\s',y)
re.search('\s+',y)
s[10]
y[:10]
re.search('\s{2}',y)
re.findall(r"\w+ly\b", y)
re.findall(r"\w+y\b", y)
re.findall("\w+y\b", y)
re.findall(r"\.+y\b", y)
re.findall(r"\.*y\b", y)
y.strip()
y.strip().replace('  ', ' ')
y.strip().replace('  ', ' ').split(' ')
f=y.strip().replace('  ', ' ').split(' ')
print(f)
[a for a in f]
myString='and'
pattern = r'\b' + re.escape(myString) + r'\b'
s.pop()
s.pop(1)
s.find(50)
s.remove(8)
s=sorted(s)
s.remove(37)
del s[0]
del s[-1]
del s[0:10]
del s[:3]
del s[:]
k=random.random()
k=round(random.random()*100)
k()
[k() for k in range(3)]
[k for k in range(3)]
[k() for x in range(3)]
[n in [k() for x in range(3)]]
[n for n in [k() for x in range(3)]]
[n for n in [k() for x in range(30)]]
[n for n in [k() for x in range(10)]]
[n for n in [k() for x in range(10)] and n %2==0]
[n for n in [k() for x in range(10)] if n %2==0]
[n for n in [k() for x in range(10)] if n %2==1]
[n for n in [k() for x in range(10)] if n %3==1]
[n for n in [k() for x in range(10)] if n %3==0]
[n for n in [k() for x in range(10)] if n %7==0]
[n for n in [k() for x in range(100)] if n %7==0]
84/7
[n for n in [k() for x in range(100)] if n %7==0]/7
[n for n in [k() for x in range(100)] if n %13==0]
del [n for n in [k() for x in range(100)] if n %13==0][:2]
def n(a):
    print(type(n))
n('a')
    print(type(a))
n(n)
n([1])
n((2))
n((2,3))
[1,2,3].count(1)
[1,1,2,3].count(1)
    if type(a)==list:
        print('list')
    else:
        print(type(n))
n(a)
        print(type(a))
n([1,2,3])
        print(f'a list {a.count(1)} has 1\'s')
n([1,1,2,3])
        print(f'a list  has {a.count(1)} 1\'s')
a[0]
z[0]
z[0]==null
z[0]==none
z[0] is None
z[0] = None
len(z[0])
z[0] = ''
z=[a for a in z if len(a) !=0]
str(z)
a=''
a=z[2]+z[3]
eleven = None
print(eleven is None)
eleven
print(eleven)
repr(eleven)
repr(z)
for n in z:
    a+=n
    a+=' '+n
def python_none():
    pass
python_none()
print(python_none())
repr(python_none())
a=[a for a in z if len(a)!=0]
z=[a for a in z if len(a)!=0]
print(enumerate(z))
print(list(enumerate(z)))
s=0
def summer(a):
    for x in range(10):
        s+=x
    return s
summer(2)
    s=0
        print(f'{s} + {x} = {s+x}')
def summer():
summer()
def summer(n):
    for x in range(n):
summer(8)
    return round(random.random()*1000)
myA=[k() for x in range(5)]
myA
    for x in n:
summer(myA)
        print(f'{s} * {x} = {s*x}')
        s*=x
    s=1
set(myA)
list(set(myA))
list(sorted(set(myA)))
list(sorted(set(myA)))=sorted(myA)
list(sorted(set(myA)))==sorted(myA)
def dif(a):
    if list(sorted(set(a)))==sorted(a):
        print(f'list {a} is unique')
        print(f'list {a} in NOT')
dif([1,2])
dif([1,2,1])
    if type(a)!=list:
       print('input must be list') 
        if list(sorted(set(a)))==sorted(a):
            print(f'list {a} is unique')
        else:
            print(f'list {a} in NOT')
            
dif('jim')
dif([3])
dif([38,2,4])
dif([38,2,4,6,22,4])
dif(['a','b'])
dif(['a','b','a'])
'aeio'.split('')
'aeio'.split('e')
[*'ae']
[*'aeiou']
for a in 'aeiou':
    print(a)
d=[*'aeiou']
d
d=[*'ae']
len(d)
for n in range(len(d)):
    print(d[n])
    print(d[n] + d [n+1])
    print(n)
    print(d[n] + d[n+1])
    print(n+1)
d[1]
d[2]
n
print(d[0]+d[1])
def permutations(elements):
    if len(elements) <= 1:
        yield elements
        return
    for perm in permutations(elements[1:]):
        for i in range(len(elements)):
            # nb elements[0:1] works in both string and list contexts
            yield perm[:i] + elements[0:1] + perm[i:]
permutations([1,2])
list(permutations([1,2]))
list(permutations([1,2,3]))
list(permutations(*'aeiou'))
list(permutations([*'aeiou']))
print(list(permutations([*'aeiou'])))
random.shuffle([*'aeiou'])
print(random.shuffle([*'aeiou']))
random.shuffle('aeiou')
char_list = ['a','e','i','o','u']
random.shuffle(char_list)
print(''.join(char_list))
random.shuffle(d)
type(d)
print(random.shuffle(char_list))
type(random.shuffle(char_list))
char_list
k=random.shuffle([*12345])
print(k)
k=random.shuffle([*"12345"])
j=[*"12345"]
k=random.shuffle()
j
k=random.shuffle(j)
random.shuffle(j)
print(sorted(s), key=lambda k: k)
print(sorted(s, key=lambda k: k))
print(sorted(s, key=lambda k: str(k)))
sorted(a, key=lambda k: k)
sorted(z, key=lambda k: k)
print(sorted(z, key=lambda k: k))
print(sorted(z, key=lambda k: lower(k)))
Lower('j')
print(sorted(z, key=lambda k: k.lower))
print(sorted(z, key=lambda k: k.lower()))
print(sorted(z, key=lambda k: random.random()))
s[1]
s[1][1]
str(s[1][1])
str(s[1])
str(s[1])[1]
[str(a) for a in s]
s=[a for a in s and 1>9]
s=[a for a in s and a>9]
s=[a for a in s and a == 9]
type(s[1])
s=[a for a in s]
[type(a) for a in s]
[type(a) for a in s and a == 2]
[type(a) for a in s if a == 2]
[type(a) for a in s if a > 9]
[a for a in s if a > 9]
s=[a for a in s if a > 9]
def p(x):
    print(x)
p(s)
p(x)
p(y)
p(z)
p(sorted(z, key=lambda k:k[-1]))
p(sorted(z, key=lambda k:len(k)))
def f(x):
    return [a for a in x if a.startswith('t')]
f(z)
[a for a in z if a > 9]
[a for a f(z)]
[a for a in f(z)]
[a for a in f(z) if a[1]=='h']
def t(x):
    try:
        return 9/x
    except ZeroDivisionError:
        print("You can't divide by zero!")
t(3)
t(0)
        return x[3]
t('thisi')
t('th')
    finally:
        print("didn't work")
p(inspect.getsource(t))
        new= x[3]
    except:
        print("didn't work index")
t('frumious')
t('fr')

    return new
        return new
t('frumi')
        return 0
        # print("didn't work index")
k='''After the try clause, we can'''.split(' ')
[t(a) for a in k]
t(k[2])
import timeit
'c:\all'.replace('\\','\/')
r'c:\all'.replace('\\','\/')
r'c:\all'.replace('\','\/')
r'c:\all'.replace('\','/')
r'\'.replace('\','x')
r'JIm'.replace('j','xx')
r'JIm'.replace('J','xx')
r'\JIm'.replace('\J','xx')
r'\JIm'.replace('\J','/')
r'c:\JIm'.replace('\J','/')
r'c:\JIm'.replace('\','/')
r'c:\JIm'.replace('\\','/')
r'c:\JIm'.replace('\\','/').replace('c:\','/mnt/c')
r'c:\JIm'.replace('\\','/').replace('c:\','\/mnt\/c')
r'c:\JIm'.replace('\\','/').replace('c:\\','\/mnt\/c')
r'c:\JIm'.replace('c:\\','\/mnt\/c').replace('\\','/')
r'c:\JIm'.replace('c:\\','/mnt/c').replace('\\','/')
r'c:\JIm'.replace('c:\\','/mnt/c/').replace('\\','/')
def wincon(a):
    r'a'.replace('c:\\','/mnt/c/').replace('\\','/')
wincon('c:\jim')
r'c:\jim'
a='c:\jim'
r(a)
r{a}
repr(a)
a.replace('c:\\','/mnt/c/')
    a.replace('c:\\','/mnt/c/').replace('\\','/')
    return a.replace('c:\\','/mnt/c/').replace('\\','/')
    import sys
    print(type(sys.argv))
    for i in sys.argv:
        print(i)
        print(enumerate(i))
        print(list(enumerate(i)))
 wincon('c:\jim')
        print(f'first i is {i}')
 
# code snippet to be executed only once
setup_details = "import random"
# code snippet whose execution time is to be measured
samplecode = '''
def example():
    somenumber = random.randit(0,50)
    return somenumber
'''
# timeit statement
print ("Execution time of program:-", timeit.timeit(setup = setup_details,
                     stmt = samplecode,
                     number = 10000))
somenumber = random.randit(0,50)
# testing timeit()
import_module = "import random"
testcode = ''' 
def test(): 
    return random.randint(10, 100)
print(timeit.repeat(stmt=testcode, setup=import_module, repeat=5))
random.randint(10,100)
somenumber = random.randint(0,50)
somenumber
somenumber = random.randint(0,50000000)
dir_path = r'C:\\all\\'
# list to store files
res = []
# Iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        res.append(path)
print(res)
import os
dir_path = r'/mnt/c/all'
setup_details = "import os"
print("Execution time of program:-", timeit.timeit(setup = setup_details, stmt = samplecode, number = 10))
dir_path = r'/mnt/c/'
res
setup_details = "from os import walk"
samplecode='''
for (dir_path, dir_names, file_names) in walk(dir_path):
    res.extend(file_names)
import requests
r = requests.get('https://www.dataquest.io/')
print(r)
dir(r)
[r in r]
r
[r in dir(r)]
type(dir(r))
[a for r in dir(r)]
[a for a in dir(r)]
[a for a in dir(r) if not a.startswith('__')]
[a for a in dir(r) if not a.startswith('_')]
r.text
[a for a in dir(r) if not a.startswith('_')][1:3]
r.text[0:2]
r.text[0:22]
print(r.text)
print(*r.text)
print(r.text[:20])
print(r.text[:220])
type(r.text)
len(x)
p(x).split('\n')
x.split('\n')
len(x.split('\n'))
l=len(x.split('\n'))
p(x[:l])
def p(w):
    l=len(w.split('\n'))
    print(w[:l])
x,y=1,2
if 2==3:
    x,y=3,4
    x,y=None, None
repr(x)
type(x)
if 2==2:
2=3 if 3==3
a=3 if 3==3
from IPython.core.magic_arguments import argument, magic_arguments
ipy = get_ipython()
ipy.define_macro('d', 'date')
ipy.define_macro('h', 'history')
history
ipy.define_macro('h', 'import')
import
ipy.define_macro('h', '@history')
@history
ipy.define_macro('h', '%whos')
%whos
get_ipython().run_line_magic('pinfo', 'dir')
get_ipython().run_line_magic('pinfo', 'd')
import datetime as date
d.now
d.now()
date.date()
date.date('2022')
date.date(2022)
get_ipython().run_line_magic('pinfo', 'date')
get_ipython().run_line_magic('magic', '')
k=get_ipython().run_line_magic('magic', '')
get_ipython().run_line_magic('alias', 'w %whos')
get_ipython().run_line_magic('w', '')
get_ipython().run_line_magic('alias', 'wh %whos')
get_ipython().run_line_magic('wh', '')
get_ipython().run_line_magic('less', 'z')
z %less 
get_ipython().run_line_magic('page', 'z')
get_ipython().run_line_magic('page', 'print(z)')
dir(whos)
dir(random)
get_ipython().run_line_magic('page', 'dir(random)')
get_ipython().run_line_magic('automagic', '1')
get_ipython().run_line_magic('quickref', '')
get_ipython().run_line_magic('time', '')
get_ipython().run_line_magic('run', 't')
get_ipython().run_line_magic('alias', 'c clear')
get_ipython().run_line_magic('alias', '')
get_ipython().run_line_magic('lf', '')
get_ipython().run_line_magic('lx', '')
get_ipython().run_line_magic('timeit', 'x=x=range(100)')
get_ipython().run_line_magic('timeit', "x=x=range(100) print('hi')")
get_ipython().run_line_magic('timeit', "x=x=range(100): print('hi')")
get_ipython().run_line_magic('timeit', "x=range(100): print('hi')")
get_ipython().run_line_magic('timeit', 'x=range(100)')
get_ipython().run_line_magic('pdef', '(a)')
get_ipython().run_line_magic('pdef', '(print)')
get_ipython().run_line_magic('pdoc', '(print)')
get_ipython().run_line_magic('pdoc(print)', '')
pyvar = 'Hello world'
get_ipython().system('echo "A python variable: {pyvar}"')
get_ipython().system('echo "A python variable: {$PATH}"')
__
___
get_ipython().run_line_magic('dhist', '')
globals()
get_ipython().run_line_magic('less', 'globals()')
n=globals
n=globals()
get_ipython().run_line_magic('less', 'n')
get_ipython().run_line_magic('less', 'ls')
z %less
get_ipython().run_line_magic('env', '')
get_ipython().run_line_magic('lsmagic', '')
get_ipython().run_line_magic('matplotlib', '--list')
get_ipython().run_line_magic('sx', 'fd')
sd fd -epy
get_ipython().run_line_magic('sx', 'fd -epy')
get_ipython().run_line_magic('sx', 'lt -lhrt')
get_ipython().run_line_magic('sx', 'ls -lhrt')
get_ipython().run_line_magic('pycat', 'sheets.py')
get_ipython().run_line_magic('pycat', 't.py')
get_ipython().run_line_magic('reset', '')
get_ipython().run_line_magic('unalias', 'less')
less z
less(z)
get_ipython().run_line_magic('more', 'z')
get_ipython().run_line_magic('alias_magic', 'w %whos')
v=1
get_ipython().run_line_magic('alias_magic', 'currdir pwd')
get_ipython().run_line_magic('alias_magic', 'h history')
get_ipython().run_line_magic('h', '')
ss=env
print(env)
get_ipython().run_line_magic('history', '5')
get_ipython().run_line_magic('history', '50')
dir(history)
get_ipython().run_line_magic('history', '10')
h
w
get_ipython().run_line_magic('load', 'test.py')
# %load test.py
def doub(arr):
    for a in arr:
        print(a)
x=''' April is the cruellest month, breeding
Lilacs out of the dead land, mixing
Memory and desire, stirring
Dull roots with spring rain.
Winter kept us warm, covering
Earth in forgetful snow, feeding
A little life with dried tubers.
Summer surprised us, coming over the Starnbergersee
With a shower of rain; we stopped in the colonnade,
And went on in sunlight, into the Hofgarten,
And drank coffee, and talked for an hour.
Bin gar keine Russin, stamm’ aus Litauen, echt deutsch.
And when we were children, staying at the arch-duke’s,
My cousin’s, he took me out on a sled,
And I was frightened. He said, Marie,
Marie, hold on tight. And down we went.
In the mountains, there you feel free.
I read, much of the night, and go south in the winter.'''
print(f'The wasteland \n{x}')
y=re.sub(r'[^a-zA-Z]', ' ' ,x)
get_ipython().run_line_magic('c', '')
get_ipython().run_line_magic('pinfo2', 'square')
get_ipython().run_line_magic('pinfo', 'square')
get_ipython().run_line_magic('pinfo2', 'len')
import filelock
x = os.environ.keys()
get_ipython().run_line_magic('page', 'x')
[for a in dir(sys) if not a.startswith('_')]
[a for a in dir(sys) if not a.startswith('_')]
print([a for a in dir(sys) if not a.startswith('_')])
n='sys'
dir(n)
dir(r'n')
type(n)
import n
get_ipython().run_line_magic('page', 'dir(sys)')
f'{dir(sys)}'
f'{[dir(sys)]}'
f'{[a for a in dir(sys)] }'
def plus:
    print('plus')
def plus():
plus()
def z(z):
    print(dir(z))
z(a)
z(sys)
    print([a for a in dir(z) if not a.startswith('_']))
    print([a for a in dir(z) if not a.startswith('_')])
z(requests)
help(requests)
z=history
zz=get_ipython().run_line_magic('history', '')
zz
print(zz)
get_ipython().run_cell_magic('time', '', 'import random\nfor i in range(0, 1000000):\n    random.random()\n    \n')
def x():
    import random
        for i in range(0, 1000000):
        random.random()
for i in range(0, 1000000):
def xx():
    for i in range(0, 1000000):
xx()
get_ipython().run_cell_magic('time', '', 'xx()\n\n')
    for i in range(0, 100000000):
get_ipython().run_line_magic('man', 'ls')
get_ipython().run_line_magic('page', 'y')
y=y y y
y=y + y + y
for z in range(30):print(z)
for z in range(30):y+=y
get_ipython().run_line_magic('ldir', '')
impor os
print('okkkk')
info reqests
info reqqests
get_ipython().run_line_magic('pinfo', 'requests')
vip
wexport PYTHONSTARTUP=~/.pythonrc
import collections
os
requests
zdir(requests)
get_ipython().run_line_magic('edit', '')
get_ipython().run_line_magic('edit', '1')
get_ipython().run_line_magic('edit', '0')
get_ipython().run_line_magic('edit', '2')
get_ipython().run_line_magic('edit', '4')
type(h)
get_ipython().run_line_magic('man', 'alias')
get_ipython().run_line_magic('man', 'find')
get_ipython().run_line_magic('edit', '3')
clipboard
zdir(clipboard)
help(clipboard)
import pyperclip
help(pyperclip)
zdir(hyperclip)
zdir(pyperclip)
pyperclip.copy(str(dir(os)))
zdir(os)
print(zdir(os))
for a in zdir(os):
[a for a in zdir(os)]
print([a for a in zdir(os)])
print(zdir(pyperclip))
dir()
[for a in dir() if not a.startswith('_')]
[a for a in dir() if not a.startswith('_')]
d()
def d():
  print([a for a in dir() if not a.startswith('_')])
print([a for a in dir() if not a.startswith('_')])
globals
[a for a in globals()]
  print([a for a in globals() if not a.startswith('_')])
inspect.getsource(exit)
inspect.getsource(d)
inspect.getsource(os)
inspect.getsource(ipy)
print())zdir(pyperclip)
print(str(z))
[str(a) for a in z]
print(" ".join(z))
print("  - ".join(z))
z.append(1)
str(1)
map(str, z)
list(map(str, z))
list(map(upper, z))
Upper('z')
get_ipython().run_line_magic('man', 'lower')
help(lower)
" ".join([str(a) for a in z])
" ".join([str(a).upper() for a in z])
" ".join([str(a).lower() for a in z])
inspect.getsource(d).replace('a','xxx')
inspect.getsource(d).replace('\n','xxx')
inspect.getsource(d).replace('\n','')
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)
def tracer(x):
    def wrapper():
        print('header')
        x()
        print('footer') 
    return wrapper
@tracer
def h():
    print(f'[a for a in dir()]')
h()
    print(f'{[a for a in dir()]}')
    print(f'{[a for a in globals]}')
    print(f'{[a for a in globals()]}')
help(upper)
help(print)
help(h)
help(os)
[a for a in d()]
def filt(x):
    return [a for a in x not if a.startswith('_')]
    return [a for a in x  if not a.startswith('_')]
[n for n in globals() if filt(n)]
filt('xxx')
filt('xx_x')
[n for n in globals() if not a.startswith('_')]
[n for n in globals() if not n.startswith('_')]
[n for n in globals() ]
[f for f in [n for n in globals() ]]
[f for f in [n for n in globals() ]][4]
[f for f in [n for n in globals() ]][4:8]
def starts(x):
    return x.startswith('a')
starts('jim')
starts('ajim')
list('jim')
[t for t in list('jim') if starts(t)]
[t for t in list('ajim') if starts(t)]
    return not x.startswith('a')
    return not x.startswith('_')
[t for t in globals() if starts(t)]
zdir(d)
inspect.getsource(zdir)
dir(zdir)
print(dir(zdir))
zdir.__dict__
text = 'a11 b213 a13 x15 c21 a40 a55 m34'
for match in re.finditer(r'a\d*\W', text):
    print (match[0])
re.finditer(r'.*', text)
[a for a in re.finditer(r'.*', text)]
url = "https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/data?alt=json&key=AIzaSyCZ3y8Es42zvNGON7ezA6q4dxe8RNcyQIs"
r=requests(url)
url
r=requests.get(url)
type(r)
r.headers
type(r.headers)
get_ipython().run_line_magic('edit', '-p')
get_ipython().run_line_magic('edit', '_2')
get_ipython().run_line_magic('edit', '_1')
get_ipython().run_line_magic('edit', '8')
get_ipython().run_line_magic('edit', '11')
s=r.headers
s.get('Server')
s.items()
print(s.items())
fd
fd.items()
fd.keys()
fd.values()
fd.pop('name')
fd.popitem()
fd.update{
    "name": "freeCodeCamp", 
    "founder": "Quincy Larson",
    "type": "charity", 
    "age": 8, 
    "price": "free", 
    "work-style": "remote",
fd.update({'new': 'item new'})
url = "https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/data?alt=json&key=AIzaSyCZ3y8Es42zvNGON7ezA6q4dxe8RNcyQIs";
url = 'http://httpbin.org/json'
r = requests.get(url)
zdir(r)
r.headers.keys()
r.headers.items()
r.text.replace('\n','')
url = 'http://httpbin.org/get'
payload = {
    'website':'dataquest.io',
    'courses':['Python','SQL']
    }
r = requests.get(url, params=payload)
print('Response Content:\n',r.text)
get_ipython().run_line_magic('man', 'jq')
manv jq
get_ipython().run_line_magic('alias', 'manv')
j=json.loads(r.text)
import json
j.keys()
type(j)
j.range
print(j)
import pprint
pprint(j)
import pprint as pprint
from pprint import pprint
d(0)
pprint(z)
pprint(z, depth=1)
pprint(j, depth=1)
from urllib.request import urlopen
with urlopen('https://pypi.org/pypi/sampleproject/json') as resp:
    project_info = json.load(resp)['info']
project_info
pprint(project_info, depth=1)
get_ipython().run_line_magic('page', 'pprint(project_info)')
pprint(project_info, depth=1, width=60)
j=pprint(project_info, depth=1, width=60)
get_ipython().run_line_magic('page', 'project_info')
with urlopen('https://pypi.org/pypi/requests/json') as resp:
len(j)
for a in j:
hash(1)
get_ipython().run_line_magic('edit', '-1')
print(hash(a))
print(hash(1))
print(hash('jim'))
dictionary[42] = "the answer to the ultimate question of life, the universe, and everything."
dictionary={}
print(dictionary)
get_ipython().system('ls')
x=get_ipython().getoutput('ls')
get_ipython().run_line_magic('edit', '22')
get_ipython().run_line_magic('edit', '222')
get_ipython().run_line_magic('his', '-n')
get_ipython().run_line_magic('history', '-n')
get_ipython().run_line_magic('edit', '31')
get_ipython().run_line_magic('edit', '7')
get_ipython().run_line_magic('history', '-ng')
get_ipython().run_line_magic('alias_magic', 'h history -n')
get_ipython().run_line_magic('h', '-n')
get_ipython().run_line_magic('h', '-ng')
get_ipython().run_line_magic('page', 'h -n')
get_ipython().run_line_magic('recall', '1-5')
ls
print
print('hello')
get_ipython().run_line_magic('edit', '44-45')
pprint(dictionary)
dictionary.update[1,'this']
add_characters_3 = [
    ("Rubeus Hagrid", "Gryffindor"),
    ("Minerva McGonagall", "Gryffindor")
]
dictionary.update[add_characters_3]
dictionary
dictionary.clear()
d={}
add_characters_1 = {
    "Albus Dumbledore": "Gryffindor",
    "Luna Lovegood": "Ravenclaw"
d.update(add_characters_1)
d.update(1,'not')
d.update([1,'not'])
d.update({[1,'not']})
d.update({1,'not'})
d.update({'x','not'})
d.update({'x':'not'})
[a for a in j.keys()]
j.get('range')
j.get('values')
for a in j.get('values'):
j.get('values2')
j.get('values2','noth')
k=j.keys()
k=[a for a in j.keys()]
[for j[l] for l in k ]
[l  for l in k ]
for a in [l  for l in k ]:
    print(k[a])
k[1]
j='''Krishnamurti was born in South India, in what is now the modern-day'''
re.sub(r'\s','','jim ste')
re.sub(r'[^a-zA-Z0-9]','','jim ste')
re.sub(r'[^a-zA-Z0-9]','','jim ste%%%')
re.sub(r'[^a-zA-Z0-9]','',j)
re.sub(r'[^a-zA-Z0-9]',' ',j)
k=re.sub(r'[^a-zA-Z0-9]',' ',j)
l=re.sub(r'\s+',' ',k)
l
def junk(a):
  return re.sub(r'[^a-zA-Z0-9]',' ',a)
junk(j)
  b= re.sub(r'[^a-zA-Z0-9]',' ',a)
  return re.sub(r'\s+',' ',b)
get_ipython().run_line_magic('cd', '..')
get_ipython().run_line_magic('cd', 'all')
get_ipython().run_line_magic('cd', 'bash')
get_ipython().system('nvim')
get_ipython().system('nvim b.json')
print(sorted([a for a in globals() if not a.startswith('_')]))
  print(sorted([a for a in globals() if not a.startswith('_')]))
dir(a)
type(a)
def foo(x):
    global tt
    tt = x*2
tt
foo(1)
    global dd=sorted([a for a in globals() if not a.startswith('_')])
    print(dd)
    global dd
    dd=sorted([a for a in globals() if not a.startswith('_')])
dd
def p(a):
p(dd)
type(dd)
page = requests.get("https://en.wikipedia.org/wiki/Main_Page")
# display status code
print(page.status_code)
# display scrapped data
print(page.content)
get_ipython().system('pip list')
n=get_ipython().getoutput('pip list')
print(n)
url = "https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/eliot?alt=json&key=AIzaSyCZ3y8Es42zvNGON7ezA6q4dxe8RNcyQIs";
ev
dir(ev)
get_ipython().run_line_magic('edit', '-2')
get_ipython().run_line_magic('cd', '/tmp')
get_ipython().run_line_magic('ls', 'py*')
get_ipython().system('ls -lhrt')
get_ipython().system('cd ..')
get_ipython().system('pwd')
get_ipython().run_line_magic('cd', '/mnt/c')
get_ipython().run_line_magic('cd', 'all/bash')
for a in j.keys():
[a for a in j.keys()][1]
j[a for a in j.keys()][1]
j[[a for a in j.keys()][1]]
j[[a for a in j.keys()][2]]
len(j.keys())
a=range(len(j.keys()))
for x in a:
    p(x)
    print(j[[a for a in j.keys()][x]])
    print(f'x is ' {j[[a for a in j.keys()][x]]})
    print(f'x is  {j[[a for a in j.keys()][x]]}')
j.keys()[0]
type(j.keys())
list(j.keys())[0]
    print(f'x is  {list(j.keys())[x]} {j[[a for a in j.keys()][x]]}')
j['values']
type(j['values']]
type(j['values'])
j['values'][1]
j.get('values','noth')
j.get('values',None)
j.get('valuesx',None)
j.get('valuesx')
repr(j.get('valuesx'))
print(j.get('valuesx'))
    print(a, j[a])
    print(f'{a} j[a]')
    print(f'{a} -- {j[a]}')
' '.join(j['values'])
k=j['values']
' '.join(k)
for b in k:
    p(b)
    p(str(b))
str(k)
[a for a in k]
[a[1] for a in k]
l=''
for a in k:
    l+=a
    l+=str(a)
k[-1]
get_ipython().run_line_magic('cd', '%%bash')
get_ipython().run_line_magic('cd', '../all')
get_ipython().run_line_magic('ls', '*.json')
get_ipython().system('ls *.json')
get_ipython().run_line_magic('cd', 'bash/')
' '.join(k[0])
k[0]
len(k)
for key, value in j.items():
    print(f'{key} {value}')
j.items()
    print(f'{key}\n {value}')
with open('b.json', 'r') as b:
    bj=json.load(b)
bj
bj.keys()
bj['urls']
list(bj.keys())
bjl=list(bj.keys())
p(bjl)
p(sorted(bjl))
str(sorted(bjl))
json.dumps(bjl)
pprint(bjl)
pprint(bj)
pprint(bj['urls'])
type(bj['urls'])
bj['urls'].split('\n')
bj['urls'].split('t')
bjk=bj.keys()
bjk
bjk=list(bj.keys())
print(bjk)
os.getcwd()
os.chdir('/mnt')
os.chdir('/mnt/c/all')
get_ipython().run_line_magic('timeit', 'd()')
dir_path = r'.'
def ti():
    dir_path = r'.'
    # list to store files
    res = []
    # Iterate directory
    for path in os.listdir(dir_path):
        # check if current path is a file
        if os.path.isfile(os.path.join(dir_path, path)):
            res.append(path)
    print(res)
ti()
get_ipython().run_line_magic('timeit', 'ti()')
    dir_path = r'/mnt/c'
whos_ls
get_ipython().run_line_magic('whos_ls', '')
get_ipython().run_cell_magic('time', '', '\nimport numpy as np\nfor i in range(1000):\n    np.random.random_sample()\n    \n')
get_ipython().run_cell_magic('writefile', 'test.py', '\na = 5\nb = 10\na, b = b, a\nprint("a =", a)\nprint("b =", b)\n\n')
get_ipython().system('nvim test.py')
get_ipython().run_line_magic('system', "echo 'Hello World'")
get_ipython().run_line_magic('timeit', 'out = [i*i for i in range(1000000)]')
out
dir_path = r'/mnt/c'
for path in os.scandir(dir_path):
    if path.is_file():
        print(path.name)
print(f'version is {sys.version}')
a=range(5)
for b in a:
    print(b)
d=''
d+='jim'
    d+=b
    d+=str(b)
    d+=f'{str(b)}'
del d
    d+=f'{str(b)}\n'
print(d)
    d+=f'line {str(b)}\n'
type d
pyperclip.copy(d)
pyperclip.copy("jim")
with open('AnyFile.txt', 'w') as j:
    print('this is j' file=j)
    print('this is j', file=j)
get_ipython().system('cat AnyFile.txt')
    print(d, file=j)
with open("mp3_to_link", "r") as lt:
    ltl=lt.read()
ltl
for a in ltl:
print(ltl)
type(ltl)
    ltl=lt.readlines()
ltl[1]
alist = [line.rstrip() for line in open('mp3_to_link')]
alist
alist[1]
alist[1:10]
alist[-1:10]
alist[-1:-2]
[a for a in alist]
[len(a) for a in alist]
print([len(a) for a in alist])
print([len(a) for a in alist if len(a)==0])
print([len(a) for a in alist if len(a)=>2])
print([len(a) for a in alist if len(a)>2])
print([a for a in alist if len(a)12])
print([a for a in alist if len(a)>12])
print([a for a in alist if len(a)>20])
print([a for a in alist if len(a)<20])
def jj(a):
    return f'jim is {a} forever'
jj('pp')
list(map(jj,alist))
2000/60
    return f' ni -ItemType SymbolicLink -Path {a} -Target {a}'
b=list(map(jj,alist))
type(b)
for q in b:
    print(q)
    return f' ni -ItemType SymbolicLink -Path c:\\you\\kb\\{a} -Target {a}'
b
    return f' ni -ItemType SymbolicLink -Path c:\you\kb\{a} -Target {a}'
f'\c:\'
f'c'
f'c\'
f'c\\'
repr('c\\')
repr('c\')
print(r'c:\')
print(r'c:\\')
print(f'c:\\')
def nn(a):
    return f'c:\{a}'
nn('jim')
    return '\'
    return '\\'
r'tt'
r'\tt'
r'\\tt'
r'/\tt'
r(f'c\\')
r(f'c:\\')
a=r'c:\all'
p a
print(a)
    return f' ni -ItemType SymbolicLink -Path r'c:\you\kb\'{a} -Target {a}'
d=r'c:\you\kb\'
a=r'c:\all\'
a=r'c:\all\\'
a=r'c:\all\\jim'
a=r'c:\all\jim'
a=r'\'
a=r'\\'
f'{a}'
f'{a\}'
    return fr'{a}'
    return fr'c:\{a}'
r'jj('pp')'
print(jj('pp'))
f' {jj('pp')}
f' {jj("pp")}'
cmd_drive = r"\\"
    local_hostname = "hostname"
    current_sid = "SID"
    currentline_instance_number = "04"
    cmd_pf = os.path.join(cmd_drive, local_hostname, "sapmnt", current_sid, "SYS", "profile")
    cmd_pf = cmd_pf + "\\" + str(current_sid) + "_*" + str(currentline_instance_number) + "_" + str(currentline_host)
    cmd_pf = "dir " + cmd_pf + " /b /a-d"
    print(cmd_pf)`
str(jj("pp"))
file_name = 'C:/Users/Alice/Desktop/example.txt'
# 👇️ C:/Users/Bob/Desktop/example.txt
print(file_name)
name = 'Bob'
my_str = fr'Alice\{name}\Carl'
my_str
print(my_str)
nn=print(jj('pp'))
nn
nn=1
from io import StringIO
buffer = StringIO()
sys.stdout = buffer
print('This will be stored in the print_output variable')
print_output = buffer.getvalue()
print_output
buffer
print('xxx')
buffer.getvalue()
a=buffer.getvalue()
dir(buffer)
sys.stdout = sys.__stdout__
example = 'hello 123'
# 👇️ remove call to print() to assign to a variable
my_str = str(example)
print(my_str) # 👉️ hello 123
# -------------------------------------
# ✅ Redirect print() output to a variable
# 👇️ restore stdout to default for print()
# 👇️ -> This will be stored in the print_output variable
print('->', print_output)
r=r'\\'
r=r'\'
r=rf'\'
jj('pp').replace("/", "\\/")
jj('pp').replace("/0", "\\/")
jj('pp').replace("o", "\\/")
jj('pp').replace("]]", "\\/")
jj('pp').replace("\\", "\\/")
jj('pp').replace("\\", "\")
jj('pp').replace("\\", "\\")
print(jj('pp').replace("\\", "\\"))
crumb = 'abc\xyz'
crumb.encode('string-escape')
crumb = r'abc\xyz'
crumb
f'{crumb}
f'{crumb}'
f'r{crumb}'
repr(crumb)
fr'r{crumb}'
fr'{crumb}'
fr"{crumb}.replace('u','xxx')"
fr"{crumb}".replace('u','xxx')
fr"{crumb}".replace('\','\')
fr"{crumb}".replace('\','\\')
fr"{crumb}".replace('\\','\\')
    return f" ni -ItemType SymbolicLink -Path fr'c:\you\kb\'{a} -Target {a}"
    return f" ni -ItemType SymbolicLink -Path {fr'c:\you\kb\'}{a} -Target {a}"
    return f" ni -ItemType SymbolicLink -Path {r'c:\you\kb\'}{a} -Target {a}"
a={chr(92)}
print(fr'{a}')
print(fr'{a}\')
print(fr'{a}\\')
my_string = f"🍔foo{bar}".replace("🍔", "\\")
bar='ha'
my_string
print(my_string)
print(b[3])
    return f' ni -ItemType SymbolicLink -Path c:\you\kb\{a} -Target c:\you\crows\{a}'
print(b[5])
print('This message will be displayed on the screen.')
with open('filename.txt', 'w') as f:
    print('This message will be written to a file.', file=f)
get_ipython().system('nvim filename.txt')
with open('filename.txt', 'a') as f:
  for q in b:
      print(q, file=f)
200/60
with Popen(["ifconfig"], stdout=subprocess.PIPE) as proc:
   print(proc.stdout.read())
   
import subprocess
cmd = "git --version"
returned_value = os.system(cmd)  # returns the exit code in unix
print('returned value:', returned_value)
pyperclip.copy("jim steffes")
hash("b")
hash("jim")
hash("jims")
j["values"]
type(j["values"])
d[21]="nothing"
p(d)
d[21]="nothing again"
del d[21]
d.popitem()
d['jim']='steffes'
d['jim']='steffessssssss'
d['tom']
d.get['tom']
d.get['tom','none']
d.get('tom','none')
d.get('jim','none')
d.get('jimssssssss','none')
type(j.items())
for a in j.items():
[a for a in j.items()]
pprint(j.keys())
[a for a in j.values()]
[a for a in j.values()][2]
str([a for a in j.values()][2])
def sheet():
    url = "https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/data?alt=json&key=AIzaSyCZ3y8Es42zvNGON7ezA6q4dxe8RNcyQIs"
    r=requests.get(url)
    return r
a=sheet
a=sheet()
a.text
type(a.text)
5000/60
(5000/60)/24
dir_path = r'E:\\account\\'
print(dir_path)
d=r'c:\all\'
d= r'c:\all\'
d = r'c:\all\'
d = r'c:\\all\\'
for path in os.listdir(d):
     res.append(path)
     
# folder path
print(os.listdir())
#!/bin/python3.10
#list files 
d=r'/mnt/c/all'
#store list
res=[]
#iterate directory
    #make sure file
    if os.path.isfile(os.path.join(d,path)):
d=r'/mnt/c/all/ps'
res[1]
os.path.join(d,res[1])
[a for a in range(30)]
[a for a in range(3)]
[a for in d]
[a for a in d]
[a for a in res]
for p in os.listdir(d):
    print(os.path.join(d,p))
fs=[]
    fs.append(os.path.join(d,p))
fs
alist = [line.rstrip() for line in open('fs[1]')]
fs[1]
alist = [line.rstrip() for line in open(fs[1])]
type(alist)
alist[3]
alist[6]
str(alist)
p(str(alist))
print(str(alist))
print(alist)
pprint(alist)
help(pprint)
j=0
j+=1
j+=j
def suml(l):
    a=0
    for j in l:
        a+=j
    return a
suml(33)
list(3)
list(3,2)
list([3,2])
suml([4,3])
suml([4,3,22])
p=[1,3,4]
p=[1,3,4,2]
len(p)
for x in range(len(p))
for x in range(len(p)):
    print(p[x])
def max(l):
    for x in range(len(l)):
        if l[x]> l[x+1] and l[x] > max:
                max=l[x]
                print(max)
                
max([1,3])
    r=len(l)
    for x in range(r):
        if x+1 < r:
            if l[x]> l[x+1] and l[x] > max:
                    max=l[x]
                    print(max) 
        print(x)
max([1,3, 10, 9])
    max=0
        print(f'in range x: {x}')
    return max
print(max([8,1,3,10, 9]))
print(max([8,1,3,22,10, 9]))
print(f'the max is {max([22,8,1,3,10, 9])}')
    return f'the answer is {2*22)'
kk=f'JIM {2*2}'
kk
    return f'the answer is {2*22}'
nn()
nn(3)
    return f'the max is {max}'
max([1,3, 10,100, 9])
max([1,3, -10,100, 9])
max([101,3, -10,100, 9])
max([101,3, -10,100, 9,200])
        # print(f'in range x: {x}')
            if l[x]>max:
max([101,3, -10,100, 9,00])
def max_num_in_list( list ):
    max = list[ 0 ]
    for a in list:
        if a > max:
            max = a
print(max_num_in_list([1, 2, -8, 0]))
help(random)
random
random.randint(0,100)
def rn():
    return random.randint(-200,200)
rn()
[rn() for a in range(2)]
[rn() for a in range(30)]
lt=[rn() for a in range(30)]
print(lt)
def mnl( list ):
        if a < max:
mnl(lt)
def cntl(a):
    if len(a)<3:
        return f'{a} is smaller than 3'
cntl('jim')
cntl('ji')
'aaaa'[-1]
'abcd'[-1]
    b=[]
    for x in a:
        if len(x)<3 and x[1]==x[-1]:
            b.append(x)
    return b
cntl(['tim'])
cntl(['timt'])
st='''The thing that hath been, it is that which shall be; and that which is done is that which shall be done: and there is no new thing under the sun.'''
p(st)
print(st)
st.split(' ')
st=st.split(' ')
st='''The thing that hath been, it is that which shall be; and that which is done is that which shall be done: and there is no new thing under the sun.'''.split(' ')
st
        print(f'x is {x} first is {x[1]}')
st='''The thing that hath beenb'''.split(' ')
cntl(st)
        print(f'x is {x} first is {x[1]}{x[-1]}')
'bac'[-1]
        print(f'x is {x} first is {x[0]}{x[-1]}')
        if len(x)<3 and x[0]==x[-1]:
        if len(x)<3:
        # and x[0]==x[-1]:
        if len(x)>3:
        if len(x)>3  and x[0]==x[-1]:
    cnt=0
            cnt+=1
    return f' there are {cnt} strings {b}'
def t(n):
    return [n-1]
t((2,3))
    # return [n-1]
t((2,3))[1]
(2,3)[1]
(2,3)[-1]
(2,3)[-2]
n=(2,3,4)
def pt(x):
    print(type(x))
pt(n)
pt('jim')
def('jim')
dir('jim')
p(2)
print(dir('jim'))
def t():
    return (1,4)
t()
a=t()
pt(a)
get_ipython().run_line_magic('pinfo2', 't')
inspect.getsource(t)
inspect.getsource(p)
type(p)
p(t)
(1,2,3)[1]
tuplex = 5, 10, 15, 20, 25
pt(tuplex)
tup="jim", "tom", "dick"
pt(tup)
p(tup)
p(tup[2])
tup[1]="joe"
1=tup
a=tup
p(a)
a,b,c=tup
a,b,c,d=tup
a,b=tup
len(tup)
tup
tup=tup + "harry"
tup=tup + ("harry")
tup=tup + ("harry",)
tup=tup + ("harry","paul", "george",)
tup=tup + (9,)
lis(tup)
list(tup)
tup[:3]
tup[3:4]
tup[3:]
tuplex = (4, 6, 2, 8, 3, 1)
tuplex = tuplex[:5] + (15, 20, 25) + tuplex[:5]
tuplex
tuplex=tuplex[:2]
str(tup)
def ts(x):
    return str(x)
ts(tup)
tup[0]
tup[8]
tup[7]
27%7
import glob
files = glob.glob("*.mp4")
files
print(files)
enumerate(files)
print(enumerate(files))
for a in enumerate(files):
for a, b in enumerate(files):
    print(f'{a} {b}')
for a, b, c in enumerate(files):
for a,  in enumerate(files):
for a  in enumerate(files):
help(inspect)
hash("jimst")
hash([2,2])
type(1,3)
type((1,3))
k={1,"2"}
p(k)
p(k[0])
has(k)
hash(k)
j=("a","b")
d=(1:"j")
d=("1":"j")
d={"1":"j"}
t(d)
d[21]="nothing again new"
d["list"]=[3,4,5]
dir(d)
d.pop()
l= [
    ["Draco Malfoy", "Slytherin"],
    ["Cedric Diggory", "Hufflepuff"]
t(l)
l[1]
d.update(l)
for x in d:
[a,1 for a in d]
del d['1']
d['new']="The Queen of Hearts, she made some tarts,  All on a summers day, The knave of Hearts, he stole the tarts, And took them clean away."
d.pop('new')
d[21]
d[22]
d.get(21,'none')
d.get(22,'none')
d.items()
t(d.items())
d.keys()
line="The Queen of Hearts, she made some tarts,  All on a summers day, The knave of Hearts, he stole the tarts, And took them clean away."
enumerate(line)
e
linel=line.split(' ')
linel
print(enumerate(linel))
get_ipython().run_line_magic('edit', '100')
get_ipython().run_line_magic('edit', '1000')
get_ipython().run_line_magic('edit', '101')
get_ipython().run_line_magic('edit', '104')
l="The Queen of Hearts, she made some tarts,  All on a summers day, The knave of Hearts, he stole the tarts, And took them clean away.".split(' ')
print(*l)
map(print,l)
def inp(x):
  p(inspect.getsource(x))
inp(l)
inp(p)
t(os)
d(exit)
inp(exit)
t(exit)
h=get_ipython().run_line_magic('alias_magic', 'h history ')
get_ipython().run_line_magic('alias_magic', 'h history ')
line="The Queen of Hearts, she made some tarts,  All on a summers day, The knave of Hearts, he stole the tarts, And took them clean away.".split(" ")
line
p(*line)
t(p)
def ins(x):
  print(inspect.getsource(x))
ins(zdir)
t(In)
In
Out
p(' '.join(line))
p(' -- '.join(line))
print(*line)
ins(p)
test_scores = [[91, 67, 32], [55, 79, 83], [99, 12, 49]]
for i in range(len(test_scores)):
    for j in test_scores:
        print(j[i], end=' ')
    print()
p(zdir(os))
    p(zdir(os))
    p(zdir(os), file=f)
    print(zdir(os), file=f)
get_ipython().system('rm filename.txt')
t(quit)
for a in enumerate(In)
    print(a):
for a in enumerate(In):
get_ipython().run_line_magic('edit', '42')
get_ipython().run_line_magic('edit', '27')
def hi():
  for a in enumerate(In):
      print(a)
hi()
get_ipython().run_line_magic('edit', '45')
get_ipython().run_line_magic('edit', '41')
get_ipython().run_line_magic('cd', '/mnt/c/projects/p3/')
get_ipython().run_line_magic('cd', 'dict/')
path = '.'
with os.scandir(path) as it:
    for entry in it:
        if entry.is_file():
            print(entry.name)
print(timeit.timeit(stmt=testcode, setup=import_module))
path = r'/mnt/c/all'
import_module = "import os"
print(timeit.timeit(stmt=testcode, setup=import_module, repeat=2))
# print(timeit.timeit(stmt=testcode, setup=import_module, repeat=2))
path ='.'
print(timeit.repeat(stmt=testcode, setup=import_module, repeat=1))
    return os.scandir(path)  
return os.scandir(path)  
def ds():
    path = r'/mnt/c/all'
    path ='.'
    return os.scandir(path)
ds()
print(ds())
for a in ds():
import csv from reader
from csv import reader
c=open("Characters.csv", encoding="utf-8-sig")
t(c)
reader(c)
d=reader(c)
list(d)
# Open and read the dataset
opened_file_char = open("Characters.csv", encoding="utf-8-sig")
read_file_char = reader(opened_file_char)
hp_characters = list(read_file_char)
get_ipython().run_line_magic('edit', '94')
opened_file_char = open("c.csv", encoding="utf-8-sig")
lc = list(read_file_char)
get_ipython().run_line_magic('edit', '98')
print("\U0001f600")
print("\N{smiling face with sunglasses}", end='')
print("\U0001f601")
print("\U0001f604")
get_ipython().run_line_magic('edit', '5')
for k in range(5):
    print(k)
    print(f'\\U0001f604')
    print('\\U0001f604')
print('\\U0001f604')
print("\\U0001f604")
    print('\U0001f604')
    print(f'\U0001f604')
    print(f'\U0001f60{k}')
    print(f'\U0001f604 {k}')
j="\\U0001f604"
p $j
echo $j
fle = Path('data.py')
fle.touch(exist_ok=True)
url='https://api.github.com/repos/wither7007/all_wsl/commits?per_page=5'
response=requests.get(url)
mp=response.json()
print(mp)
t(mp)
print(*mp)
for x in mp:
    print(xi\n)
    print(x\n)
    print(f'{x}\n')
len(mp)
mp[1]
get_ipython().run_line_magic('edit', '39')
d1=mp[1]
t(d1)
d1.items()
d1.keys()
get_ipython().run_line_magic('edit', '44')
d1.values()
for a,b in d1.items():
    print(a,b)
    print(f'{a}: {b}\n')
    with open('AnyFile.txt', 'w') as j:
        print(f'{a}: {b}\n', file=j)
get_ipython().system('AnyFile.txt')
get_ipython().system('nvim AnyFile.txt')
    print(f'{a}: {b}\n')for a,b in d1.items():
    with open('AnyFile.txt', 'a') as j:
def git():
    for a,b in d1.items():
        with open('AnyFile.txt', 'a') as j:
            print(f'{a}: {b}\n', file=j)
git()
for a,b in d1.keys():
p(d1.keys())
get_ipython().run_line_magic('edit', '73')
for a in d1.keys():
    print(f'{a}\n')
    print(f'{a}')
    pa=os.path.join(dir_path, path)
    print(pa)
my_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
columns = 3
# a         b         c
# d         e         f
# g         h         i
for first, second, third in zip(my_list[::columns], my_list[1::columns], my_list[2::columns]):
    print(f'{first: <10}{second: <10}{third}')
my_list = "The Queen of Hearts, she made some tarts,  All on a summers day, The knave of Hearts, he stole the tarts, And took them clean away.".split(' ')
dir_path = r'/mnt/c/all/ps'
my_list=res
p(res)
my_list.insert(3,'12345555555555555')
p(my_list)
subprocess.run(["ls", "-l"])
subprocess.run(["ls", "-lhrt"])
subprocess.run(["ls", " / " "-lhrt"])
subprocess.run(["ls", "/" "-lhrt"])
subprocess.run(["ls", "/ " "-lhrt"])
subprocess.run(["ls", "/ ", "-lhrt"])
subprocess.run(["ls", " / ", "-lhrt"])
subprocess.run(["ls ", "/", "-lhrt"])
subprocess.run(["ls ", "/mnt", "-lhrt"])
subprocess.run(["ls ", "\/mnt", "-lhrt"])
import shlex, subprocess
command_line = input()
args = shlex.split(command_line)
p(args)
p = subprocess.Popen(args) # Success!
print(args)
from tabulate import tabulate
lis=[a for a in range(11)]
p(list)
print(lis)
print(tabulate(lis))
lis
lis=lis+lis
able = [[1, 2222, 30, 500], [4, 55, 6777, 1]]
print(tabulate(table))
table = [[1, 2222, 30, 500], [4, 55, 6777, 1]]
get_ipython().run_line_magic('edit', '135')
table = [[33333333333331, 2222, 30, 500], [4, 55, 6777, 1]]
get_ipython().run_line_magic('edit', '137')
get_ipython().run_line_magic('edit', '141')
table
table=[1,1,3]
table=[[1,1,3]]
print(tabulate(res))
print(tabulate([res]))
print(tabulate([res], tablefmt="plain"))
print(tabulate([res], tablefmt="simple"))
print(tabulate([res], tablefmt="grid"))
print(tabulate([res], tablefmt="asciidoc"))
ff="simple"
print(tabulate([res], tablefmt=ff))
k=""plain"
"simple"
"github"
"grid"
"simple_grid"
"rounded_grid"
"heavy_grid"
"mixed_grid"
"double_grid"
"fancy_grid"
"outline"
"simple_outline"
"rounded_outline"
"heavy_outline"
"mixed_outline"
"double_outline"
"fancy_outline"
"pipe"
"orgtbl"
"asciidoc"
"jira"
"presto"
"pretty"
"psql"
"rst"
"mediawiki"
"moinmoin"
"youtrack"
"html"
"unsafehtml"
"latex"
"latex_raw"
"latex_booktabs"
"latex_longtable"
"textile"
"tsv""
k='"plain"
"tsv"'
kk='''"plain"
"tsv"'''
'jim'.replace('i','xxx')
kk.replace('"','')
kk.replace('"','').split('\n')
jj=kk.replace('"','').split('\n')
for a in ff:
for a in jj:
jj[3]
jj[:3]
for a in jj[:3]:
  print(a)
  print(tabulate([res], tablefmt=a))
class color:
   PURPLE = '\033[95m'
   CYAN = '\033[96m'
   DARKCYAN = '\033[36m'
   BLUE = '\033[94m'
   GREEN = '\033[92m'
   YELLOW = '\033[93m'
   RED = '\033[91m'
   BOLD = '\033[1m'
   UNDERLINE = '\033[4m'
   END = '\033[0m'
print("The output is:" + color.BLUE + 'Python 3!')
print("The output is:" + color.BLUE + 'Python 3!') | v -
print("The output is:" + color.BLUE + 'Python 3!') 
  print(upper(a))
  print(Upper(a))
  print(a.upper)
  print(a.upper())
original_stdout = sys.stdout # Save a reference to the original standard output
    sys.stdout = f # Change the standard output to the file we created.
    print('This message will be written to a file.')
    sys.stdout = original_stdout # Reset the standard output to its original value
    whos
fil=open('xxxx', '2')
fil=open('xxxx', 'w')
sys.stdout = f # Change the standard output to the file we created.
sys.stdout = fil
print('date')
p(sys.stdout)
"tsv"'''.replace('"','').split('\n')
fil=open('tables.txt', 'w')
for a in kk[:3]:
    print(a.upper())
    print(tabulate([res], tablefmt=a))
sys.stdout =original_stdout
sys.stdout = fil # Change the standard output to the file we created.
get_ipython().system('nvim tables.txt')
print(fil)
fil.close()
res=d()
get_ipython().system('rm tables.txt')
for a in kk:
print(tabulate([res], tablefmt="JIRA"))
print(tabulate([res], tablefmt="PRESTO"))
tabulate([res], tablefmt="PRESTO")
tabulate([res], tablefmt="")
tabulate([res], tablefmt="jira")
get_ipython().run_line_magic('edit', '37')
print(tabulate([res], tablefmt="jira"))
res.insert(25,'cccccccccccccc cccccccccccccccc')
res[20:27]
mp
for a in enumerate(line):
for a in enumerate(mp):
    print(typ(a))
type(mp[1])
np=mp[1]
np
t(np)
get_ipython().run_line_magic('cd', 'winp/')
for a in enumerate(mp[1]):
np.keys()
get_ipython().run_line_magic('alias_magic', 'e edit')
get_ipython().run_line_magic('e', 't.py')
get_ipython().run_line_magic('edit', '-x t.py')
get_ipython().run_line_magic('alias_magic', 'e edit -x')
get_ipython().run_line_magic('alias_magic', 'e "edit -x"')
get_ipython().run_line_magic('edit', '_')
get_ipython().run_line_magic('e', '29')
get_ipython().run_line_magic('e', '20')
get_ipython().run_line_magic('e', '13')
get_ipython().run_line_magic('e', '-x 13')
p(np)
get_ipython().run_line_magic('e', '-x 1')
inspect.getmembers(np)
str(inspect.getmembers(np))
dir(np)
zdir(np)
inspect.getmembers(os)
p(inspect.getmembers(os))
p(inspect.getmembers(np))
p(np.keys())
inspect.getfile(requests)
inspect.getfile(response)
inspect.getfile(os)
    return dd
a=d()
str(np)
help(np)
str(help(np))
def fwrap(k):
    fil=open('wrap.txt', 'w')
    sys.stdout = fil # Change the standard output to the file we created.
    ls
    sys.stdout =original_stdout
fwrap(1)
def fwrap():
    print('text stuff')
fwrap()
get_ipython().run_line_magic('e', '-x wrap.txt')
get_ipython().system('bat wrap.txt')
get_ipython().system('cat wrap.txt')
    original_stdout = sys.stdout # Save a reference to the original standard output
esit
p(np.keys()))
np.pop()
np.get('sha')
np.get('sha', 'not found')
np.get('shas', 'not found')
np.items()
for a, b, in np.items():
    print(f'{a}\n{b})
    print(f'{a}\n{b}')
    print(f'{a}\n ---------\n{b}')
len(np)
del np
np['url']
pyperclip.copy(np)
pyperclip.copy(str(np))
a=[12]
if type(a) != string:
    print('no')
if type(a) != str:
if type(a) == str:
if type(a) !== str:
get_ipython().run_line_magic('e', '-x 40')
a=12
def cps(a):
    if type(a) != str:
        a=str(a)
        pyperclip.copy(a)
cps(np)
cps(np[1])
for a in mp.keys():
for a in np.keys():
get_ipython().run_line_magic('e', '-p')
np[1]
cps(np.keys())
np['comments_url']
cps(np['comments_url'])
str(np['comments_url'])
ins(cps)
str(ins(cps))
cps(str(ins(cps)))
cps(2)
cps(ins(cps))
kk=[a for a in range[10]]
range(10)
get_ipython().run_line_magic('e', '-x 19')
kk=[a for a in range(10)]
cps(kk)
cps(mp)
pcs([f for f in range(5)])
cps([f for f in range(5)])
cps([f for f in range(15)])
cps(d())
cps \
((1,2,3))\
(1, 2, 3)
def fwrap(x):
    fil.close()
fwrap(dd)
fwrap(np)
1533939.00/30
1533939.00/40
1533939.00/100
dir(os)
print([a for a in zdir(os) if a.startswith('ch')])
print([a for a in zdir(os) if a.contains('dir')])
print([a for a in zdir(os) if 'dir' in a])
get_ipython().run_line_magic('e', '-x 59')
fwrap([a for a in zdir(os) if 'dir' in a])
help(os.chdir)
help(os.lisdir)
os.listdir()
for a in os.listdir():
    p(a)
get_ipython().run_line_magic('e', '-x 67')
fwrap(
)
get_ipython().run_line_magic('e', '-x 69')
fwrap( for a in os.listdir(): print(a))
fwrap('for a in os.listdir(): print(a)')
for a in os.listdir(): print(a)
for a in os.listdir(): print(f' this is {a}')
n=[]
for a in os.listdir(): print(f' this is {a}'): n.append(a)
for a in os.listdir(): n.append(f' this is {a}')
fwrap(n)
for a in range(5):
    fwrap(a)
    fil=open('wrap.txt', 'a')
def pf(x):
    fil=open('pf.txt', 'a')
for key, valuen in mp.items():
    pf((key,value))
for key, valuen in np.items():
for key, value in np.items():
os.chdir('winp')
os.chdir('dict')
    n.append(a)
nn=[]
    nn.append(a)
get_ipython().system('cat c.csv')
f=open("Characters.csv", encoding="utf-8-sig")
f.readline()
f=open("Characters.csv", encoding="utf-8")
f=open("c.csv", encoding="utf-8")
f=open("c.csv", encoding="unicode_escape")
pf(whos)
fil=open('pf.txt', 'a')
whos
ins(d)
ins(hi)
hp_characters
import time
# Create a list
lst = [ele for ele in range(10**7)]
now = time.time()
if 3 in lst:
    print(True)
list_runtime = time.time() - now
print(f"\nList runtime: {list_runtime} seconds.")
now
time.time()
d = {i:i*2 for i in range(10**7)}
d = {i:i*2 for i in range(10**2)}
d = {i:i*2 for i in range(10)}
print(d())
p(d())
pf(d())
zdir()
def gf(path):
    for file in os.listdir(path):
        yield file
t(gf)
gf('.')
for a in gf('.'):
os.listdir('.')
yy=[]
yy.extend(20)
yy.extend([20])
yy
yy.extend(['jim'])
t(yy)
zz=(1,2,3)
t(zz)
yy.extend(zz)
yy.append(zz)
for a in enumerate(yy):
list1 = ['welcome', 'to']
list1.extend('datagy')
print(list1)
yy.append('asdfaadfda')
yy.extend('asdfaadfda')
del yy
yy.extend(2)
yy.extend('jim')
yy.extend([22])
t(os.walk('.'))
for a in os.walk('.'):
t(os.getcwd())
pyperclip.copy(os.getcwd())
for a,b in os.walk('.'):
    p(a,b)
get_ipython().run_line_magic('edit', '61')
get_ipython().run_line_magic('edit', '64')
get_ipython().run_line_magic('edit', '67')
for (dir_path, dir_names, file_names) in os.walk(dp):
dp=r'/mnt/c/you/alb'
dp=r'/mnt/c/you/'
len(res)
pyperclip.copy(str(res))
for path in os.scandir(dp):
get_ipython().run_line_magic('alias_magic', 'c clear')
ins(c)
type(c)
del c
res = glob.glob(dp)
dirp
dp
t(dp)
"jim"+"s"
dp+'*.*'
res = glob.glob(dp+"*.*")
res = glob.glob(dp+"*.*", recursive=True)
dp=r'/mnt/c/you/**/*.*'
res = glob.glob(dp, recursive=True)
res[:4]
[a for a in d() if(a=='os')]
[a for a in d() if(a=='ost')]
bool([a for a in d() if(a=='ost')])
bool([a for a in d() if(a=='os')])
get_ipython().run_line_magic('edit', '106')
if [a for a in d() if(a=='pyperclip')]:
    print('pyper')
get_ipython().run_line_magic('edit', '109')
if [a for a in d() if(a=='pyperclips')]:
def mcheck(md):
    return [a for a in d() if(a==md)]
mcheck('os')
    return bool([a for a in d() if(a==md)])
mcheck('oss')
get_ipython().run_line_magic('cd', '~')
kk=sheet()
t(kk)
kk.text()
kk.text
ll=kk.json
ll
t(ll)
ll=kk.json()
resp = requests.get('https://reqres.in/api/users')
resp_dict = resp.json()
print(type(resp_dict))
print(json.dumps(resp_dict, indent=4))
def sheet(sh):
    url = f"https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/{sh}?alt=json&key=AIzaSyCZ3y8Es42zvNGON7ezA6q4dxe8RNcyQIs"
kk=sheet('data')
kk=sheet('elliot')
kk=sheet('eliot')
ll[33="nothing"]
ll[33]="nothing"
ll[33]
ll['word']='jj'
"The lady doth protest too much, methinks".split(' ')
ll[sh]="The lady doth protest too much, methinks".split(' ')
ll[shx]="The lady doth protest too much, methinks".split(' ')
ll[shx]="The lady doth protest too much, methinks".split(' ')"
ll[shx]=f{"The lady doth protest too much, methinks".split(' ')}"
f"{'t'}
f"{'t'}"
f"{'t a'.split(' '}"
f"{'t a'.split(' ')}"
ll[shx]=f"{'The lady doth protest too much, methinks'.split(' ')}"
ll[shx]=0
ll['sh']=f"{'The lady doth protest too much, methinks'.split(' ')}"
print(ll)
pprint(ll)
pprint.pprint(ll)
from pprint import pprint as pp
pp(ll)
ll.items
ll.items()
print(ll.items())
ll[33]="something"
pp(dd)
print(dd)
cps(22)
cps(dd)
km=sheet('data')
km
km.json()
km=km.json()
pp(km)
km.items()
km.update(ll)
ll['xxx']="jesus"
km['new']=ll
for a in ll:
    print(ll[a])
cps(ll)
km['newer']=ll
del km['new']
print(km)
for a in km:
# https://docs.google.com/spreadsheets/d/1AeXz0cVvC6iY6wDqsXkXYwowRjfJyLoWGltHJEUCD4Y/edit#gid=674225399
kk=sheet(data)
del ll
del kk
    ll=r.json()
    return ll
ll=sheet('data')
kk=sheet('acctg')
pp(kk)
kk.items()
kk['ne']="new"
del kk['ne']
harry_potter_dict = {
    "Harry Potter": "Gryffindor",
    "Ron Weasley": "Gryffindor",
    "Hermione Granger": "Gryffindor"
kk.['new']=harry_potter_dict
kk['new']=harry_potter_dict
del kk['new']
kk.update(ll)
del ll['ranger']
s=ll['range']
del ll['range']
ll.update(s)
ll['range']=s
kk['values'][1]
for a k['values']:
for a in k['values']:
get_ipython().run_line_magic('edit', '48')
del harry_potter_dict
ll.pop()
ll.popitem()
