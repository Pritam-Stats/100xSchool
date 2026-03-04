from sys import stdin
input = stdin.readline


def solve():
    n = int(input())    #even
    nums = list(map(int, input().split()))

    m1 , m2 = (n//2) -1, n//2
    ans = []
    while m2 < n:
        ans.append(nums[m1])
        ans.append(nums[m2])
        m1 -= 1
        m2 += 1
    print(*ans)

if __name__ == "__main__":
    solve()