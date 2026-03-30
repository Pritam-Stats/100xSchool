'''  
    Author: Pritam
'''
import sys
input = sys.stdin.readline


def main():
    n, q = map(int, input().split())
    s = input().strip()
    v = set(['a', 'e', 'i', 'o', 'u'])
    s= s.lower()

    #contribution
    cv = 0
    cc = 0
    c = [0]*n
    for i in range(n):
        if s[i] in v:
            c[i] = 1
        else:
            c[i] = -1


    #if sum == 0 then balanced
    ps = [0]*n
    pre = 0
    i = 0
    for x in c:
        pre += x
        ps[i] = pre
        i += 1


    for _ in range(q):
        l, r = map(int, input().split())
        l -= 1
        r -= 1
        if l == 0:
            if (ps[r]) == 0:
                print("YES")
            else:
                print("NO")
        else:
            if (ps[r] - ps[l-1]) == 0:
                print("YES")
            else:
                print("NO")


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()


if __name__ == "__main__":
    solve()
