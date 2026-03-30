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
'''
    cnt = 0
    ans = []
    for i in range(0, n-k+1):
        ans.append(len(set(arr[i:i+k])))    #O(N2) tle
    print(*ans)
'''

def solve():
    # Example:
    n, k = inmap()
    arr = inlt()

    mp = {}
    for i in range(k):
        mp[arr[i]] = mp.get(arr[i], 0) + 1
    
    ans = []    
    ans.append(len(mp))

    for i in range(k, n):
        mp[arr[i]] = mp.get(arr[i], 0) + 1


        mp[arr[i-k]] -= 1

        if mp[arr[i-k]] == 0:
            del mp[arr[i-k]]
        
        ans.append(len(mp))
        
    print(*ans)


    



# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()

    for _ in range(t):
        solve()
