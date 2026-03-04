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
    n, m, x = list(map(int, input().split()))
    matrix = [list(map(int, input().split())) for _ in range(n)] 
    # write solution here
    for i in range(n):
        for j in range(m):
            if matrix[i][j] == x:
                return "true"
    return "false"


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
        print(main())

if __name__ == "__main__":
    solve()
