const reverseLinkedList = head => {
    let prev = null;
    let next = null;
    while (head) {
        // Storing the pointer of the next index of the head
        next = head.next;

        // Moving the head's pointer to the previous ndoe
        head.next = prev;

        // changing the value of the prev to be the head pointer
        prev = head;

        // And then changing the value of the head to be the next one
        head = next;
    }
    return prev;
};
