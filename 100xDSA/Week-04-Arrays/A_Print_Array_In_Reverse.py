from sys import stdin
input = stdin.readline

#write the functions here with return statement and call it in the print function
def revArray(nums:list):
    ans = nums[::-1]
    ans = list(map(str, ans))
    return " ".join(ans)


def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    print(revArray(nums))

if __name__ == "__main__":
    solve()