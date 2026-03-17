'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
DEBUG = False

def debug(*args, **kwargs):
    if not DEBUG:
        return
    print("----- DEBUG -----", file=sys.stderr)
    for arg in args:
        print(repr(arg), file=sys.stderr)
    for key, value in kwargs.items():
        print(f"{key} = {repr(value)}", file=sys.stderr)
    print("-----------------", file=sys.stderr)

def main():
    n = int(input())
    nums = list(map(int, input().split())) if n>0 else [] 
    # calculate prefix sum and store in an array
    p = [0]*n
    currSum = 0

    for i in range(n):
        currSum += nums[i]
        p[i] = currSum

    #prefix sum array prepared
    debug(prefix = p)

    q = int(input())
    for _ in range(q):
        l, r = map(int, input().split())    #1 based
        debug(l1= l, r1 = r)
        l -= 1
        r -= 1
        debug(l= l, r = r)
        if l == 0:
            print(p[r])
        else:
            debug(pr = p[r], pl = p[l])
            print(p[r] - p[l-1])




def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()