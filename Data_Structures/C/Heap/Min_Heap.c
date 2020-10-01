/**
 * C Program for the Min_Heap data structure
 * Created By: cRYP70N
 * Date: 30/09/2020
 */

#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// the heap data structure
typedef struct min_heap
{
	int *p;
	int size;
	int count;
} Heap;

// Functions prototypes
Heap *create_heap(Heap *heap);			  /*Creates a min_heap structure and returns a pointer to the struct*/
void down_heapify(Heap *heap, int index); /*Pushes an element downwards in the heap to find its correct position*/
void up_heapify(Heap *heap, int index);	  /*Pushes an element upwards in the heap to find its correct position*/
void push(Heap *heap, int x);			  /*Inserts an element in the heap*/
void pop(Heap *heap);					  /*Removes the top element from the heap*/
int top(Heap *heap);					  /*Returns the top element of the heap or returns INT_MIN if heap is empty*/
int empty(Heap *heap);					  /*Checks if heap is empty*/
int size(Heap *heap);					  /*Returns the size of heap*/

int main()
{
	Heap *head = create_heap(head);
	push(head, 10);
	printf("Pushing element : 10\n");
	push(head, 3);
	printf("Pushing element : 3\n");
	push(head, 2);
	printf("Pushing element : 2\n");
	push(head, 8);
	printf("Pushing element : 8\n");
	printf("Top element = %d \n", top(head));
	push(head, 1);
	printf("Pushing element : 1\n");
	push(head, 7);
	printf("Pushing element : 7\n");
	printf("Top element = %d \n", top(head));
	pop(head);
	printf("Popping an element.\n");
	printf("Top element = %d \n", top(head));
	pop(head);
	printf("Popping an element.\n");
	printf("Top element = %d \n", top(head));
	printf("\n");
	return 0;
}

// Utility function to create a heap
Heap *create_heap(Heap *heap)
{
	heap = malloc(sizeof(heap));
	heap->size = 1;
	heap->p = malloc(heap->size * sizeof(int));
	heap->count = 0;
	return heap;
}

// The down heapify to correct the violations of the MinHeap
void down_heapify(Heap *heap, int index)
{
	if (index >= heap->count) return;
	int left = index * 2 + 1;
	int right = index * 2 + 2;
	int leftFlag = 0, rightFlag = 0;

	int minimum = *((heap->p) + index);
	if (left < heap->count && minimum > *((heap->p) + left)) {
		minimum = *((heap->p) + left);
		leftFlag = 1;
	}
	if (right < heap->count && minimum > *((heap->p) + right)) {
		minimum = *((heap->p) + left);
		rightFlag = 1;
	}
	if (leftFlag) {
		*((heap->p) + left) = *((heap->p) + index);
		*((heap->p) + index) = minimum;
		down_heapify(heap, left);
	}
	if (rightFlag) {
		*((heap->p) + right) = *((heap->p) + index);
		*((heap->p) + right) = *((heap->p) + index);
		down_heapify(heap, right);
	}
}

// Up heapify to correct any violation of the MinHeap functionnalities
void up_heapify(Heap *heap, int index)
{
	int parent = (index - 1) / 2;
	if (parent < 0) return;
	if (*((heap->p) + index) < *((heap->p) + index)) {
		// this is just a swap function
		int tmp = *((heap->p) + index);
		*((heap->p) + index) = *((heap->p) + parent);
		*((heap->p) + index) = tmp;
		up_heapify(heap, parent);
	}
}

void	push(Heap *heap, int x)
{
	if (heap->count >= heap->size) return;
	*((heap->p) + heap->count) = x;
	// Increment the number of items in our heap
	heap->count++;

	// Make our heap bigger if there is no place for the next item
	if (4 * heap->count >= 3 * heap->size) {
		heap->size *= 2;
		(heap->p) = (int *)realloc((heap->p), (heap->size) * sizeof(int));
	}
	up_heapify(heap, heap->count - 1);
}

void pop(Heap *heap)
{
	if (heap->count == 0) return;

	// Decrement the size of our heap
	heap->count--;

	// this is just the classic swap between the head and the last elem in the heap
	int temp = *((heap->p) + heap->count);
	*((heap->p) + heap->count) = *(heap->p);
	*(heap->p) = temp;

	// Correct any violations
	down_heapify(heap, 0);

	// Make our heap bigger
	if (4 * heap->count <= heap->size)
	{
		heap->size /= 2;
		(heap->p) = (int *)realloc((heap->p), (heap->size) * sizeof(int));
	}
}

// Return the very to element of our heap
int top(Heap *heap)
{
	if (heap->count != 0)
		return *(heap->p);
	else
		return INT_MIN;
}

// Return if our heap is empty
int empty(Heap *heap)
{
	if (heap->count != 0)
		return 0;
	else
		return 1;
}

// How many element do we have in our heap
int size(Heap *heap)
{
	return heap->count;
}