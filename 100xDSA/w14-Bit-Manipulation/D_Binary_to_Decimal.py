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
    b = ins()
    ## HORNER'S METHOD
    ans = 0
    for x in b:
        ans = (ans << 1) | int(x)  ##left shift will do 2x then add 1 or 0
    print(ans)



    # ans = 0
    # for i, x in enumerate(b):
    #     p = len(b) - i -1
    #     ans += int(x) * (1 << p)
    # print(ans)

# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 