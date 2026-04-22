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
    n, q = inmap()
    primes = [True]*(n+1)
    primes[0] = primes[1] = False

    i = 2
    while i*i <= n:
        if primes[i]:
            for j in range(i*i, n+1, i):
                primes[j] = False
        i += 1

    # prefix sum
    ps = [0]*(n+1)
    currSum = 0
    for i in range(n+1):
        currSum += primes[i]
        ps[i] = currSum
    # print(ps)
    # return

    for _ in range(q):
        l, r = inmap()
        print_fast(ps[r] - ps[l-1])




# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
