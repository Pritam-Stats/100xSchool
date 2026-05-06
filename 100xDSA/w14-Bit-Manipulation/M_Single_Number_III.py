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


def solve():
    n = inp()
    nums = inlt()

    # column bit count
    total_xor = 0
    for x in nums:
        total_xor ^= x

    # find the first setbit
    first_setBitNum = total_xor & -(total_xor)  # remember this formula
    # this is the point of difference
    num1 = 0
    num2 = 0
    for x in nums:
        if (x & first_setBitNum) == 0:
            num2 ^= x
        else:
            num1 ^= x

    print(*sorted([num1, num2]))


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
