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


def print_fast(*args):
    sys.stdout.write(" ".join(map(str, args)) + '\n')
# ---------- Solve Function ----------


def solve():
    n, k = inmap()
    nums = inlt()

    low = 1
    high = max(nums)

    def possible(nums, mid, k):
        p = 0
        for i in range(n):
            p += nums[i] // mid
        return p >= k

    ans = 0
    while low <= high:
        mid = low + ((high - low)//2)
        if possible(nums, mid, k):
            ans = mid
            low = mid + 1  # search for a longer len
        else:
            high = mid - 1
    print_fast(ans)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
