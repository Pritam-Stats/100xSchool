'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    # nums = list(map(int, input().split())) if n>0 else [] 

    print(n*(n+1)//2)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
