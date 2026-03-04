import sys
input = sys.stdin.readline

DEBUG = False


def debug(*args, **kwargs):
    if not DEBUG:
        return
    print("----- DEBUG -----", file=sys.stderr)
    for arg in args:
        print(repr(arg), file=sys.stderr)
    for key, value in kwargs.items():
        print(f"{key} = {repr(value)}", file=sys.stderr)
    print("-----------------", file=sys.stderr)


def solve():
    t = 1
    t = int(input())
    for _ in range(t):
        n = int(input())
        nums = list(map(int, input().split())) if n > 0 else []
        target = int(input())
        ## sort + two pointer
        l, r = 0, n-1
        count = 0
        nums.sort()
        while l<r:
            if nums[l] + nums[r] < target:
                l += 1
            elif nums[l] + nums[r] > target:
                r -= 1
            else:
                count += 1
        print(count)


        # freqMap = {}

        # count = 0
        # for num in nums:
        #     comp = target - num

        #     count += freqMap.get(comp, 0)

        #     freqMap[num] = freqMap.get(num, 0) + 1

        # print(count)
if __name__ == "__main__":
    solve()
