// this is my implementation of stack datastructure using linked lists;
#include <iostream>

using namespace std;

class stackNode {
    public:
        int         data;
        stackNode   *next;
};

stackNode   *newNode(int data)
{
    stackNode *newNode = new stackNode();
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

bool    isEmpty(stackNode *head)
{
    return !head;
}

void    push(stackNode **head, int data)
{
    stackNode *newStackNode = newNode(data);
    newStackNode->next = *head;
    *head = newStackNode;
    cout << data << " pushed to stack\n";

}

int     pop(stackNode **head)
{
    if (isEmpty(*head))
        return INT_MIN;
    stackNode *tmp = *head;
    *head = (*head)->next;
    return tmp->data;
    free(tmp);
}

int     peek(stackNode *head)
{
    if (isEmpty(head))
        return INT_MIN;
    return (head->data);
}

int     main(void)
{
    stackNode* root = NULL;

    push(&root, 10);
    push(&root, 20);
    push(&root, 30);

    cout << pop(&root) << " popped from stack\n";

    cout << "Top element is " << peek(root) << endl;

    return 0;
}
