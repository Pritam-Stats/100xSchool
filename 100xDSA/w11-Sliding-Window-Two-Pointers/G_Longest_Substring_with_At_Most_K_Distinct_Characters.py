
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
    s = ins()

    l, r = 0, 0
    maxLen = 0

    freq = {}
    for r in range(n):
        freq[s[r]] = freq.get(s[r], 0) + 1

        while len(freq) > k:
            freq[s[l]] -= 1
            if freq[s[l]] == 0:
                del freq[s[l]]
            l += 1
        maxLen = max(maxLen, r - l + 1)

    print(maxLen)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
