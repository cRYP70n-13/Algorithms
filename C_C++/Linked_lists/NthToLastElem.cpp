#include <iostream>

using namespace std;

class Node {
    int data;
    Node *next;
}

int     NthTolastELem(Node *head, int nth)
{
    int size = 0;
    Node *it = head;
    while (head) {
        size++;
        head = head->next;
    }
    int count = size - nth;
    while (count--)
        it = it->next;
    return it->val;
}

int getNthFromLast(Node *head, int n)
{
    //using two pointers, similar to finding middle element
    Node *currNode = head , *nthNode = head;

    //traverse first n elements
    while (n--)
    {
        if (currNode == NULL) return -1;
        currNode = currNode->next;
    }
    //move nthNode (length of LL - n) times
    while (currNode)
    {
        nthNode = nthNode->next;
        currNode = currNode->next;
    }
    if (nthNode)
        return nthNode->data;
    else
        return -1;
}

int     main(void)
{
    return (0);
}
