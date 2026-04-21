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
    stalls = inlt()

    min_gap = 0
    max_gap = (stalls[-1]) - stalls[0]
    # gaps = list(range(min_gap, max_gap+1))    #we don't need this

    def isPossible(stalls, gap, k):
        cowsPlaced = 1
        prevPos =stalls[0]
        for i in range(1, n):
            if stalls[i] - prevPos >= gap:
                cowsPlaced += 1
                prevPos = stalls[i]
        return cowsPlaced >= k
    
    # BS on gaps
    l, r = 0, max_gap
    ans = -1
    while l<=r:
        m = (l+r)//2
        #check if this gap is possible
        if isPossible(stalls, gap=m, k=k):
            ans = m
            l = m+1
        else:
            r = m-1
    print(ans)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 