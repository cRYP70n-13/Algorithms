class QueueElement{
    constructor(element, priority){
        this.element = element;
        this.priority = priority;
    }
}

//PriorityQueue
class PriorityQueue{
    constructor(){
        this.items = [];
    }

    //Add a new element in queue
    enqueue = (element, priority) => {
        let queueElement = new QueueElement(element, priority);

        //To check if element is added
        let added = false;
        for (let i = 0; i < this.items.length; i++){
            //We are using giving priority to higher numbers
            //If new element has more priority then add it at that place
            if (queueElement.priority > this.items[i].priority) {
                this.items.splice(i, 0, queueElement);

                //Mark the flag true
                added = true;
                break;
            }
        }

        //If element is not added
        //Then add it to the end of the queue
        if (!added) {
            this.items.push(queueElement);
        }
    }

    //Remove element from the queue
    dequeue = () => {
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
        for (let i = 0; i < this.items.length; i++) {
            console.log(`${this.items[i].element} - ${this.items[i].priority}`);
        }
    }
}

let pQ = new PriorityQueue();
pQ.enqueue(1, 3);
pQ.enqueue(5, 2);
pQ.enqueue(6, 1);
pQ.enqueue(11, 1);
pQ.enqueue(13, 1);
pQ.enqueue(10, 3);
pQ.dequeue();
pQ.print();
