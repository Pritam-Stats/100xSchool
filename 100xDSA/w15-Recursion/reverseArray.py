def rev(nums, n):
    if n == 0: return
    rev(nums, n-1)
    print(nums[n-1], end=" ")

print(rev([1, 2, 3, 4, 5], 5))