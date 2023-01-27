import sqlite3
def x(a):
    return f'INSERT INTO books (title) values  ("{a}");'

con=sqlite3.connect('example.db')
cur=con.cursor()
data = open('first.sql', 'r', encoding='utf-8').read().splitlines()
what=list(map(x,list(subdirs('/mnt/c/you/evans'))))
# cur.execute(data[2])
# con.commit()
for a,b in enumerate(data):
    print(a,b)
choice = int(input("pick sql: "))
print(data[choice])
# cur.execute(data[choice])
# con.commit()
for a in cur.execute(data[choice]):
    print(a)
def sq():
    a=input('enter: ')
    print(a)
    for a in cur.execute(a):
        print(a)

def updq():
    data = open('first.sql', 'r', encoding='utf-8').read().splitlines()
    for a,b in enumerate(data):
        print(a,b)
    choice = int(input("pick sql: "))
    print(data[choice])
    for a in cur.execute(data[choice]):
        print(a)
for a in what:
    print(a)
    cur.execute(a)
con.commit()
def example():
    # Call for an infinite loop that keeps executing
    # until an exception occurs
    while True:
        test4word = input("What's your name? ")

        try:
            test4num = int(input("From 1 to 7, how many hours do you use your smartphone?" ))

        # If something else that is not the string
        # version of a number is introduced, the
        # ValueError exception will be called.
        except ValueError:
            # The cycle will go on until validation
            print("Error! This is not a number. Try again.")

        # When successfully converted to an integer,
        # the loop will end.
        else:
            print("Impressive, ", test4word, "! You spent", test4num*60, "minutes or", test4num*60*60, "seconds using your smartphone!")
            break
# The function is called
def example():
    a=input('enter: ')
    print(a)
    for a in cur.execute(a):
        print(a)

'''
for a in cur.execute(data[0]):
    print(a)

for a in cur.execute(data[3]):
    print(a)
'''