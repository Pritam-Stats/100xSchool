from sys import stdin
input = stdin.readline


def solve():
    n = int(input())
    
    def nFactors(x):
        count = 0
        for i in range(1, x+1):
            if x%i == 0:
                count += 1
        return count
    
    almostPrime = []
    for i in range(1, n+1):
        if nFactors(i) <= 4:
            almostPrime.append(i)
    
    print(*almostPrime)
    

if __name__ == "__main__":
    solve()