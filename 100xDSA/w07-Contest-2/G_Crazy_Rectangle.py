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
    n, m = list(map(int, input().split()))

    num = 1
    useNum = True
    ch = ord("a")

    for _ in range(n):
        row = []

        for _ in range(m):
            if useNum:
                row.append(str(num))

                num += 1
                if num >= 10:
                    num = 1
            else:
                row.append(chr(ch))
                ch += 1
                if ch > ord("z"):
                    ch = ord('a')

            useNum = not useNum
        print("".join(row))


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
        main()


if __name__ == "__main__":
    solve()
