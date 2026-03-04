from sys import stdin
input = stdin.readline


def solve():
    n = int(input())
    nums = list(map(int, input().split()))

    twos = nums.count(2)
    ones = nums.count(1)
    zeros = n - (twos + ones)

    ans = [2]*twos + [1]*ones + [0]*zeros
    print(*ans)

if __name__ == "__main__":
    solve()