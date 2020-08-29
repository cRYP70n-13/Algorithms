#include <stdio.h>
#include <stdlib.h>

struct QNode {
    int data;
    struct QNode *next;
}

struct Queue {
    struct QNode *front, *rear;
};

struct QNode    *NewNode(int data)
{
    struct QNode *newNode = malloc(sizeof(struct QNode));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

struct QNode    *createQueue()
{
    struct Queue* q = malloc(sizeof(struct Queue));
    q->front = q->rear = NULL;
    return q;
}

// The Enque function to add an element to our Queue
void    Enque(struct QNode *q, int data)
{
    // Create a new LL node
    struct QNode *new = newNode(data);

    // If queue is empty, then new node is front and rear both
    if (q->rear == NULL) {
        q->front = q->rear = new;
        return;
    }

    // Add the new node at the end of queue and change rear
    q->rear->next = new;
    q->rear = new;
}

void    Dequeue(struct QNode *q)
{
    if (q->front == NULL) return ;
    struct QNode *tmp = q->front;
    q->front = q->front->next;

    // If front becomes NULL, then change rear also as NULL
    if (q->front == NULL)
        q->rear = NULL;

    free(temp);
}
