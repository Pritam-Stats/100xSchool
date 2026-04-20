# https://codeforces.com/group/4vcXCPx8NY/contest/686558/problem/G
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
    n = inp()
    # sqrt(n)

    factors = {}
    d = 2
    while d*d <= n:
        if n%d == 0:
            while n % d == 0:
                factors[d] = factors.get(d, 0) + 1
                n //= d
        d += 1
    
    if n>1:
        factors[n] = factors.get(n, 0) + 1
    ans = []
    for k, v in factors.items():
        ans.append(str(k)+"^"+str(v))
    print(*ans)



# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
