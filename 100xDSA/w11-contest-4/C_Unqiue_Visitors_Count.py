'''  
    Author: Pritam
'''
import sys
input = sys.stdin.readline
write = sys.stdout.write  # add '\n' separately


def main():
    n = int(input())
    nums = list(map(int, input().split())) if n > 0 else []

    seen = set()
    c = [0]*n
    for i, x in enumerate(nums):
        if x in seen:
            c[i] = 0
        else:
            c[i] = 1
        seen.add(x)
    # print(c)
    p = [0]*n
    pre = 0
    i = 0
    for x in c:
        pre += x
        p[i] = pre
        i += 1
    print(*p)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
        main()


if __name__ == "__main__":
    solve()
