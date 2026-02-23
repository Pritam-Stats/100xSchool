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

def solve():
    t = 1
    t = int(input())
    for _ in range(t):
        n = int(input())
        nums = list(map(int, input().split()))
        ans = 0
        for num in nums:
            debug(num = num, ans = ans)
            ans = num^ans
            debug(ans = ans)
        debug(ans = ans)
        print(ans)



if __name__ == "__main__":
    solve()
