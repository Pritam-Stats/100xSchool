'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    nums = list(map(int, input().split()))


    # only even based indices contribute to the answer, so we can make the odd id based values 0
    for i in range(0, n, 2):
        nums[i] = 0

    # prefix sum
    ps = [0] * n
    currSum = 0
    for i in range(n):
        currSum += nums[i]
        ps[i] = currSum

    ## given 1 based indexing
    q = int(input())
    for _ in range(q):
        l, r = map(int, input().split())
        l -= 1
        r -= 1

        if l == 0:
            print(ps[r])
        else:
            print(ps[r] - ps[l-1])



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()