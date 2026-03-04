from sys import stdin
input = stdin.readline


def solve():
   
    n = int(input())
    nums = list(map(int, input().split()))

    if nums.count(nums[0]) == n:
        print("YES")
    else:
        print("NO")

if __name__ == "__main__":
    solve()