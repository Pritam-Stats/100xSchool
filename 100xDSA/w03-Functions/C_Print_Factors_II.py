from sys import stdin
input = stdin.readline

def solve():
    n = int(input())
    def printFactors(num):
        ans = []
        for i in range(num,0,-1):
            if n%i == 0:
                ans.append(str(i))
        print(" ".join(ans))    #join method only works in str
    printFactors(n)

if __name__ == "__main__":
    solve()