from brown_wrappers import timer, name_log


def memoize(f):
    memo={}
    def inner(arg):
        if arg not in memo:
            memo[arg] = f(arg)
            print "memoizing fib(" + str(arg) + ")"
        return memo[arg]
    return inner

@memoize
@timer
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)


#fib = memoize(fib)

print fib(0)
print fib(1)
print fib(2)
print fib(3)
print fib(4)
print fib(5)
print fib(6)

## runtime: O(2^n)

'''

dynamic programming

means of solving a complex problem by solving its
component subproblems just once and storing its solutions


memoization

technique of sotrign solutions to subproblems to avoid recomputation

or

use of caches to retrieve previously computed values to reduce time complexity
of algorithms
'''
