from sys import stdin
input = stdin.readline

#write the functions here with return statement and call it in the print function
def minOfArray(n:int, nums:list) -> int:
    mn = nums[0]
    idx = 0
    for i in range(1, n):
        if nums[i] < mn:
            mn = nums[i]
            idx = i

    print(mn, idx+1)



def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    minOfArray(n, nums)

if __name__ == "__main__":
    solve()