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
    count = 0
    for x in nums:
        comp = target - x
        if comp in seen:
            count += seen[comp]
        seen[x] = seen.get(x, 0) + 1
    print(count)



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()