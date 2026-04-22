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
    n, k, t = inmap()

    nums = inlt()

    # sw of size k
    ws = sum(nums[:k])
    cnt = 0
    if ws/k >= t:
        cnt += 1
    for i in range(k, n):
        ws += nums[i]
        ws -= nums[i-k]
        if ws / k >= t:
            cnt += 1
    print(cnt)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
