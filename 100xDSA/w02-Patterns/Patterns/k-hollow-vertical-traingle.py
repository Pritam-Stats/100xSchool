n = int(input())
for i in range(1, n+1):
    if i <= 2:
        print("* "*i)
    else:
        print("* " + " "*(i-2) + "*")

for i in range(n-1, 0,-1):
    if i <= 2:
        print("* "*i)
    else:
        print("* " + " "*(i-2) + "*")