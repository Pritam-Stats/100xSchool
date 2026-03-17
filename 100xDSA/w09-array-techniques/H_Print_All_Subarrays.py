'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    nums = list(map(int, input().split())) if n>0 else [] 
    # for i in range(n):
    #     for j in range(i, n):
    #         print(*nums[i:j+1])
    # this is slightly efficient both are O(n3) but slicing creates copy; so costs extra memory and slight more time

    '''
    for st in range(n):
        for end in range(st, n):
            for k in range(st, end+1):
                print(nums[k], end= " ")
            print()
    '''

    '''Best way: clean version'''
    for st in range(n):
        for end in range(st, n):
            print(*(nums[k] for k in range(st, end + 1)))

def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()