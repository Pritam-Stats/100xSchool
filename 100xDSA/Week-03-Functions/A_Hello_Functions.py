from sys import stdin
input = stdin.readline

def solve():
    n = int(input())
    def func(num):
        ans = ["I am learning functions"] * num
        print("\n".join(ans))
    func(n)

if __name__ == "__main__":
    solve()