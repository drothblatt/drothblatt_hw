

def inc(x):
    return x + 1

f = inc

#print f(10)


def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

#b=h(1)

def f(x):
    def g(y):
        return x + y
    return g

a=f(1)
b=h(1)


def repeat(str_):
    def iterations(int_):
        return str_ * int_ 
    return iterations

r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2) # -> hellohello
print r2(2) # -> goodbyegoodbye
print repeat('cool')(3) # -> coolcoolcool

x = "."
y = repeat(x)
z = y(3)
ellipse = z 
print ellipse

'''
print "mary" * 2
print "david" * 10
print "." * 3
'''
