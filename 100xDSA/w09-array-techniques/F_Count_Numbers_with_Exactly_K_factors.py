'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n, q, k = map(int, input().split())
    nums = list(map(int, input().split())) 

    def countFactors(n):
        count = 0
        for d in range(1, int(n**0.5) + 1):
            if n%d == 0:
                count += 2
            if d*d == n:
                count -= 1
        return count
    
    ps = [0] * n
    cumSum = 0
    for i in range(n):
        if countFactors(nums[i]) == k:
            cumSum += 1
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