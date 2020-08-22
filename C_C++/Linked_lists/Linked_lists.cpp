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

void    deleteNode(Node **head, int position)
{
    if (*head == NULL) return;
    Node *tmp = new Node();
    tmp = *head;
    if (position == 0)
    {
        *head = tmp->next;
        free(*head);
        return ;
    }
    for (int i = 0; tmp != NULL && i < position - 1; i++)
        tmp = tmp->next;
    if (tmp == NULL || tmp->next == NULL)
        return;
    free(tmp->next);
    Node *next = tmp->next->next;
    tmp->next = next;
}

int     size(Node *head)
{
    int i = 0;
    while (head != NULL)
    {
        head = head->next;
        i++;
    }
    return i;
}

void    swapNode(Node **head, int x, int y)
{
    if (x == y) return ;
    Node *prevX = NULL, *currentX = *head;
    while (currentX && currentX->data != x)
    {
        prevX = currentX;
        currentX = currentX->next;
    }
    Node *prevY = NULL, *currentY = *head;
    while (currentY && currentY->data != y)
    {
        prevY = currentY;
        currentY = currentY->next;
    }
    if (currentX == NULL || currentY == NULL) return ;
    // if x is not the head of linked list
    if (prevX != NULL)
        *head = currentY;
    else
        *head = currentX;

    Node *tmp = currentY->next;
    currentY->next = currentX->next;
    currentX->next = tmp;
}

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

    deleteNode(&head, 4);

    // Insert 8, after 7. So linked
    // list becomes 1->7->8->6->4->NULL
    insertAfter(head->next, 8);

    cout<<"Created Linked list is: ";
    printList(head);
    cout << "size of this linked list: " << size(head);

    cout << "\n\n\n\n\n\n\n";
    reverse(head);
    printList(head);
    return (0);
}
