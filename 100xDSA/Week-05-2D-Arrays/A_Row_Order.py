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
    # t = int(input())
    for _ in range(t):
        n, m = list(map(int, input().split()))
        array2d = [list(map(int, input().split())) for _ in range(n)]
        # write solution here
        l = []
        for arr in array2d:
            for num in arr:
                l.append(num)
        print(*l)

if __name__ == "__main__":
    solve()
