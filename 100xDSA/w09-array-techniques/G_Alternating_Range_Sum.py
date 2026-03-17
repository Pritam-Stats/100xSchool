'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n, q = map(int, input().split())
    nums = list(map(int, input().split())) 

    for i in range(1, n, 2):
        nums[i] = -1*nums[i]


    ps = [0]* n

    cumsum = 0
    for i in range(n):
        cumsum += nums[i]
        ps[i] = cumsum

    for _ in range(q):
        l, r = map(int, input().split())

        l -= 1
        r -= 1

        if l%2 == 0:
            if l == 0:
                print(ps[r])
            else:
                print(ps[r] - ps[l-1])
        else:
            print(-1* (ps[r] - ps[l-1]))


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()