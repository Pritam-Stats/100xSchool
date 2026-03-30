<h1 align="center">Problems</h1>

<img src="contest-4.jpeg" 
     alt="Your long page image" 
     style="max-width: 100%; border-radius: 10%; display: block; margin: 0 auto;">

<div style="display: flex; justify-content: center; margin-top: 10px;">
  <span style="
    background-color: black;
    box-shadow: 0 0 40px #12a3e8;
    font-family: monospace;
    font-size: 38px;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  ">
    Official Solutions
  </span>
</div>

## A. Factors Battle

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long

int get_factors_count(int n)
{
	int ans = 0;

	for(int i = 1; i * i <= n; i++)
	{
		if(n % i == 0)
		{
			int f1 = i;
			int f2 = n / i;

			if(f1 == f2)
			{
				ans++;	
			}
			else
			{
				ans += 2;
			}
		}
	}

	return ans;
}

void solve()
{
	int a, b;
	cin >> a >> b;

	int f1 = get_factors_count(a);
	int f2 = get_factors_count(b);

	if(f1 > f2)
	{
		cout << "A";
	}
	else if(f1 == f2)
	{
		cout << "DRAW";
	}		
	else
	{
		cout << "B";
	}
}

signed main()
{
	int t = 1;
	// cin >> t;	

	while(t--)
	{
		solve();
	}
}

```

---

## B. Longest Color Streak

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long

void solve()
{
    int n;
    cin >> n;

    int A[n];
    for(int i = 0; i < n; i++)
    {
        cin >> A[i];
    }

    int ans = 0;
    
    int i = 0;
    while(i < n)
    {
        int cnt = 0;
        
        int j = i;
        while(j < n and A[i] == A[j])
        {
            cnt++;
            j++;
        }

        ans = max(ans, cnt);

        i = j;
    }

    cout << ans << endl;
}

signed main()
{
    int t = 1;
    // cin >> t;

    while(t--)
    {
        solve();
    }
}

```

---

## C. Unique Visitors Count

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long

void solve()
{
    int n;
    cin >> n;

    int A[n];
    for(int i = 0; i < n; i++)
    {
        cin >> A[i];
    }

    set<int> st;
    for(int i = 0; i < n; i++)
    {
        st.insert(A[i]);
        cout << st.size() << " ";
    }
}

signed main()
{
    int t = 1;
    // cin >> t;

    while(t--)
    {
        solve();
    }
}

```

---

## D. Equilibrium Points

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long

void solve()
{
    int n;
    cin >> n;

    int A[n];
    for(int i = 0; i < n; i++)
    {
        cin >> A[i];
    }

    int leftSum = 0;
    int rightSum = 0;
    for(int i = 0; i < n; i++)
    {
        rightSum += A[i];
    } 

    int ans = 0;
    for(int i = 0; i < n; i++)
    {   
        rightSum -= A[i];

        if(leftSum == rightSum)
        {
            ans++;
        }

        leftSum += A[i];
    }

    cout << ans << endl;
}

signed main()
{
    int t = 1;
    // cin >> t;

    while(t--)
    {
        solve();
    }
}

```

---

## E. Odd Numbers Query

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long

void solve()
{
    int n, q;
    cin >> n >> q;

    int A[n];
    for(int i = 0; i < n; i++)
    {
        cin >> A[i];
    }

    int P[n], sum = 0;
    for(int i = 0; i < n; i++)
    {
        sum += A[i];
        P[i] = sum;
    }

    while(q--)
    {
        int l, r;
        cin >> l >> r;

        l--;
        r--;
        
        int subarray_sum = (l == 0) ? (P[r]) : (P[r] - P[l - 1]);

        int rem_sum = sum - subarray_sum;

        if(rem_sum % 2 == 1)
        {
            cout << "YES";
        }
        else
        {
            cout << "NO";
        }

        cout << endl;
    }   
}

signed main()
{
    int t = 1;
    // cin >> t;

    while(t--)
    {
        solve();
    }
}

```

---

## F. Balanced Substrings

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long

bool is_vowel(char ch)
{
    return 
        (ch == 'a' or ch == 'e' or ch == 'i' or ch == 'o' or ch == 'u') or
        (ch == 'A' or ch == 'E' or ch == 'I' or ch == 'O' or ch == 'U')
    ;
}

void solve()
{
    int n, q;
    cin >> n >> q;

    string s;
    cin >> s;

    int pre[n], sum = 0;
    for(int i = 0; i < n; i++)
    {
        if(is_vowel(s[i]))
        {
            sum++;
        }
        pre[i] = sum;
    }

    while(q--)
    {
        int l, r;
        cin >> l >> r;

        l--;
        r--;
        
        int len = r - l + 1;

        int vowels_count = (l == 0) ? (pre[r]) : (pre[r] - pre[l - 1]);
        int consonants_count = len - vowels_count;

        if(vowels_count == consonants_count)
        {
            cout << "YES";
        }
        else
        {
            cout << "NO";
        }

        cout << endl;
    }   
}

signed main()
{
    int t = 1;
    // cin >> t;

    while(t--)
    {
        solve();
    }
}

```

---

## G. Palindromic Substrings

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long

bool is_palindrome(string &s, int l, int r)
{
    while(l <= r)
    {
        if(s[l] != s[r])
        {
            return false;
        }

        l++;
        r--;
    }

    return true;
}

void solve()
{
    int n;
    cin >> n;

    string s;
    cin >> s;

    for(int l = 0; l < n; l++)
    {
        for(int r = l; r < n; r++)
        {
            // [l, r] is a substring

            if(is_palindrome(s, l, r))
            {
                for(int i = l; i <= r; i++)
                {
                    cout << s[i];
                }
            
                cout << endl;
            }
        }
    }
}

signed main()
{
    int t = 1;
    // cin >> t;

    while(t--)
    {
        solve();
    }
}

```

---

## H. Good Pairs

```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long

void solve()
{
    int n, k;
    cin >> n >> k;

    int A[n];
    for(int i = 0; i < n; i++)
    {
        cin >> A[i];
    }

    int ans = 0;

    map<int, int> mp;
    for(int i = 0; i < n; ++i)
    {
        if(k == 0)
        {
            if(A[i] == 0)
            {
                ans += i;
            }
        }
        else if(A[i] % k == 0)
        {
            int req = A[i] / k;
            ans += mp[req];
        }

        mp[A[i]]++;
    }

    cout << ans << endl;
}

signed main()
{
    int t = 1;
    // cin >> t;

    while(t--)
    {
        solve();
    }
}

```
