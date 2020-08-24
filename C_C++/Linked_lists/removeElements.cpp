#include <iostream>

using namespace std;

class Node {
    public:
        int data;
        Node *next;
};

Node    *removeELements(Node *head, val)
{
    Node *h = new Node();
    h->data == -1;
    h->next = head;
    head = h;
    while (h.next) {
        if (h.next.val == val)
            h.next = h.next.next;
        else
            h = h.next;
    }
    return head.next;
}

int     main(void)
{
    return (0);
}
