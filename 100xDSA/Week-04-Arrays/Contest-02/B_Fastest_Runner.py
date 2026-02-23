from sys import stdin
input = stdin.readline


def solve():
    # t = int(input())
    # for _ in range(t):
    n = int(input())
    nums = list(map(int, input().split()))

    mx = nums[0]
    for i in range(1, n):
        if nums[i] <= mx:
            mx = nums[i]
            idx = i
    print(idx+1)

if __name__ == "__main__":
    solve()