'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    # nums = list(map(int, input().split())) if n>0 else [] 
    cnt = 0
    for d in range(1, int(n**(0.5)) + 1):
        if n%d == 0:
            cnt += 2    # for 12 sqrt+1 will calculate till the 3; 1 2 3, [4, 6, 12] this will be a others

            if d*d == n:
                cnt -= 1    #like for 36, [1, 2, 3, 4, 6,] 6, 9, 12, 18, 36; will check till 6 in case of perfect sqs we have to minus the double
    print(cnt)



    


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
