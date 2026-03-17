'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline
write = sys.stdout.write     #add '\n' separately

def main():
    n, k = map(int, input().split())
    nums = list(map(int, input().split())) if n>0 else [] 
    # write solution here 
    
    #typical sliding window problem
    # first window
    currSum = sum(nums[:k])
    maxSum = currSum

    #move the window by adding one element and removing 1 element
    # first k elem is done
    for i in range(k, n):
        currSum += nums[i]
        currSum -= nums[i-k]
        maxSum = max(maxSum, currSum)
    print(maxSum)



def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()