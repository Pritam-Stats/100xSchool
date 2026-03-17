'''  
    Author: Pritam
''' 
import sys
input = sys.stdin.readline

def main():
    n = int(input())
    s = input().strip()
    v = set(['a', 'e', 'i', 'o', 'u'])

    ps = [0]*n

    cumSum = 0
    for i in range(n):
        if s[i] in v:
            cumSum += 1
        ps[i] = cumSum


    q = int(input())
    for _ in range(q):
        l, r = map(int, input().split())
        l -= 1
        r -= 1
        if l == 0:
            print(ps[r])
        else:
            print(ps[r] - ps[l-1])


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()

if __name__ == "__main__":
    solve()