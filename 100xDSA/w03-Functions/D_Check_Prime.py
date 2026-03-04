from sys import stdin
input = stdin.readline

def solve():
    num = int(input())

    def factors(num):
        count = 0
        for i in range(1, num+1):
            if num%i == 0:
                count += 1
        return count

    def isPrime(n: int):
        # a prime num has only two factors 1 and itself, 1 is not a prime
        print("Prime" if factors(n) == 2 else "Not Prime")

    isPrime(num)
if __name__ == "__main__":
    solve()