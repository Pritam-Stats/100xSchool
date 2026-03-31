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
    # Solve Here
    n, k = inmap()
    nums = inlt()

    minLen = n+1
    l, r = 0, 0

    currSum = 0

    for r in range(n):
        currSum += nums[r]

        while currSum > k:
            #valid- try to shrink to find the shortest
            minLen = min(minLen, r-l+1)
            
            currSum -= nums[l]
            l += 1
    
    print(minLen if minLen <= n else -1)
    


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
