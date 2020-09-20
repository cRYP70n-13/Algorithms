#include <bits/stdc++.h>

using namespace std;

#define ll long long

int     main(void)
{
    ll n; cin >> n;
    ll res = 0;
    for (int i = 0; i <= n; i++)
        res += i;
    cout << res;
    return (0);
}
