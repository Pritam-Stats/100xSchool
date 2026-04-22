# ================================
# Author: Pritam
# ================================


import sys
input = sys.stdin.readline
# ---------- Helpers ----------


def inp():
    return int(input())


def inlt():
    return list(map(int, input().split()))


def ins():
    return input().strip()


def inmap():
    return map(int, input().split())


def print_fast(*args):
    sys.stdout.write(" ".join(map(str, args)) + '\n')
# ---------- Solve Function ----------


def solve():
    n, k = inmap()
    books = inlt()

    if k > n:   #edge case: if there are more students than books
        print(-1)
        return
    # someone has to read the max number pages even if the n and k are same
    low = max(books)
    high = sum(books)  # imagine if k == 1

    def possible(books, mid, k):
        pages = 0
        student = 1
        for i in range(n):
            if pages + books[i] <= mid:
                pages += books[i]
            else:
                student += 1
                pages = books[i]
        return student <= k

    ans = -1
    while low <= high:
        mid = low + ((high - low)//2)

        if possible(books, mid, k):
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    print(ans)


# ---------- Main ----------
if __name__ == "__main__":
    t = 1
    # t = inp()
    for _ in range(t):
        solve()
