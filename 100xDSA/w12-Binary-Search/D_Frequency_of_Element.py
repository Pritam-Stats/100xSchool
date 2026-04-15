from bisect import bisect_left, bisect_right
# ================================
# Author: Pritam
# ================================


import sys
input = sys.stdin.readline
# ---------- Helpers ----------


def inp():
    return int(input())


def inlt():
    return list(map(int, input().split()))


def ins():
    return input().strip()


def inmap():
    return map(int, input().split())
# ---------- Solve Function ----------


def solve():
    n, q = inmap()
    nums = inlt()
    nums.sort() # O(n logn)
    for _ in range(q):
        x = inp()
        l = bisect_left(nums, x)
        r = bisect_right(nums, x) - 1

        print(r-l+1)

    # TC O((n+q) logn)
# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
