from sys import stdin
input = stdin.readline

#write the functions here with return statement and call it in the print function
def sumArray(nums:list) -> int:
    return sum(nums)


def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    print(sumArray(nums))

if __name__ == "__main__":
    solve()