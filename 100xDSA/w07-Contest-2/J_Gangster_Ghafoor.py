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
    n, m = list(map(int, input().split()))
    matrix = [list(map(int, input().split())) for _ in range(n)] 

    # st = erow, scol
    srow, erow, scol, ecol = 0, n-1, 0, m-1

    ans = []
    #top 
    for i in range(erow, srow, -1):
        # if matrix[i][scol] == -1:
        #     print(*ans)
        #     return
        ans.append(matrix[i][scol])

    for i in range(scol, ecol):
        # if matrix[srow][i] == -1:
        #     print(*ans)
        #     return
        ans.append(matrix[srow][i])
    
    for i in range(srow, erow):
        # if matrix[i][ecol] == -1:
        #     print(*ans)
        #     return
        ans.append(matrix[i][ecol])
    
    for i in range(ecol, scol, -1):
        # if matrix[erow][i] == -1:
        #     print(*ans)
        #     return
        ans.append(matrix[erow][i])
    
    ans2 = []
    for num in ans:
        if num == -1:
            print(*ans2)
            return
        ans2.append(num)
    
def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
