'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n, target = map(int, input().split())
    nums = list(map(int, input().split())) if n>0 else [] 

    p = set()

    pre = 0
    for x in nums:
        pre += x
        if pre == target:
            print("YES")
            return
        comp = pre - target
        if comp in p:
            print("YES")
            return
        p.add(pre)
    print("NO")


    



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()