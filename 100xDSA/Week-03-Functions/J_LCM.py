from sys import stdin
input = stdin.readline

def gcd(a, b):
    while b:
        a, b = b, a%b
    return a
    
def lcm(a, b):
    if a == 0 or b == 0:
        return 0
    ans = abs(a*b)//gcd(a, b)
    return ans
    
def solve():
    # n = int(input())
    a, b = list(map(int, input().split()))
    print(lcm(a, b))

if __name__ == "__main__":
    solve()

