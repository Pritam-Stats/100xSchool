'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n, target = map(int, input().split())
    nums = list(map(int, input().split())) if n>0 else [] 

    p = {}
    pre = 0
    count = 0
    for x in nums:
        pre += x
        if pre == target:
            count += 1  #subarray with l == 0
        comp = pre - target
        if comp in p:
            count += p[comp]
        p[pre] = p.get(pre, 0) + 1
    print(count)

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()