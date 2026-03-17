'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n, q = map(int, input().split())
    nums = list(map(int, input().split()))

    sqNums = list(map(lambda x: x**2, nums))


    ps = [0] * n
    cumSum = 0
    for i in range(n):
        cumSum += sqNums[i]
        ps[i] = cumSum

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