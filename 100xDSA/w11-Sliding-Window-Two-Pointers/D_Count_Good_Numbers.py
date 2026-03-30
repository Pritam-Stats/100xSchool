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
    n, m, k = inmap()
    nums = inlt()

    good = set(inlt())

    ans = []
    cnt = 0
    for i in range(k):
        if nums[i] in good:
            cnt += 1
    
    ans.append(cnt)

    for i in range(k, n):
        if nums[i] in good:
            cnt += 1
        if nums[i-k] in good:
            cnt -= 1

        ans.append(cnt)

    print(*ans)




# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve() 