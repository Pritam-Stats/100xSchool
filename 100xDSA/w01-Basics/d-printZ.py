# print("*"*5)
# for i in range(3, 0, -1):
#     print((i*" ") + "*")
# print("*"*5)

##general
def z(n):
    for i in range(n):
        if i == 0 or i == n-1:
            print(n*"*")
        else:
            print((n-i-1)*" " + "*")

z(5)