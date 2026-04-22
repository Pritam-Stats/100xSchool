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
    qns = []
    qks = []
    for _ in range(q):
        n, k = inmap()
        qns.append(n)
        qks.append(k)
    n = max(qns)
    
    spf = list(range(n+1))

    i = 2
    while i*i <= n:
        if spf[i] == i:
            for j in range(i*i, n+1, i):
                if spf[j] == j:
                    spf[j] = i
        i += 1

    res = []
    for n, k in zip(qns, qks):
        cnt = 0
        ans = -1

        while n > 1:
            cnt += 1
            if cnt == k:
                ans = spf[n]
                break
            n //= spf[n]
        res.append(str(ans))
    
    print_fast('\n'.join(res))


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 