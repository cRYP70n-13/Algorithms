// this is the queue implementation in javascript
 class Queue{
  constructor(){
    this.items = [];
  }

  //Add a new element in queue
  enqueue = (elm) => {
    this.items.push(elm);
  }

  //Remove element from the queue
  Deque = () => {
    return this.items.shift();
  }

  //Return the first element from the queue
  front = () => {
    return this.items[0];
  }

  //Return the last element from the queue
  rear = () => {
    return this.items[this.items.length - 1];
  }

  //Check if queue is empty
  isEmpty = () => {
    return this.items.length == 0;
  }

  //Return the size of the queue
  size = () => {
   return this.items.length;
  }

  //Print the queue
  print = () => {
   console.log(this.items.toString());
  };

}

let queue = new Queue();


// Testing dequeue and pop on an empty queue
// returns Underflow
console.log(queue.Deque());

// returns true
console.log(queue.isEmpty());

// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

// returns 10
console.log(queue.front());

// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(queue.Deque());

// returns 20
console.log(queue.front());

// removes 20
// queue contains [30, 40, 50, 60]
console.log(queue.Deque());

// printing the elements of the queue
// prints [30, 40, 50, 60]
console.log(queue.print());
