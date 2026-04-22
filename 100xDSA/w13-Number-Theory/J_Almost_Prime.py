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
    prime_counts = [0]*(n+1)

    for i in range(2, n+1):
        if prime_counts[i] == 0:
            for j in range(i, n+1, i):
                prime_counts[j] += 1
    
    ans = 0

    for i in range(1, n+1):
        if prime_counts[i] == 2:
            ans += 1
    print_fast(ans)



# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 