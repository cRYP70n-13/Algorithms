// this is the stack implementation in c programming
#include <stdlib.h>
#include <stdio.h>
#include <limits.h>

struct Stack {
    int         top;
    int         capacity;
    int         *array;
};

struct Stack   *createStack(unsigned capacity)
{
    struct Stack *stack = malloc(sizeof(struct Stack));
    stack->capacity = capacity;
    stack->top = -1;
    stack->array = malloc(stack->capacity * sizeof(int));
    return stack;
}

int     isFull(struct Stack *stack)
{
    return stack->top == stack->capacity - 1;
}

void    push(struct Stack *stack, int data)
{
    if (isFull(stack))
        return;
    stack->top++;
    stack->array[stack->top] = data;
}

int     pop(struct Stack *stack)
{
    if (isFull(stack))
        return INT_MIN;
    return stack->array[stack->top--];
}

int     peek(struct Stack *stack)
{
    if (isFull(stack)) return INT_MIN;
    return stack->array[stack->top];
}

void    printStack(struct Stack *stack)
{
    for (int i = 0; i < stack->capacity; i++)
        printf("%d\n", stack->array[i]);
}

int     isempty(struct Stack *stack)
{
    return stack->top == -1;
}

int main()
{
    struct Stack* stack = createStack(100);

    push(stack, 10);
    push(stack, 20);
    push(stack, 30);
    push(stack, 40);
    push(stack, 50);
    push(stack, 60);
    push(stack, 90);

    printf("%d popped from stack\n", pop(stack));
    while(!isempty(stack)) {
        int data = pop(stack);
        printf("%d\n",data);
    }

    return 0;
}
