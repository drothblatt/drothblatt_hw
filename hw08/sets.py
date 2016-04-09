## David Rothblatt
## SoftDev2 pd3
## HW08: List Manipulations
## 2016-04-08

def union(A, B):
    return [x for x in A if x in A and x not in B] + B

def intersection(A, B):
    return [x for x in A if x in A and x in B]

def set_difference(U, A):
    return [x for x in U if x in U and x not in A]

def symmetric_difference(A, B):
    return set_difference(A, B) + set_difference(B, A)

def cartesian_product(A, B):
    return [(x,y) 
            for x in A 
            for y in B ]



A = [1, 2, 3]
B = [2, 3, 4]


print "excepting [1, 2, 3, 4]..."
print union(A, B)

print "expecting [2, 3]..."
print intersection(A, B)

print "expecting [1]..."
print set_difference(A, B)
print "expecting [4]..."
print set_difference(B, A)

print "expecting [1,4]..."
print symmetric_difference(A, B)

print "expecting [(1, 2), (1, 3), (1, 4), (2, 2), (2, 3), (2, 4), (3, 2), (3, 3), (3, 4)]"
print cartesian_product(A, B)
