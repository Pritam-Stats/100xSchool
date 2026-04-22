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
    nums = inlt()

    low = max(nums)     #min time needed
    high = sum(nums)    #max time needed

    def possible(arr:list, time:int, k:int)->bool:  #O(n)
        painter = 1
        painted = 0

        for i in range(n):
            if painted + arr[i] <=time:
                painted += arr[i]
            else:
                #new painter
                painter += 1
                painted = arr[i]
        return painter <= k
    
    ans =-1
    while low <= high:
        mid = low + ((high - low)//2)   #O(log (high-low))

        if possible(arr = nums, time = mid, k=k):
            ans = mid
            high = mid -1
        else:
            low = mid + 1
    print(ans)





# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 