'''  
    Author: Pritam
'''
import sys
input = sys.stdin.readline
write = sys.stdout.write  # add '\n' separately


def main():
    n, k = map(int, input().split())
    nums = list(map(int, input().split()))

    freq = {}
    count = 0
    if k == 0:
        zeroCount = 0
        for x in nums:
            if x == 0:
                count += zeroCount
            zeroCount += 1
        print(count)
        return
    
    
    for x in nums:
        if x % k == 0:
            comp = x//k
            count += freq.get(comp, 0)
        freq[x] = freq.get(x, 0) + 1

    print(count)


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
        main()


if __name__ == "__main__":
    solve()
