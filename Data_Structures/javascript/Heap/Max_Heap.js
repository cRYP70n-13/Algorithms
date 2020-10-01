/** 
 * Author: cRYP70N
 * Max Heap Implementation in javascript
 */

// The class definition of our Heap data structure
class MaxHeap {
	constructor() {
		this.heap = [];
	}

	// insert a new value to our heap
	insert = val => {
		this.heap.push(val);
		this.heapify();
	}

	// Return the size of our Heap
	size = () => this.heap.length;

	// Check if it's empty
	empty = () => this.size() === 0;

	// Using the iterative approach to reorder our heap after insertion
	heapify = () => {
		let index = this.size() - 1;

		while (index > 0) {
			const element = this.heap[index];
			const parentIndex = Math.floor((index - 1) / 2);
			const parent = this.heap[parentIndex];

			if (parent[0] > element[0]) break;
			this.heap[index] = parent;
			this.heap[parentIndex] = element;
			index = parentIndex;
		}
	}

	// get the maximun element from our Heap (Root)
	extractMax = () => {
		const max = this.heap[0];
		const tmp = this.heap.pop();

		if (!this.empty()) {
			this.heap[0] = tmp;
			this.down_heapify(0);
		}
		return max;
	}

	// Helper function like heapify but from the bottom
	down_heapify = (index) => {
		const left = 2 * index + 1
		const right = 2 * index + 2
		let largest = index
		const length = this.size()

		if (left < length && this.heap[left][0] > this.heap[largest][0])
			largest = left;
		if (right < length && this.heap[right][0] > this.heap[largest][0])
			largest = right;
		if (largest !== index) {
			// swap
			const tmp = this.heap[largest];
			this.heap[largest] = this.heap[index];
			this.heap[index] = tmp;
			this.down_heapify(largest);
		}
	}
}

const maxHeap = new MaxHeap();
maxHeap.insert([4])
maxHeap.insert([3])
maxHeap.insert([6])
maxHeap.insert([1])
maxHeap.insert([8])
maxHeap.insert([2])

while (!maxHeap.empty()) {
	const mx = maxHeap.extractMax()
	console.log(mx)
}