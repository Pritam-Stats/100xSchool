'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    nums = list(map(int, input().split()))
    d = int(input())

    '''  
        Author: Pritam
    ''' 
    '''  
    Technique: Brute Force
    Intuition: Have a new array and split the range
    Mistake: handling n==0 case in wrong way, have to read nums an empty or return if n == 0
    Time: O(n)
    Space: O(n)
    ''' 
    ans = []
    for i in range(d, n):
        ans.append(nums[i])

    for i in range(d):
        ans.append(nums[i])

    print(*ans)

    


def solve():
    t = 1
    t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
