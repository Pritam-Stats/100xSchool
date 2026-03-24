'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n = int(input())
    nums1 = list(map(int, input().split())) if n>0 else [] 
    m = int(input())
    nums2 = list(map(int, input().split())) if m>0 else [] 
    
    d1 = {}
    for x in nums1:
        d1[x] = d1.get(x, 0) + 1

    d2 = {}
    for y in nums2:
        d2[y] = d2.get(y, 0) + 1
    
    ans = {}
    for x in d1:
        if x in d2:
            ans[x] = min(d1[x], d2[x])

    print(sum(ans.values()))
    inter = []
    for x in ans:
        inter += [x]*ans[x]
    print(*sorted(inter))




def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()