#include <stdio.h>
#include <stdlib.h>

#define bool int

/* structure of a stack node */
struct sNode {
    char data;
    struct sNode* next;
};

/* Function to push an item to stack*/
void push(struct sNode** top_ref, int new_data)
{
    /* allocate node */
    struct sNode* new_node = malloc(sizeof(struct sNode));

    if (new_node == NULL) {
        printf("Stack overflow n");
        getchar();
        exit(0);
    }

    new_node->data = new_data;

    new_node->next = (*top_ref);

    (*top_ref) = new_node;
}

int pop(struct sNode** top_ref)
{
    char res;
    struct sNode* top;

    if (*top_ref == NULL) {
        printf("Stack overflow n");
        getchar();
        exit(0);
    }
    else {
        top = *top_ref;
        res = top->data;
        *top_ref = top->next;
        free(top);
        return res;
    }
}

bool    isMatchingPair(char character1, char character2)
{
    if (character1 == '(' && character2 == ')')
        return 1;
    else if (character1 == '{' && character2 == '}')
        return 1;
    else if (character1 == '[' && character2 == ']')
        return 1;
    else
        return 0;
}

bool areParenthesisBalanced(char exp[])
{
    int i = 0;
    struct sNode* stack = NULL;

    while (exp[i]) {
        if (exp[i] == '{' || exp[i] == '(' || exp[i] == '[')
            push(&stack, exp[i]);

        if (exp[i] == '}' || exp[i] == ')' || exp[i] == ']') {

            if (stack == NULL) return 0;

            else if (!isMatchingPair(pop(&stack), exp[i]))
                return 0;
        }
        i++;
    }

    if (stack == NULL)
        return 1; /*balanced*/
    else
        return 0; /*not balanced*/
}

/* UTILITY FUNCTIONS */
int main()
{
    char exp[100] = "{()}[]";
    if (areParenthesisBalanced(exp))
        printf("Balanced \n");
    else
        printf("Not Balanced \n");
    return 0;
}
