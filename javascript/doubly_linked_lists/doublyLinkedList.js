class DoubleLinkedList extends LinkedList {
  constructor(func) {
    super(func);
    this.tail = undefined;
  }

  push(element) {
    let node = new DoublyNode(element);
    if (this.head == undefined) {
      this.head = node; //1
      this.tail = node; //2
    } else {
      let current = this.tail; //3
      current.next = node; //4
      node.previous = current; //5
      this.tail = node; //6
    }
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      let node = new DoublyNode(element);
      let current = this.head; //1
      if (index == 0) {
        if (this.head == undefined) {
          //2
          this.head = node; //3
          this.tail = node; //4
        } else {
          current.previous = node; //5
          node.next = current; //6
          this.head = node; //7
        }
      } else if (index == this.count) {
        current = this.tail;
        current.next = node;
        node.previous = current;
        this.tail = node;
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = node;
        node.next = current;
        node.previous = previous;
        current.previous = node;
      }
      this.count++;
    }
  }

  removeAt(index) {
    if (this.isEmpty()) {
      return undefined;
    }
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index == 0) {
        this.head = current.next;
        if (this.count == 1) {
          this.tail = undefined;
        } else {
          this.head.previous = undefined;
        }
      } else if (index == this.count - 1) {
        current = this.tail;
        this.tail = current.previous;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.previous;
        // link previous with current's next
        previous.next = current.next;
        current.next.previous = previous;
      }
      this.count--;
      return current.element;
    }
  }
}
