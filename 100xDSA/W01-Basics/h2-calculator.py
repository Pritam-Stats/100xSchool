from sys import stdin
input = stdin.readline

n, m = list(map(int, input().split()))

print(f"{n} + {m} = {n+m}")
print(f"{n} - {m} = {n-m}")
print(f"{n} * {m} = {n*m}")
print(f"{n} / {m} = {n//m}")
print(f"{n} % {m} = {n%m}")