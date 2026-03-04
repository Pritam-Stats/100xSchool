from sys import stdin
input = stdin.readline
n, m = list(input().split())    ## stored as string
n_last, m_last = int(n[-1]), int(m[-1])
print(n_last+m_last)