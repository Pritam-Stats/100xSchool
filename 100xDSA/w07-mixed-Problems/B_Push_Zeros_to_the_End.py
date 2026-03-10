'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    nums = list(map(int, input().split())) if n>0 else [] 

    '''  
    Technique: Brute Force
    Intuition: remove if 0 and append new 0
    Time: O(N**2), since remove method is O(n)
    Space: O(1)
    '''

    for i in range(n):
        if nums[i] == 0:
            nums.remove(nums[i])
            nums.append(0)
    print(*nums)

    #---------------------------------------------

    '''     
    Technique: Better 
    Intuition: have an empty arr loop through the array if nonzero, add to the arr and count 0, then add those zeros to the end
    Mistake: 
    Time: O(n)
    Space: O(n)
    ''' 
    nonZero = []
    zeroCount = 0
    for i in range(n):
        if nums[i] != 0:
            nonZero.append(nums[i])
        else:
            zeroCount += 1

    ans = nonZero + [0]*zeroCount   
    print(*ans)
#---------------------------------------------------------------------
    '''  
    Technique: optimal - two pointer
    Intuition: keep a pointer p start at 0; loop through if non zero, keep replacing with p, and update p, then we have p non zero element, then run a second loop from p to n replace the prev val with 0
    Mistake: don't append 0 but replace with the prev values
    Time: O(n)
    Space: O(1)
    ''' 
    p = 0
    for i in range(n):
        if nums[i] != 0:
            nums[p] = nums[i]
            p += 1

    for i in range(p, n):
        nums[i] = 0
    print(*nums)



def solve():
    t = 1
    t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
