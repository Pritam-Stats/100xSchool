n, m = list(map(int, input().split()))

if m == 1:
    for _ in range(n):
        print("^")
else:
    for i in range(n):
        if i == 0 or i == n-1:
            print("^"*m)
        else:
            print("^" + " "*(m-2) + "^")

