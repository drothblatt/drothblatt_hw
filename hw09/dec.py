## David Rothblatt
## SoftDev2 pd3
## HW09 -- decorators
## 2016-08-2016

def time_logging(f):
    def inner( *args ):
        import time
        start_time = time.time()
        run = f(*args)
        time = time.time() - start_time
        return "execution time: " + str(time) + "\n" + str(run)
    return inner
    

def fname_logging(f):
    def inner( *args ):
        run = f(*args)
        return "function name: " + f.func_name + "\n" + str(run)
    return inner


@time_logging
@fname_logging
def intersection(A, B):
    return [x for x in A if x in A and x in B]

A = [1, 2, 3]
B = [2, 3, 4]
print intersection(A, B)


    

