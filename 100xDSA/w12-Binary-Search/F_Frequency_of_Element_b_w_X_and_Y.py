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
    nums.sort()  # O(n logn)
    for _ in range(q):
        x, y = inmap()
        idx = bisect_left(nums, x)
        idy = bisect_right(nums, y)
        cnt = idy-idx
        print(cnt if cnt > 0 else 0)

    # TC O((n+q) logn)
# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
