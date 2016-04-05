
def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc

print f(5) #-> ?

flist = [inc, dec]

print flist[1](5) #-> 4

# a simple closure in Python 
def makeAdder(n):
    def inner(x):
    	return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

print add3(10) # 10 + 3 -> 13
print add5(10) # 10 + 5 -> 15

def make_counter():
    # private "instance" data
    # has to be list bc of weird python scoping rules

    count = [0]
    #public methods
    def inc():
        count[0] = count[0] + 1
    def dec():
        count[0] = count[0] - 1
    def reset():
        count[0] = 0
    def get():
        return count[0]

    # return a disctionay so we have access to all methods

    return {'inc': inc, 'dec': dec, 'reset': reset, 'get': get }

c1 = make_counter()
c2 = make_counter()

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']() # -> ?

c2['inc']() # 1 not 4, makes sense bc its like its another constructor in a way
print c2['get']() # -> ?

c1['reset']()
print c1['get']() # -- ?



import random
def get_name():
    names = ['mary', 'david', 'yasmeen', 'alex', 'nellie', 'masahiro tanaka']
    return random.choice(names)


def dble(f):
    name = f()
    return name + name
