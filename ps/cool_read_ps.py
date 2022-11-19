alist = [line.rstrip() for line in open('mp3_to_link')]
def jj(a):
    return f' ni -ItemType SymbolicLink -Path c:\you\kb\{a} -Target c:\you\crows\{a}'
    
b=list(map(jj,alist))
with open('filename2.txt', 'a') as f:
  for q in b:
      print(q, file=f)
