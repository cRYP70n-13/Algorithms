#include <stdlib.h>
#include <stdio.h>

struct sNode
{
    char data;
    struct sNode *next;
};

int     isEmpty(struct sNode *top)
{
    return (top == NULL) ? 1 : 0;
}

void push(struct sNode **top_ref, int new_data)
{
    struct sNode *new_node =  malloc(sizeof(struct sNode));
    if (new_node == NULL)
    {
        printf("Stack overflow \n");
        return;
    }

    new_node->data = new_data;
    new_node->next = (*top_ref);
    (*top_ref) = new_node;
}

int pop(struct sNode** top_ref)
{
    char res;
    struct sNode *top;

    if (*top_ref == NULL)
    {
        printf("Stack overflow \n");
        return -1;
    }
    else
    {
        top = *top_ref;
        res = top->data;
        *top_ref = top->next;
        free(top);
        return res;
    }
}

void print(struct sNode* top)
{
    printf("\n");
    while (top != NULL)
    {
        printf(" %d ", top->data);
        top = top->next;
    }
}

void insertAtBottom(struct sNode **top_ref, int item)
{
    if (isEmpty(*top_ref))
        push(top_ref, item);
    else
    {
        int temp = pop(top_ref);
        insertAtBottom(top_ref, item);
        push(top_ref, temp);
    }
}

void reverse(struct sNode** top_ref)
{
    if (!isEmpty(*top_ref))
    {
        int temp = pop(top_ref);
        reverse(top_ref);
        insertAtBottom(top_ref, temp);
    }
}

int main()
{
    struct sNode *s = NULL;
    push(&s, 4);
    push(&s, 3);
    push(&s, 2);
    push(&s, 1);

    printf("Original Stack ");
    print(s);
    reverse(&s);
    printf("\n Reversed Stack ");
    print(s);
    return 0;
}
