'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

'''  
    Author: Pritam
''' 
'''  
Problem: return k-th factor 
Technique: similar to storing factor but using sqrt n then another sqrt n loop in reverse to have the factors in sorted order
Intuition: do not store the factors since it's not needed keep a count and return when reach k
Mistake: handling the second loop
Time: O(sqrt n)
Space: 1
'''     

def main():
    n, k = list(map(int, input().split()))

    sqrt = int((n)**0.5)
    count = 0
    for d in range(1, sqrt+1):
        if n % d == 0:
            count += 1
        # perfect sq case will be counted in this loop
            if count == k:
                return d
    
    # second half
    for d in range(sqrt, 0, -1):
        if n%d == 0 and d*d != n:   #avoiding perfect sq
            count += 1

            if count == k:
                return n//d
    return -1




def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       print(main())

if __name__ == "__main__":
    solve()