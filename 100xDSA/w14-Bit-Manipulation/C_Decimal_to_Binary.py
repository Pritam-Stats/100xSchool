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
    n = inp()
    # print(bin(n)[2:])
    ans = []
    if n == 0:  ##edge case: otherwise highBit will become 0 and loop won't run
        print(0)
        return
    
    highBit = n.bit_length()-1
    for i in range(highBit, -1, -1):
        if (n >> i) & 1:    #same as (1 << i) & n != 0
            ans.append("1")
        else:
            ans.append("0")
    print_fast(''.join(ans))



# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 