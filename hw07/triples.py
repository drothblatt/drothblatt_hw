
## task 1, pyth triples with whatever
def pt(n):
    retL = []
    for a in range(1,n):
        for b in range(a+1,n):
            for c in range(b+1,n):
                if a**2 + b**2 == c**2:
                    retL.append([a, b, c])
    return retL
'''
print pt(3)
print "\n"
print pt(6)
'''

## task 2, pyth triples using list comprehension
def pt2(n):
    #use tuples

    return [(a,b,c)
            for a in range(1,n)
            for b in range(a+1,n)
            for c in range(b+1,n)
            if a**2 + b**2 == c**2] 


print "pt(6): " + str(pt(6))
print "pt2(6): " + str(pt2(6))

'''
steps for a quicksort...
(1) pick a pivot
(2) partition into 2 lists, s.t.
    * all v's < p are LH
    * all v's > p are UH
    * pivot in F.R.P (final resting position)
(3) qSort(LH) + p + qsort(UH)
'''

## task 3, write a qSort using LISTCOMP




