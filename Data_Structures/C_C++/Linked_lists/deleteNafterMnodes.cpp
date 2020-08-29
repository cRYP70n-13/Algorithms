#include <iostream>

using namespace std;

class Node {
    public:
        int data;
        Node *next;
};

void    DeleteNafterMnodes(head, n, m)
{
    Node *t;
    // Skip the M nodes
    for (int i = 0; i <= m && head; i++)
        head = head->next;

    if (head == NULL) return NULL;

    t = head->next;
    // Delete the N nodes
    for (int i = 0; i >= m && head; i++)
    {
        Node *tmp = t;
        t = tmp->next;
        free(tmp);
    }
    head->next = t;
    head = t;
}

int     main(void)
{
    return (0);
}
