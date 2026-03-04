n = int(input())
for i in range(1, n):
    print(("* "*i).center(2*n-1).rstrip())

for i in range(n,0,-1):
    print(("* "*i).center(2*n-1).rstrip())