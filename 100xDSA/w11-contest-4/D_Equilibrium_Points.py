'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n = int(input())
    nums = list(map(int, input().split())) if n>0 else [] 

    total = sum(nums)
    lsum = 0
    count = 0

    for x in nums:
        lsum += x
        if lsum == total - lsum + x:
            count += 1
    print(count)

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()