// ================================
// Author: Pritam
// ================================

#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
//#include <bits/stdc++.h>
using namespace std;

// ---------- Macros & Typedefs ----------
#define ll long long
#define pb push_back
#define all(v) v.begin(), v.end()
#define nl '\n'

// ---------- Solve Function ----------

void rev(int nums[], int n){
    if (n == 0) return;
    cout << nums[n-1]<<" ";
    rev(nums, n-1);
}

void solve() {
    int n;
    cin >>n;
    int a[n];

    for (int i =0; i< n; i++) {
        cin >> a[i];
    }
     
    rev(a, n);
}


// ---------- Main ----------
int main() {
    // Fast I/O
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t = 1;
    // cin >> t;

    while (t--) {
        solve();
    }

    return 0;
}