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
    n, m = list(map(int, input().split()))
    matrix = [list(map(int, input().split())) for _ in range(n)]

    # top to bottom - Even
    # bottom to top - Odd

    # outer loop - column
    arr = []
    for j in range(m):
        for i in range(n):
            if j % 2 == 0:
                arr.append(matrix[i][j])
            else:
                i = n- i -1
                arr.append(matrix[i][j])
    print(*arr)

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
        main()


if __name__ == "__main__":
    solve()
