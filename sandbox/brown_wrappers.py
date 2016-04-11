import time
import random

def name_log(f):
    def inner(*arg):
        t = time.time()
        x = f(*arg)
        print f.func_name + ': ' + str(arg)
        return x
    return inner

def timer(f):
    def inner(*arg):
        t = time.time()
        x = f(*arg)
        print 'execution time: ' + str(time.time() - t)
        return x
    return inner

@timer
@name_log
def randList(n , lower=-100, upper=100):
    L = []
    for i in range(n):
        L.append(random.randrange(lower, upper) )
    return L

print randList(10, -20, 20)
