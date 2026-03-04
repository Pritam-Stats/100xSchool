from sys import stdin
input = stdin.readline

def solve():
    n = int(input())
    
    def nFactors(num):
        # calculates the number of factors
        count = 0
        for i in range(1, num+1):
            if num % i == 0:
                count += 1
        return count
    
    def isPrime(x):
        if nFactors(x) == 2:
            return True
        
    def printPrimes(n):
        primes = []
        for i in range(1,n+1):
            if isPrime(i):
                primes.append(str(i))
        print(" ".join(primes))

    printPrimes(n)

if __name__ == "__main__":
    solve()