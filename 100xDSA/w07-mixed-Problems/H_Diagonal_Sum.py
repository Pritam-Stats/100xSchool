'''  
    Author: Pritam
''' 
'''  
Problem: 
Technique: 
Intuition: 
Mistake: 
Time: # write solution here
Space: 
''' 

import sys
input = sys.stdin.readline
def main():
    n = int(input())
    matrix = [list(map(int, input().split())) for _ in range(n)] 
    # write solution here
    pd = 0
    for i in range(n):
        pd += matrix[i][i]
    print(pd)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
