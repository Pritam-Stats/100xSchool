#include <iostream>
#include<algorithm>
using namespace std;


int minf_(int arr[], int n) {
    if (n==1) return arr[0];
    int smallAns = minf_(arr, n-1);
    int ans = std::min(smallAns, arr[n-1]);
    return ans;
}


int main() {
    // Your code here
    int A[] = {1, 2, 3, 4, 5}; 
    cout << minf_(A, 5) << endl;
    return 0;
}