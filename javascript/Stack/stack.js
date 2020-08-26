// this is the Stack implementation using Arrays
class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }

    length() {
      return this.top;
    }

    peek() {
        return this.data[this.top-1];
    }

    isEmpty() {
        return this.top === 0;
    }

    pop() {
        if( this.isEmpty() === false ) {
            this.top = this.top -1;
            return this.data.pop(); // removes the last element
        }
    }

    printStack() {
        var top = this.top - 1;
        while(top >= 0) {
            console.log(this.data[top]);
            top--;
        }
    }

    reverse() {
        this._reverse(this.top - 1 );
    }

    _reverse(index) {
        if(index != 0) {
            this._reverse(index-1);
        }
        console.log(this.data[index]);
    }
}

let stack = new Stack();

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
stack.printStack();

// returns 30
console.log('Peeking ', stack.peek());

console.log('Is it Empty: ', stack.isEmpty());

// returns 30 and remove it from stack
console.log('Popping', stack.pop());

// returns [10, 20]
stack.printStack();
