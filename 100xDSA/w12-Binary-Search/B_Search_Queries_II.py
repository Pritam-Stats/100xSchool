from bisect import bisect_left

# ================================
# Author: Pritam
# ================================

'''
    Bisect expects the array in increasing order
'''

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
    nums.reverse()

    for _ in range(q):
        x = inp()
        idx = bisect_left(nums, x)
        if idx >= n or nums[idx] != x:
            print(-1)
        else:
            print(n-idx -1 + 1)    #convert to original 1-based idx


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 