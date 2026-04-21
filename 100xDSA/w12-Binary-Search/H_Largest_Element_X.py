from bisect import bisect_right
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
    nums.sort()
    for _ in range(q):
        x = inp()
        idx = bisect_right(nums, x) - 1
        if idx < 0:
            print(-1)
        else:
            print(nums[idx])



# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 