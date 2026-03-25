'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n = int(input())
    nums = list(map(int, input().split())) if n>0 else [] 



    ms = 1
    streak = 1
    for i in range(n-1):
        if nums[i] == nums[i+1]:
            streak += 1
            ms = max(ms, streak)
        else:
            streak = 1
    print(ms)



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()