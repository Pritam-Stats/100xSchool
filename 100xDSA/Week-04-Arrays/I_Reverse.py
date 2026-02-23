from sys import stdin
input = stdin.readline


def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    # print(*nums[::-1])  #not in place, this creates a new array

    l, r = 0, n-1
    while l<r:
        nums[l], nums[r] = nums[r], nums[l]
        l += 1
        r -= 1
    print(*nums)


if __name__ == "__main__":
    solve()