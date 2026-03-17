'''  
    Author: Pritam
'''
import sys
input = sys.stdin.readline
print = sys.stdout.write


def main():
    n = int(input())
    nums = list(map(int, input().split())) if n > 0 else []

    for st in range(n):
        currSum = 0
        for end in range(st, n):
            currSum += nums[end]
            print(str(currSum) + "\n")

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()


if __name__ == "__main__":
    solve()
