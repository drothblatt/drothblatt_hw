## David Rothblatt
## SoftDev2 pd 3
## Lab Work - List Comprehension
## 2016-03-31

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
INTEGERS ="0123456789"
SPEC_CHARS = ".?!&#,;:-_*"

def checkMinThreshold(password):
    UCs =  [ x for x in password if x in UC_LETTERS ]  
    LCs =  [ x for x in password if x in LC_LETTERS ]  
    INTs = [ x for x in password if x in INTEGERS ]  
    if ( len(UCs) > 0 and len(LCs) > 0 and len(INTs) > 0):
        return True
    return False

print "checkMinThreshold: "
print "expecting True...: "  + str( checkMinThreshold("myNoobPass1234") )
print "expecting False...: " + str( checkMinThreshold("15869") ) 
print "expecting False...: " + str( checkMinThreshold("CAPSLOCK") ) 
print "expecting False...: " + str( checkMinThreshold("hellolowercase") )

def checkPasswordStrength(password):
    UCs =  [ x for x in password if x in UC_LETTERS ]  
    LCs =  [ x for x in password if x in LC_LETTERS ]  
    INTs = [ x for x in password if x in INTEGERS   ]
    SCs =  [ x for x in password if x in SPEC_CHARS ]
    rating = 0
    
    if len(UCs) > 0 and len(LCs) > 0: 
        rating += int (  (  len(LCs)/ float(len(UCs))  )  )
    elif len(LCs) == 0:
        rating += 1
    elif len(UCs) == 0:
        rating += 1
    print rating
    
    if len(INTs) > 0:
        if ( len(INTs) / float ( len(LCs) ) ) > 0.3:
            rating += 2
        else:
            rating += 1
    print rating
            
    if len(SCs) > 0:
        rating += 1
    print rating

    if rating > 10:
        rating = 10
    return rating


print "expecting 7...: "  + str( checkPasswordStrength("!myNoobPass1234&") )

    
'''

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

'''
