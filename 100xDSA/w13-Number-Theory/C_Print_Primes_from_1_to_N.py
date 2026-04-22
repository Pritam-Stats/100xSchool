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
    n = inp()
    #sieve
    isprime = [True]*(n+1)
    isprime[0] = isprime[1] = False
    i = 2
    while i*i <= n:
        if isprime[i]:
            for j in range(i*i, n+1, i):
                isprime[j] = False
        i += 1

    primes = [str(x) for x in range(n+1) if isprime[x] == True]

    print_fast(*primes)
    print_fast(len(primes))


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 