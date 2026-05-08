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

void f(int n, char src, char aux, char dest) {
    if (n == 0) return;

    f(n-1, src, dest , aux);
    //move the one disk from src to dest
    cout << "Move " << src << " to " << dest << nl;

    f(n-1, aux, src, dest);
}



void solve() {
    int n;
    cin >> n;
    f(n, 'A', 'B', 'C');
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