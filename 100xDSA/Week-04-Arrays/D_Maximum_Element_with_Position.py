from sys import stdin
input = stdin.readline

def maxElem(n, nums):
    mx = nums[0]
    idx = 0
    for i in range(1, n):
        if nums[i]> mx:
            mx = nums[i]
            idx = i
    print(mx, idx+1)

def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    maxElem(n, nums)

if __name__ == "__main__":
    solve()