#include <bits/stdc++.h>

using namespace std;

typedef struct Node {
    int data;
    int priority;
    struct Node *next;
} Node;

Node    *new_node(int data, int priority)
{
    Node *newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->priority = priority;
    newNode->next = NULL;
    return newNode;
}

int     peek(Node **root)
{
    return (*root)->data;
}

void    pop(Node **root)
{
    Node *tmp = *root;
    *root = (*root)->next;
    free(tmp);
}

void    push(Node **root, int data, int prio)
{
    Node *start = *root;
    Node *newNode = new_node(data, prio);

    if ((*root)->priority > prio) {
        newNode->next = *root;
        *root = newNode;
    }
    else {
        while (newNode->next && newNode->next->priority < prio)
            start = start->next;

        newNode->next = start->next;
        start->next = newNode;
    }
}

int     isEmpty(Node **root)
{
    return (*root) == NULL;
}

int     main(void)
{
    Node *pq = new_node(4, 1);
    push(&pq, 5, 2);
    push(&pq, 6, 3);
    push(&pq, 7, 0);

    while (!isEmpty(&pq))
    {
        cout << " " << peek(&pq);
        pop(&pq);
    }
    return (0);
}
