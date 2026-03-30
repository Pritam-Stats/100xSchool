'''  
    Author: Pritam
'''
import sys
input = sys.stdin.readline


def main():
    n, q = map(int, input().split())
    nums = list(map(int, input().split()))

    # prefix sum
    ps = [0] * n
    currSum = 0
    for i in range(n):
        currSum += nums[i]
        ps[i] = currSum

    # given 1 based indexing

    for _ in range(q):
        l, r = map(int, input().split())
        l -= 1
        r -= 1

        if l == 0:
            num = ps[-1] - ps[r]
            if num%2 != 0:
                print("YES")
            else:
                print("NO")
        else:
            num = ps[-1] - (ps[r] - ps[l-1])
            if num % 2 != 0:
                print("YES")
            else:
                print("NO")


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()


if __name__ == "__main__":
    solve()
