'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n = int(input())
    nums = list(map(int, input().split())) if n>0 else [] 
    # write solution here 

    # O(n)
    ans = 0
    for i in range(n):
        prevOccur = i+1
        futureOccur = n-i
        ans += nums[i] * (prevOccur*futureOccur)
    print(ans)




def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()