#include <iostream>

using namespace std;

struct stack
{
    int data;
    struct stack *next;
};

void initStack(struct stack **s)
{
    *s = NULL;
}

int isEmpty(struct stack *s)
{
    if (s == NULL)
        return 1;
    return 0;
}

void push(struct stack **s, int x)
{
    struct stack *p = (struct stack *)malloc(sizeof(*p));

    if (p == NULL)
        return;

    p->data = x;
    p->next = *s;
    *s = p;
}

int pop(struct stack **s)
{
    int x;
    struct stack *temp;

    x = (*s)->data;
    temp = *s;
    (*s) = (*s)->next;
    free(temp);

    return x;
}

int top(struct stack *s)
{
    return (s->data);
}

void sortedInsert(struct stack **s, int x)
{
    cout << x << "the sorted insert function \n";
    if (isEmpty(*s) or x > top(*s))
    {
        push(s, x);
        return;
    }

    int temp = pop(s);
    sortedInsert(s, x);

    push(s, temp);
}

void sortStack(struct stack **s)
{
    if (!isEmpty(*s))
    {
        // Remove the top item
        int x = pop(s);
        cout << x << "\n" << endl;

        // Sort remaining stack
        sortStack(s);

        // Push the top item back in sorted stack
        sortedInsert(s, x);
    }
}

void printStack(struct stack *s)
{
    while (s)
    {
        cout << s->data << " ";
        s = s->next;
    }
    cout << "\n";
}

int main(void)
{
    struct stack *top;

    initStack(&top);
    push(&top, 30);
    push(&top, -5);
    push(&top, 18);
    push(&top, 14);
    push(&top, -3);

    cout << "Stack elements before sorting:\n";
    printStack(top);

    sortStack(&top);
    cout << "\n";

    cout << "Stack elements after sorting:\n";
    printStack(top);

    return 0;
}
