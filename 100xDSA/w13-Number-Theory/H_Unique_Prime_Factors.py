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

    count =0
    temp = n
    # prime_factors = []
    d = 2
    while d*d <= temp:
        if temp % d == 0:   #two is the first prime
            count += 1
            # prime_factors.append(d)
            while temp %d == 0:
                temp //= d  #this loop will always break down till the next prime
        d += 1
    
    if temp > 1:
        # prime_factors.append(d)
        count += 1

    print_fast(count)



# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 