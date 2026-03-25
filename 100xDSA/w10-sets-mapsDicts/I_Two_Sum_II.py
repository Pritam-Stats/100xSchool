'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n, target = map(int, input().split())
    nums = list(map(int, input().split())) if n>0 else [] 

    seen = {}
    for i, x in enumerate(nums):
        comp = target - x
        if comp in seen:
            print(seen[comp]+ 1, i+ 1)
            return
        seen[x] = i
    print(-1)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()