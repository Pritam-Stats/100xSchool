'''  
    Author: Pritam
''' 
'''  
    Author: Pritam
''' 
'''  
Problem: prime check optimally
Technique: sqrt
Intuition: run till half of the factor before the opposite rep starts
Mistake: handle the case of num == 1, it should return Not prime
Time: O(sqrt(n))
Space: O(1)
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    # nums = list(map(int, input().split())) if n>0 else [] 
    if n == 1:
        return "NO"
    for d in range(2, int(n**(0.5) + 1)):
        if n % d == 0:
            return "NO"
    return "YES"



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       print(main())

if __name__ == "__main__":
    solve()
