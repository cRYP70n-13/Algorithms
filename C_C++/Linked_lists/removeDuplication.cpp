#include <iostream>

using namespace std;

struct Node
{
    int data;
    struct Node *next;
};

// Utility function to create a new Node
struct Node *newNode(int data)
{
   Node *temp = new Node;
   temp->data = data;
   temp->next = NULL;
   return temp;
}

void    removeDuplication(Node *head)
{
    Node *ptr1 = head;
    Node *ptr2 = NULL;
    Node *tmp = NULL;

    while (ptr1 && ptr1->next) {
        ptr2 = ptr1;
        while (ptr2->next) {
            if (ptr1->data == ptr2->next->data) {
                tmp = ptr2->next;
                ptr2->next = ptr2->next->next;
                delete(tmp);
            } else
                ptr2 = ptr2->next;
        }
        ptr1 = ptr1->next;
    }
}

void printList(struct Node *node)
{
    while (node != NULL)
    {
        printf("%d ", node->data);
        node = node->next;
    }
}

int main()
{
    /* The constructed linked list is:
     10->12->11->11->12->11->10*/
    struct Node *start = newNode(10);
    start->next = newNode(12);
    start->next->next = newNode(11);
    start->next->next->next = newNode(11);
    start->next->next->next->next = newNode(12);
    start->next->next->next->next->next =
                                    newNode(11);
    start->next->next->next->next->next->next =
                                    newNode(10);

    printf("Linked list before removing duplicates ");
    printList(start);

    removeDuplication(start);

    printf("\nLinked list after removing duplicates ");
    printList(start);

    return 0;
}
