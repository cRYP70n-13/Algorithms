/**
 * C++ Program to implement the Min_heap DS and it operations
 * Created By: cRYP70N
 * Date: 30/09/2020
 */

#include <bits/stdc++.h>

using namespace std;

void	swap(int *x, int *y) 
{
	int tmp = *x;
	*x = *y;
	*y = tmp;
}

// This is the class definition for my MinHeap
class MinHeap {
	int *heap_array; // a pointer to the Array of array
	int capacity; // The max size of our heap that can maintin
	int heap_size; // The actual size of our Array
	public:
		// Constructor
		MinHeap(int capacity);

		// A utility funciton to heapify our heap
		void MinHeapify(int );

		// This is to calculate the parrent of an element using
		// the formula:
		// Arr[(i-1)/2]	Returns the parent node
		// Arr[(2 * i) + 1] Returns the left child node
		// Arr[(2 * i) + 2] Returns the right child node
		int parent(int i)
		{
			return (i - 1) / 2; 
		}

		// To return the left child
		int	left(int i)
		{
			return ((2 * i) + 1);
		}

		// To return the right child
		int right(int i)
		{
			return ((2 * i) + 2);
		}

		// this is to get the root which is the min element
		int exctractMin();

		// Decreases key value of key at index i to new_val
		void decreaseKey(int i, int new_val);

		// Returns the minimum key (key at root) from min heap
		int getMin()
		{
			return heap_array[0];
		}

		// Deletes a key stored at index i
		void deleteKey(int i);

		// Inserts a new key 'k'
		void insertKey(int k);
};

// Create a new instant of our MinHeap class (Object)
MinHeap::MinHeap(int cap)
{
	heap_size = 0;
	capacity = cap;
	heap_array = new int[cap];
}

void MinHeap::insertKey(int k)
{
	if (heap_size == capacity) {
		cout << "WTF We cannot insert this damn key";
		return;
	}

	// First we insert the key at the very bottom left
	heap_size++;
	int i = heap_size -1;
	heap_array[i] = k;

	// now it's time to fix the heap property
	while (i != 0 && heap_array[parent(i)] > heap_array[i]) {
		swap(&heap_array[i], &heap_array[parent(i)]);
		i = parent(i);
	}
}

// Decreases value of key at index 'i' to new_val.  It is assumed that
// new_val is smaller than harr[i].
void MinHeap::decreaseKey(int i, int new_val)
{
	heap_array[i] = new_val;
	while (i != 0 && heap_array[parent(i)] > heap_array[i])
	{
		swap(&heap_array[i], &heap_array[parent(i)]);
		i = parent(i);
	}
}

// Remove the very minimum number from a MinHeap (root)
int	MinHeap::exctractMin()
{
	if (heap_size <= 0)
		return INT_MAX;
	if (heap_size == 1) {
		return heap_array[0];
		heap_size--;
	}
	// So we need to store the root value and fix the MinHeap property
	int root = heap_array[0];
	heap_array[0] = heap_array[heap_size-1];
	heap_size--;
	MinHeapify(0);

	return root;
}

// this is the deleteKey function
void MinHeap::deleteKey(int key)
{
	decreaseKey(key, INT_MIN);
	exctractMin();
}

// This is the function that corrects all the MinHeap violations
void MinHeap::MinHeapify(int i)
{
	int l = left(i);
	int r = right(i);
	int smallest = i;

	if (l < heap_size && heap_array[l] < heap_array[i])
		smallest = l;
	if (r < heap_size && heap_array[r] < heap_array[i])
		smallest = r;
	if (smallest != i) {
		swap(&heap_array[i], &heap_array[smallest]);
		MinHeapify(smallest);
	}
}

int main()
{
	MinHeap h(11);
	h.insertKey(3);
	h.insertKey(2);
	h.deleteKey(1);
	h.insertKey(15);
	h.insertKey(5);
	h.insertKey(4);
	h.insertKey(45);
	cout << h.exctractMin() << " ";
	cout << h.getMin() << " ";
	h.decreaseKey(2, 1);
	cout << h.getMin();
	return 0;
}