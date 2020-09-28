#include <iostream>
#include <stack>

using namespace std;

stack<char> Stack;

string ns;

void    insertBottom(char x)
{
    if (Stack.size() == 0)
        Stack.push(x);
    else {
        char t = Stack.top();
        Stack.pop();
        insertBottom(x);
        Stack.push(t);
    }
}

void    reverseStackRecursion()
{
    if (Stack.size() > 0) {
        char tmp = Stack.top();
        Stack.pop();
        reverseStackRecursion();
        insertBottom(tmp);
    }
}

int main()
{
    Stack.push('1');
    Stack.push('2');
    Stack.push('3');
    Stack.push('4');

    cout << "Original Stack" << endl;
    cout << "1" << " " << "2" << " " << "3" << " " << "4" << endl;

    reverseStackRecursion();
    cout << "Reversed Stack" << endl;
    while (!Stack.empty()) {
        char p = Stack.top();
        Stack.pop();
        ns += p;
    }
    cout << ns[3] << " " << ns[2] << " " << ns[1] << " " << ns[0] << endl;
    return 0;
}
