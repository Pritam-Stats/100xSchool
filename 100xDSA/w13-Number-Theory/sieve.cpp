// ================================
// Author: Pritam
// ================================
#include <iostream>  // For cin, cout
#include <vector>    // For vector (lists)
#include <string>    // For strings
#include <algorithm> // For sort(), max(), min()
#include <cmath>     // For math functions
// #include <bits/stdc++.h>
using namespace std;

// ---------- Macros & Typedefs ----------
#define ll long long
#define pb push_back
#define all(v) v.begin(), v.end()
#define nl '\n'

// ---------- Solve Function ----------

void solve()
{
    int n;
    // cin replaces Python's input()
    cin >> n;

    // vector<bool> is like a Python list of booleans: [True] * (n + 1)
    vector<bool> isPrime(n + 1, true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

    for (int p = 2; p * p <= n; p++)
    {
        if (isPrime[p])
        {
            // Mark multiples as false
            for (int i = p * p; i <= n; i += p)
            {
                isPrime[i] = false;
            }
        }
    }

    // cout replaces Python's print()
    for (int i = 2; i <= n; i++)
    {
        if (isPrime[i])
        {
            cout << i << " ";
        }
    }
    cout << nl;
}

// ---------- Main ----------
int main()
{
    // Fast I/O (Like sys.stdin.readline in Python)
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t = 1;
    // cin >> t; // Uncomment this if a problem has multiple test cases

    while (t--)
    {
        solve();
    }

    return 0;
}