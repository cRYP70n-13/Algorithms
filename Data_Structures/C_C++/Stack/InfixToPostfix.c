#include <stdio.h>
#include <stdlib.h>

// Stack type
struct Stack
{
    int top;
    unsigned capacity;
    int* array;
};

// Stack Operations
struct Stack    *createStack( unsigned capacity )
{
    struct Stack* stack =  malloc(sizeof(struct Stack));

    if (!stack)
        return NULL;

    stack->top = -1;
    stack->capacity = capacity;

    stack->array = malloc(stack->capacity * sizeof(int));

    return stack;
}

int     isEmpty(struct Stack *stack)
{
    return stack->top == -1 ;
}

char    peek(struct Stack *stack)
{
    return stack->array[stack->top];
}

char    pop(struct Stack *stack)
{
    if (!isEmpty(stack))
        return stack->array[stack->top--] ;
    return '$';
}

void    push(struct Stack *stack, char op)
{
    stack->array[++stack->top] = op;
}


// A utility function to check if the given character is operand
int     isOperand(char ch)
{
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

// A utility function to return precedence of a given operator
// Higher returned value means higher precedence
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

// The main functio Here where all the magic Happens
int     infixToPostfix(char *exp)
{
    int i, k;

    // Create a stack of capacity equal to expression size
    struct Stack *stack = createStack(strlen(exp));
    if(!stack) return -1; // In the case of error Stack not created
