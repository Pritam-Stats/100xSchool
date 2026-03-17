'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
import math
def main():
    n, q, k = map(int, input().split())
    nums = list(map(int, input().split())) 

    def digitSum(num):
        dsum =0
        while num:
            dsum += num%10
            num = num//10
        return dsum
        
    # digitSums = [digitSum(x) for x in nums]
    # print(digitSums)
    ps = [0] * n
    count = 0
    for i in range(n):
        if digitSum(nums[i]) == k:
            count += 1
        ps[i] = count
    

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