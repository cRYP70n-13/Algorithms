#include <iostream>
#include <stack>

using namespace std;

//Function to return precedence of operators
int     prec(char c)
{
    if(c == '^')
        return 3;
    else if(c == '*' || c == '/')
        return 2;
    else if(c == '+' || c == '-')
        return 1;
    else
        return -1;
}

void    infixToPostfix(string s)
{
    std::stack<char> Stack;
    Stack.push('N');
    int l = s.length();
    string ns;
    for (int i = 0; i < l; i++) {
        // If the scanned character is an operand, add it to output string.
        if ((s[i] >= 'a' && s[i] <= 'z')||(s[i] >= 'A' && s[i] <= 'Z'))
            ns += s[i];

        // If the scanned character is an ‘(‘, push it to the stack.
        else if (s[i] == '(')
            Stack.push('(');

        // If the scanned character is an ‘)’, pop and to output string from the stack
        // until an ‘(‘ is encountered.
        else if (s[i] == ')') {
            while (Stack.top() != 'N' && Stack.top() != '(') {
                char c = Stack.top();
                Stack.pop();
                ns += c;
            }
            if (Stack.top() == '(')
            {
                char c = Stack.top();
                Stack.pop();
            }
        }

        //If an operator is scanned
        else {
            while (Stack.top() != 'N' && prec(s[i]) <= prec(Stack.top()))
            {
                char c = Stack.top();
                Stack.pop();
                ns += c;
            }
            Stack.push(s[i]);
        }
    }
    //Pop all the remaining elements from the stack
    while (Stack.top() != 'N')
    {
        char c = Stack.top();
        Stack.pop();
        ns += c;
    }
    cout << ns << endl;
}

//Driver program to test above functions
int main()
{
    string exp = "a+b*(c^d-e)^(f+g*h)-i";
    infixToPostfix(exp);
    return 0;
}
