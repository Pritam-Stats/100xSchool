# ================================
# Author: Pritam
# ================================


import sys
input = sys.stdin.readline
# ---------- Helpers ----------


def ceil(a, b):  # relation b/w floor division and ceil division
    return (a+b-1)//b


def inp():
    return int(input())


def inlt():
    return list(map(int, input().split()))


def ins():
    return input().strip()


def inmap():
    return map(int, input().split())


def print_fast(*args):
    sys.stdout.write(" ".join(map(str, args)) + '\n')
# ---------- Solve Function ----------


def f(n: int, i: int, a: list, path: list):
    if i == n:
        print_fast(*path)
        return

    path.append(a[i])
    f(n, i+1, a, path)
    path.pop()

    f(n, i+1, a, path)


def main():
    n = inp()
    a = inlt()

    f(n, i=0, a=a, path=[])


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        main()
