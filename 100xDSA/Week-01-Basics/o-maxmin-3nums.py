from sys import stdin, stdout
input = stdin.readline
write = stdout.write

nums = list(map(int, input().split()))
write(f"Min = {min(nums)}\nMax = {max(nums)}\n")