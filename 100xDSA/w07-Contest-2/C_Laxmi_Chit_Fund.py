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
    total = sum(nums)
    maxx = max(nums)
    minn = min(nums)
    avg = total//n
    ans = [total, maxx, minn, avg]
    print(*ans)



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
