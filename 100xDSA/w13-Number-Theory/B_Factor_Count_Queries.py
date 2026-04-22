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
    queries = []
    for _ in range(q):
        x = inp()
        queries.append(x)
    
    n = max(queries)
    counts = [0]*(n+1)
    for i in range(1, n+1):
        for j in range(i, n+1, i):
            counts[j] += 1

    # for i in queries:
        # print(counts[i])
    ans = [str(counts[i]) for i in queries]

    # sys.stdout.write("\n".join(ans) + '\n')  
    print_fast('\n'.join(ans))  



# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 