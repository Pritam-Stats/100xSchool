'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    '''  
    Technique: simple loop scanning, 
    Intuition: if we found increasing order fails means rotated
    Mistake: 
    Time: O(n)
    Space: O(1)
    ''' 
    n = int(input())
    nums = list(map(int, input().split())) if n>0 else [] 
    
    for i in range(n-1):
        if nums[i] > nums[i+1]:
            return i+1
    return 0


def solve():
    t = 1
    t = int(input())
    for _ in range(t):
       print(main())

if __name__ == "__main__":
    solve()
