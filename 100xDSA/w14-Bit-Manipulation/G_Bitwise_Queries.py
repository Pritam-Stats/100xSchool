# ================================
# Author: Pritam
# ================================


import sys
input = sys.stdin.readline
# ---------- Helpers ----------
def ceil(a, b):    ##relation b/w floor division and ceil division
    return (a+b-1)//b
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
    def checkBit(n, i):
        mask = (1<< i)
        if n&mask == 0:
            return "NO"
        else:
            return "YES"

    def setBit(n, i):
        mask = 1<<i
        return (n|mask)

    def unsetBit(n, i):
        mask = ~(1<<i)
        return (n&mask)

    def toggleBit(n, i):
        mask = 1<<i
        return (n^mask)

    ans = []
    for _ in range(q):
        t, i = inmap()
        if t == 1:
            ## check bit
            ans.append(checkBit(n, i))
        elif t == 2:
            ## setbit
            n = setBit(n, i)
            ans.append(str(n))
        elif t == 3:
            ##unset
            n = unsetBit(n, i)
            ans.append(str(n))
        else:
            n = toggleBit(n, i)
            ans.append(str(n))
    
    print('\n'.join(ans))
# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 