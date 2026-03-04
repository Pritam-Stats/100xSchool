from sys import stdin, stdout
input = stdin.readline
write = stdout.write

l, b = list(map(int, input().split()))
write(f"Area = {l*b}\n")
write(f"Perimeter = {2*(l+b)}\n")