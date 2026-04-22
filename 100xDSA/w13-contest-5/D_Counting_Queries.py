# ================================
# Author: Pritam
# ================================
from bisect import bisect_left, bisect_right

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
def print_fast(*args):
    sys.stdout.write(" ".join(map(str, args)) + '\n')
# ---------- Solve Function ----------

def solve():
    n, q = inmap()

    nums = inlt()
    nums.sort()
    # t = []
    # x = []
    for _ in range(q):
        t, x = inmap()
        # t.append(ts)
        # x.append(xs)
        l = bisect_left(nums, x)    #first elm
        r = bisect_right(nums, x) - 1   #last elm
        # print(l, r)
        if t == 1:
            print(r-l+1)
        elif t == 2:
            print(l)
        else:
            print(n-(r+1))



    


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 