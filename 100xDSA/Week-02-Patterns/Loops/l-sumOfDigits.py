from sys import stdin, stdout
input = stdin.readline
out = stdout.write

n = int(input())
digitSum = 0

while n:
    digitSum += n%10
    n //= 10
out(f"{digitSum}\n")