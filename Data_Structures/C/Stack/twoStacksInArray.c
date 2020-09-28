#include <stdlib.h>

struct twoStacks {
    int *arr;
    int size;
    int top1 = size / 2 + 1;
    int top2 = size / 2;
};

void push1(int x)
{
    if (top1 > 0) {
        top1--;
        arr[top1] = x;
    }
    else {
        cout << "Stack Overflow";
        return;
    }
}

void push2(int x)
{
    if (top2 < size - 1) {
        top2++;
        arr[top2] = x;
    }
    else {
        cout << "Stack Overflow";
        return;
    }
}

int pop1()
{
    if (top1 <= size / 2) {
        int x = arr[top1];
        top1++;
        return x;
    }
    else {
        cout << "Stack UnderFlow";
        exit(1);
    }
}

int pop2()
{
    if (top2 >= size / 2 + 1) {
        int x = arr[top2];
        top2--;
        return x;
    }
    else {
        cout << "Stack UnderFlow";
        exit(1);
    }
}
