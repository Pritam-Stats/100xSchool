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

void printZigZag(int n)
{
    if (n == 1) {
        cout << 1 <<nl;
        return;
    }
    cout << n << nl;
    printZigZag(n - 1);
    cout << n << nl;

}

void solve()
{
    int n;
    cin >> n;
    printZigZag(n);
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