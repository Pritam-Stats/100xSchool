# total height 2n-1
n = int(input())

for i in range(n):
    innerSp = 2*i-1
    if i == 0:
        print(">")
    else:
        print(" "*i + ">" + " "*innerSp +">")

for i in range(n-2, -1, -1):
    innerSp = 2*i -1
    if i == 0:
        print(">")
    else:
        print(" "*i + ">" + " "*innerSp + ">")



# >
#  > >
#   >   >
#    >     >
#     >       >
#    >     >
#   >   >
#  > >
# >

