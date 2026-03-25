'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n, target = map(int, input().split())
    nums = list(map(int, input().split())) if n>0 else [] 
    # write solution here   
    p = {}
    pre = 0

    for i, x in enumerate(nums):
        pre += x
        if pre == target:
            l = 0+1
            r = i + 1
            print(l, r)
            return
        comp = pre - target
        if comp in p:
            l = p[comp] + 1 + 1
            r = i+1
            print(l, r)
            return 
        p[pre] = i
    print(-1)





def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()