n, m = list(map(int, input().split()))

for i in range(n):
    if (i == 0 or i == n-1):
        print("*"*m)
    elif m == 1:
        for _ in range(n):
            print("*")
    else:
        print("*" + " "*(m-2) + "*")
