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
    sys.stdout.write(" ".join(map(str, args)) + "\n")
# ---------- Solve Function ----------

def solve():
    n = inp()

    # str_nums = [str(x) for x in range(n+1)]

    # 1. Build the spf array
    spf = list(range(n+1))
    i = 2
    while i*i <= n+1:
        if spf[i] == i:
            for j in range(i*i, n+1, i):
                # spf[j] = min(spf[j], i)
                if spf[j] == j: 
                    spf[j] = i  #faster
        i += 1  

    for num in range(1, n+1):
        divisors = [1]
        currNum = num

        while currNum > 1:
            p = spf[currNum]
            count = 0
            while currNum%p == 0:
                count +=1
                currNum //= p


            new_divs = []
            for d in divisors:
                for k in range(1, count + 1):
                    new_divs.append(d* (p**k))
            divisors.extend(new_divs)

        print_fast(*sorted(divisors))


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 


        # new_divs = []
        # p_pow = p
        # for _ in range(count):
        #     for d in divisors:
        #         new_divs.append(d*p_pow)
        #     p_pow *=p
        # divisors.extend(new_divs)

        # divisors.sort()
        # res = " ".join(str_nums[d] for d in divisors)  # Added a space here
        # Bypassing print_fast entirely for maximum speed
        # sys.stdout.write(res + "\n")
