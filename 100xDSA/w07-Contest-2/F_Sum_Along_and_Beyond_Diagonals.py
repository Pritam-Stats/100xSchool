'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

DEBUG = False

def debug(*args, **kwargs):
    if not DEBUG:
        return
    print("----- DEBUG -----", file=sys.stderr)
    for arg in args:
        print(repr(arg), file=sys.stderr)
    for key, value in kwargs.items():
        print(f"{key} = {repr(value)}", file=sys.stderr)
    print("-----------------", file=sys.stderr)

def main():
    n = int(input())
    matrix = [list(map(int, input().split())) for _ in range(n)] 
    # write solution here
    totalSum = 0
    dSum = 0
    for i in range(n):
        totalSum += sum(matrix[i])
    
    for i in range(n):
        dSum += matrix[i][i]
        j = n-i-1
        if i !=j:
            dSum += matrix[i][j]

    ans = [dSum, totalSum-dSum]
    print(*ans)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
