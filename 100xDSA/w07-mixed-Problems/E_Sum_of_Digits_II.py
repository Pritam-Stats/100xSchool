'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    num = input().strip()
    nums = list(num)
    ans = 0
    for n in nums:
        ans += int(n)
    print(ans)
    


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
