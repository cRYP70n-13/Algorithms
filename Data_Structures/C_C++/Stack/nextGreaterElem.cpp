#include <iostream>
#include <stack>

using namespace std;

void printNGE(int arr[], int n) {
  stack < int > s;

  s.push(arr[0]);

  for (int i = 1; i < n; i++) {
    if (s.empty()) {
      s.push(arr[i]);
      continue;
    }

    /* if stack is not empty, then
       pop an element from stack.
       If the popped element is smaller
       than next, then
    a) print the pair
    b) keep popping while elements are
    smaller and stack is not empty */
    while (s.empty() == false && s.top() < arr[i])
    {
        cout << s.top() << " --> " << arr[i] << endl;
        s.pop();
    }

    /* push next to stack so that we can find
    next greater for it */
    s.push(arr[i]);
  }

  /* After iterating over the loop, the remaining
  elements in stack do not have the next greater
  element, so print -1 for them */
  while (s.empty() == false) {
    cout << s.top() << " --> " << -1 << endl;
    s.pop();
  }
}

int main() {
  int arr[] = {11, 13, 21, 3};
  int n = sizeof(arr) / sizeof(arr[0]);
  printNGE(arr, n);
  return 0;
}
