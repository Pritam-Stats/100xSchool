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
    queries = [inp() for _ in range(q)]

    n = max(queries)

    #apply sieve on n
    isPrime = [True]*(n+1)
    isPrime[0] = isPrime[1] = False

    i = 2
    while i*i <= n:
        if isPrime[i]:
            for j in range(i*i, n+1, i):
                isPrime[j] = False
        i +=1 
    
    ans = []
    for x in queries:
        if isPrime[x]:
            ans.append("YES")
        else:
            ans.append("NO")
    print_fast('\n'.join(ans))


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 