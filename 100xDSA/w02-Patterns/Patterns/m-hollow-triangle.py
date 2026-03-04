n = int(input())

for i in range(1, n+1):
    if i == 1 or i == n:
        print(" "*(n-i) + ("* "*i).rstrip())
    else:
        print(" "*(n-i) + "*" + " "*(2*i-3) + "*")

for i in range(n, 0, -1):
    if i == n or i == 1:
        print(" "*(n-i) + ("* "*i).rstrip())
    else:
        print(" "*(n-i) + "*" + " "*(2*i -3)+"*")