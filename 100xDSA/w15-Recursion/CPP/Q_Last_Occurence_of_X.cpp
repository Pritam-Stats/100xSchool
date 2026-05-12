// ================================
// Author: Pritam
// ================================

#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
// #include <bits/stdc++.h>
using namespace std;

// ---------- Macros & Typedefs ----------
#define ll long long
#define pb push_back
#define all(v) v.begin(), v.end()
#define nl '\n'

// ---------- Solve Function ----------

int f(vector<int> &a, int n, ll x)
{
    if (n <= 0)
        return -1;

    int ans = (a[n - 1] == x ? (n - 1) : -1);
    if (ans != -1)
    {
        return ans + 1;
    };
    ans = f(a, n - 1, x);

    return ans;
}

void solve()
{
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];
    ll x;
    cin >> x;
    int ans = f(a, n, x);
    cout << ans << nl;
}

// ---------- Main ----------
int main()
{
    // Fast I/O
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t = 1;
    // cin >> t;

    while (t--)
    {
        solve();
    }

    return 0;
}