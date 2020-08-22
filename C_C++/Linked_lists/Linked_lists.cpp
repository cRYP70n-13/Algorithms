#include <iostream>

using namespace std;

class Node {
    public:
        int data;
        Node *next;
};

void    printList(Node *head)
{
    while (head != NULL)
    {
        printf("%d ", head->data);
        head = head->next;
    }
}

void    push(Node **head, int data)
{
    Node *newNode = new Node();
    newNode->next = *head;
    newNode->data = data;
    *head = newNode;
}

void    insertAfter(Node *prev, int data)
{
    if (prev == NULL)
        cout << "Doesn't exist" << endl;
    Node *newNode = new Node();
    newNode->data = data;
    newNode->next = prev->next;
    prev->next = newNode;
}


void    append(Node **head, int data)
{
    Node *it = *head;
    Node *newNode = new Node();
    newNode->data = data;
    newNode->next = NULL;
    if (*head == NULL)
        *head = newNode; return ;
    while (it->next != NULL)
        it = it->next;
    it->next = newNode;
}


/*
void append(Node** head_ref, int new_data)
{
    Node* new_node = new Node();

    Node *last = *head_ref;

    new_node->data = new_data;

    new_node->next = NULL;

    if (*head_ref == NULL)
    {
        *head_ref = new_node;
        return;
    }

    while (last->next != NULL)
        last = last->next;

    last->next = new_node;
    return;
}
*/

int     main(void)
{
     /* Start with the empty list */
    Node* head = NULL;

    // Insert 6. So linked list becomes 6->NULL
    append(&head, 6);

    // Insert 7 at the beginning.
    // So linked list becomes 7->6->NULL
    push(&head, 7);

    // Insert 1 at the beginning.
    // So linked list becomes 1->7->6->NULL
    push(&head, 1);

    // Insert 4 at the end. So
    // linked list becomes 1->7->6->4->NULL
    append(&head, 4);

    // Insert 8, after 7. So linked
    // list becomes 1->7->8->6->4->NULL
    insertAfter(head->next, 8);

    cout<<"Created Linked list is: ";
    printList(head);
    return (0);
}
