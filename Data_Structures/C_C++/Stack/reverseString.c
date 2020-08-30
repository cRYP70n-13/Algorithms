#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <limits.h>

struct Stack
{
    int top;
    int capacity;
    char *array;
};

struct Stack    *createStack(unsigned capacity)
{
    struct Stack *stack = malloc(sizeof(struct Stack));
    stack->capacity = capacity;
    stack->top = -1;
    stack->array = malloc(stack->capacity * sizeof(char));
    return stack;
}

int     isFull(struct Stack *stack)
{ return stack->top == stack->capacity - 1; }

int     isEmpty(struct Stack *stack)
{ return stack->top == -1; }

void     push(struct Stack *stack, char item)
{
    if (isFull(stack))
        return;
    stack->array[++stack->top] = item;
}

char    pop(struct Stack *stack)
{
    if (isEmpty(stack))
        return INT_MIN;
    return stack->array[stack->top--];
}

void    reverse(char str[])
{
    int n = strlen(str);
    struct Stack* stack = createStack(n);

    int i;
    for (i = 0; i < n; i++)
        push(stack, str[i]);

    for (i = 0; i < n; i++)
        str[i] = pop(stack);
}

int main()
{
    char str[] = "String Goes here";

    reverse(str);
    printf("Reversed string is %s", str);

    return 0;
}
