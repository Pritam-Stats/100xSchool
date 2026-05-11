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

int f(int a[], int n, int i, int x){
    if (i == n) return -1;

    
    int smallAns = f(a, n, i+1, x);
    // if (smallAns != -1) return smallAns;
    if (a[i] == x) {
        smallAns = i+1;
    }

}


void solve() {
    int n;
    cin >> n;
    int a[n];
    for (int i = 0; i<n; i++){
        cin >> a[i];
    }
    int x;
    cin >> x;

    int ans = f(a, n, x);
    cout << ans;
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