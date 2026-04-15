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
    for _ in range(q):
        x = inp()

        f = bisect_left(nums, x)
        if f >= n or nums[f] != x:
            print(-1)
        else:
            l = bisect_right(nums, x) - 1   #returns right most insertion point
            print(*[f+1, l+1])

# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 