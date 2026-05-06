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
    nums = inlt()
    def isSetBit(num, i):
        return (num&(1<<i) != 0)
    ans = 0
    for i in range(32):
        bitSum = 0
        for x in nums:
            if isSetBit(x, i):
                bitSum += 1
        

        if bitSum % 3 != 0:
            if i == 31:
                #sign bit
                ans -= (1<<31)
            else:
                ans |= (1<< i)
        
    print(ans)







# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 