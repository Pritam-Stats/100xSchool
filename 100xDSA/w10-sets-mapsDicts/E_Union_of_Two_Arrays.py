'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n1 = int(input())
    nums1 = list(map(int, input().split())) if n1>0 else [] 
    n2 = int(input())
    nums2 = list(map(int, input().split())) if n2>0 else [] 
    ans = sorted(set(nums1 + nums2))
    print(len(ans))
    print(*ans)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()