#include <iostream>
using namespace std;


int maxF(int arr[], int n){
    if (n==1) return arr[0];
    return max(maxF(arr, n-1), arr[n-1]);
}

int main() {
    // Your code here

    int A[] = {1, 2, 3, 4, 5};
    cout << maxF(A, 5) << endl;
    return 0;
}