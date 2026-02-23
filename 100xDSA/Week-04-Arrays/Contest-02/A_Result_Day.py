from sys import stdin
input = stdin.readline


def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    p = int(input())

    passed = 0
    for m in nums:
        if m>=p:
            passed += 1
    failed = n - passed
    print(f"Pass: {passed}\nFail: {failed}")



if __name__ == "__main__":
    solve()