#include <stdio.h>
#include <stdlib.h>

// The stack structure
struct stack
{
    int data;
    struct stack *next;
};

// Initialize the stack with a NULL value
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
    struct stack *p = malloc(sizeof(*p));

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

void    sortInsertation(struct stack **s, int x)
{
    if (isEmpty(*s) || x > top(*s))
    {
        push(s, x);
        return;
    }
    int tmp = pop(s);
    sortInsertation(s, x);
    push(s, tmp);
}

void    sortStack(struct stack **s)
{
    if (!isEmpty(*s))
    {
        int tmp = pop(s);
        sortStack(s);
        sortInsertation(s, tmp);
    }
}

void printStack(struct stack *s)
{
    while (s)
    {
        printf("%d ", s->data);
        s = s->next;
    }
    printf("\n");
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

    printf("Stack elements before sorting:\n");
    printStack(top);

    sortStack(&top);
    printf("\n\n");

    printf("Stack elements after sorting:\n");
    printStack(top);

    return 0;
}
