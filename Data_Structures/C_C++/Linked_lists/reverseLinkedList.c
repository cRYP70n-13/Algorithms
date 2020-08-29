#include <stdio.h>

struct Node {
    int data;
    Node *next;
};

Node    *reverseLinkedList(struct Node *head)
{
    struct Node *prev = NULL;
    struct Node *next = NULL;

    while (head)
    {
        next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
