#include <iostream>

using namespace std;

int main() {
    string s;
    int count[1000000];

    cin >> s;
    for (unsigned int i = 0; i < s.size(); i++)
        count[s[i]]++;

    int odds = 0;
    for (char c = 'A'; c <= 'Z'; c++)
        if (count[c] % 2 == 1)
            odds++;

    if (odds > 1) {
        cout << "NO SOLUTION\n";
        return 0;
    }

    for (char c = 'A'; c <= 'Z'; c++)
        cout << string(count[c] / 2, c);

    for (char c = 'A'; c <= 'Z'; c++)
        if (count[c] % 2 == 1)
            cout << c;

    for (char c = 'Z'; c >= 'A'; c--)
        cout << string(count[c] / 2, c);
    cout << "\n";
}
