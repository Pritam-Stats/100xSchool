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
    n, k = inmap()
    nums = inlt()

    #first window
    s = 0
    mxs = 0
    for i in range(k):
        s += nums[i]

    mxs = s

    for i in range(k, n):
        s += nums[i]
        s -= nums[i-k]
        mxs = max(mxs, s)

    print(mxs)

# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()