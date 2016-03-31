a = [x for x in range(8)]

b = [x*x for x in range(8)]

c = [ (x, x*x, x*x*x) for x in range(8) ]

print a
print b
print c

p="myNoobPass1234"
[x for x in p]  
[x for x in "1234"] 


UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lc_letters="abcdefghijklmnopqrstuvwxyz"
integers ="123456789"

d = [ x for x in p if x in UC_LETTERS ]  

e = [ 1 for x in p if x in UC_LETTERS ]  

f = [ 1 if x in UC_LETTERS else 0 for x in p ] 

print d
print e
print f


def checkPassword(password):
    letterList =  [ "UC" if x in UC_LETTERS else "int" if x in integers else 0 for x in p ]
    print letterList

checkPassword(p)
    
