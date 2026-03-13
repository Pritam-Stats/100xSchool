'''  
    Author: Pritam
'''
import sys
input = sys.stdin.readline


def main():
    ch = int(input())
    print(chr(ch))


def solve():
    t = 1
    # t = int(input())
    for _ in range(t):
       main()


if __name__ == "__main__":
    solve()
