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

ll power(ll x, int n) {

    if (x == 1 or n == 0) return 1;
    ll res = power(x, n/2);
    res *= res;
    if (n&1 != 0) {
        res = res* x;
    }
    return res;
}

void solve() {
    int n; int x;
    cin >> x >> n;
    ll ans = power(x, n);
    cout << ans <<nl;
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