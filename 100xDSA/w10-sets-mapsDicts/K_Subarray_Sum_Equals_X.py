'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n, target = map(int, input().split())
    nums = list(map(int, input().split())) if n>0 else [] 

    ps = [0]*n
    cs = 0
    for i in range(n):
        cs += nums[i]
        ps[i] = cs

    #two sum on ps
    seen = set()
    for x in ps:
        comp = target - x
        if comp in ps:
            print("YES")
            return
        seen.add(x)
    print("NO")
    



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()