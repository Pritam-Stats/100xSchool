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
    # =========== Better Solution by GPT ===============
    
    n, m = map(int, input().split())
    a = [list(map(int, input().split())) for _ in range(n)]

    res = []

    res += a[0]                   #append doesn't work the desired way but this works because [] + [1,2,3] = [1,2,3]      # top row
    res += [a[i][m-1] for i in range(1, n)]      # right col

    if n > 1:
        res += a[n-1][m-2::-1]                   # bottom row

    if m > 1:
        res += [a[i][0] for i in range(n-2, 0, -1)]  # left col

    print(res)



    #============= My solution (Accepted) ==================
    # n, m = list(map(int, input().split()))
    # matrix = [list(map(int, input().split())) for _ in range(n)] 

    # arr = []
    # def l2r():
    #     for j in range(m):
    #         arr.append(matrix[0][j])
    # def t2b():
    #     for i in range(1,n):
    #         arr.append(matrix[i][m-1])
    # def r2l():
    #     for j in range(m-2, -1, -1):
    #         arr.append(matrix[n-1][j])
    # def b2t():
    #     for i in range(n-2, 0, -1):
    #         arr.append(matrix[i][0])
    # l2r()
    # t2b()
    # if n>1:
    #     r2l()

    # if m>1:
    #     b2t()

    # print(*arr)

def solve():
    t = 1
    t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()
