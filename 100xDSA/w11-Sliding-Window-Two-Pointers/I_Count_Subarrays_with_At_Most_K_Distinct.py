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

    cnt = 0
    freq = {}

    l, r = 0, 0

    for r in range(n):
        freq[nums[r]] = freq.get(nums[r], 0) + 1

        while len(freq) > k:
            freq[nums[l]] -= 1
            if freq[nums[l]] == 0:
                del freq[nums[l]]

            l += 1
        cnt += (r-l+1)

    print(cnt)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
