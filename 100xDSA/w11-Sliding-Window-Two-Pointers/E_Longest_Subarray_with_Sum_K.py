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
    n, x = inmap()

    nums = inlt()

    currLen, maxLen = 0, 0
    l, r = 0, 0

    currSum = 0

    for r in range(n):
        currSum += nums[r]

        while currSum >= x:
            currSum -= nums[l]
            l += 1

        currLen = r - l + 1
        maxLen = max(maxLen, currLen)

    print(maxLen)
# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()