// this is the queue implementation in javascript
class Queue {
	constructor() {
		this.items = [];
	}
	// Functions to be implemented
	// enqueue(item)
	// dequeue()
	// front()
	// isEmpty()
	// printQueue()
	Enqueue(element) {
		this.items.push(element);
	}
	isEmpty() {
		return this.items.length === 0;
	}
	Deque() {
		if (isEmpty())
			return "Underflow";
		return this.items.shift();
	}
	front() {
		if (isEmpty())
			return "No Element in the Queue";
		return this.items[0];
	}
	printQueue() {
		let str = '';
		for (let i = 0; i < this.items.length; i++)
			str += this.items[i] + ' ';
		return str;
};
