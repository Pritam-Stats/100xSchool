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
    q = inp()
    nums = [inp() for _ in range(q)]
    n = max(nums)
    spf = list(range(n + 1))
    i = 2
    while i*i <= n:
        if spf[i] == i:
            for j in range(i*i, n+1, i):
                if spf[j] == j:
                    spf[j] = i
        i += 1
    
    factors = []
    for x in nums:
        line_factors = []
        while x > 1:
            p = spf[x]
            e = 0
            while x % p == 0:
                x //= p
                e += 1
            line_factors.append(f"{p}^{e}")
        factors.append(" ".join(line_factors))

    print_fast('\n'.join(factors))


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 