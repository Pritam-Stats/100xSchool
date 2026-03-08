'''  
    Author: Pritam
'''
'''  
    Author: Pritam
''' 
'''  
Problem: cf 100x
Technique: 
Intuition: 
Mistake: mistake in handling the l == r case, l == r will return 1 when both are inclusive so not always 0
Time: O(q)
Space: O(1)
''' 


import sys
input = sys.stdin.readline


def main():
    # n = int(input())
    t, l, r = list(map(int, input().split()))

    if l > r:
        return 0
    if t == 1:
        if l == r:
            return 0
        return r-l-1
    if t == 2 or t == 3:
        return r-l
    if t == 4: 
        return r - l + 1


def solve():
    q = 1
    q = int(input())
    for _ in range(q):
       print(main())


if __name__ == "__main__":
    solve()
