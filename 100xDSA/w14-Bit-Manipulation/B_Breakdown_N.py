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

    #check ith bit and if 1 then add 1<<i
    ans = []
    for i in range(62, -1, -1):
        #check ith bit
        if (1 << i) & n != 0:
            ans.append(1 << i)
    print_fast(*ans)

### 2nd Approach - Highest bit
    # ans = []
    # while n > 0:
    #     maxPower = 1 << (n.bit_length() - 1)
    #     ans.append(maxPower)

    #     n -= maxPower
    # print_fast(*ans)


## LOWEST bit Approach
    # ans = []
    # while n>0:
    #     lowBit = n&-n
    #     ans.append(lowBit)

    #     n -= lowBit
    # ans.reverse()



    # b = bin(n)[2:]
    # ans = []
    # for i in range(len(b)):
    #     if b[i] == "1":
    #         power = len(b) - i - 1
    #         ans.append(str(1<<power))
    
    # print_fast(*ans)




# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 