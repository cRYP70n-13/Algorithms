#include <bits/stdc++.h>

using namespace std;

int	main(void) {
	int n, a, b;
	cin >> n;
	for (int i = 1; i <= n; i++) {
		cin >> a >> b;
		if ((a + b) % 3 != 0 || a > b * 2 || b > a * 2)
			cout << "NO\n";
		else
			cout << "YES\n";
	}
	return (0);
}