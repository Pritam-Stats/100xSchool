#include <iostream>
using namespace std;

// find first occ in array of size of size n
int f(int A[], int n, int x)
{
    if (n == 0) return -1;
    
    int smallAns = f(A, n - 1, x);

    if (smallAns != -1) return smallAns;

    if (A[n - 1] == x) return n - 1;
    else return -1;
}


int lastOcc(int a[], int n, int x) {
    if (n==0) return -1;
    if (a[n-1] == x) return n-1;

    return lastOcc(a, n-1, x);
}

int main() {
    // Your code here
    int A[] = {1,2,3 , 4, 4 , 4, 5};
    cout << "first occ: " << f(A, 7, 4)<<endl;
    cout << "last occ: " << lastOcc(A, 7, 4)<<endl;
    return 0;
}