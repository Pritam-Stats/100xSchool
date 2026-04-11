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
# ---------- Solve Function ----------

def solve():
    n, q = inmap()
    nums = inlt()

    for _ in range(q):
        x = inp()
        l, r = 0, n-1
        ans = -1
        while l<=r:
            mid = (l+r)//2
            if nums[mid] == x:
                ans = mid+1
                break
            elif nums[mid] > x:
                r = mid -1
            else:
                l = mid + 1

        print(ans)

    '''
        TC: O(q*log n)
    '''

    


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 