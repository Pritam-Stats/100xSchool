from sys import stdin
input = stdin.readline

def hcf(a, b):
    # r = 1
    # while r:
    #     r = a%b
    #     a, b = b, r
    # return a
    ans = 1
    for i in range(1, max(a, b)+1):
        if a%i == 0 and b%i ==0:
            ans = i
    return ans

def solve():
    a, b = list(map(int, input().split()))
    if a > b:
        pass
    else:
        a, b = b, a
    print(hcf(a, b))

if __name__ == "__main__":
    solve()