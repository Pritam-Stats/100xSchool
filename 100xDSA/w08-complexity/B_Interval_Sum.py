'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    # n = int(input())
    l, r = list(map(int, input().split()))
    
    # [1 - r] - [1-l] + l (since l is inclusive)
    ans = ((r*(r+1)//2) - (l*(l+1)//2)) + l
    print(ans)


def solve():
    t = 1
    t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
