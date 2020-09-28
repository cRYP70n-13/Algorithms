#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Stack type
struct Stack
{
    int top;
    unsigned capacity;
    int *array;
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
        return stack->array[stack->top--];
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
    for (i = 0, k = -1; exp[i]; i++) {
        // If the scanned character is an operand so we add it to the output
        if (isOperand(exp[i]))
            exp[++k] = exp[i];
        // Else if the scanned char is a '(' we push it to the stack
        else if (exp[i] == '(')
            push(stack, exp[i]);
        // Else if the scanned char is a ')' We pop and output from the stack till we
        // find a '('
        else if (exp[i] == ')') {
            while (!isEmpty(stack) && peek(stack) != '(')
                exp[++k] = pop(stack);
            if (!isEmpty(stack) && peek(stack) != '(')
                return -1; // invalid expression
            else
                pop(stack);
        }
        else // an operator is encountered
        {
            while (!isEmpty(stack) && prec(exp[i]) <= prec(peek(stack)))
                exp[++k] = pop(stack);
            push(stack, exp[i]);
        }
    }
    // pop all the operators from the stack
    while (!isEmpty(stack))
        exp[++k] = pop(stack );

    exp[++k] = '\0';
    printf( "%s", exp );
    return 1;
}

int main()
{
    char exp[] = "a+b*(c^d-e)^(f+g*h)-i";
    infixToPostfix(exp);
    return 0;
}
