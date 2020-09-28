#include <iostream>

using namespace std;

class Node {
    int data;
    Node *next;
}

int     countNodes(Node *head)
{
    int count = 0;
    while (head)
    {
        count++;
        head = head->next;
    }
    return count;
}

void    deleteMiddleNode(Node *head)
{
    Node *it = head;
    if (head == NULL)
        return NULL;
    if (head->next == NULL) {
        delete head;
        return NULL;
    }
    int mid = countNodes(head) / 2;
    while (mid-- > 1)
        it = it->next;
    head->next = head->next->next;
    return it;
}

int     main(void)
{
    return (0);
}
