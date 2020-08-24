class Node {
    constructor(data, next) {
        let data = this.data;
        Node *next = this.next;
    }
}

const newNode = data => {
    let newNode = new Node();
    newNode.data = data;
    newNode.next = null;
    return newNode;
}

const addOne = head => {
    let tmp = null;
    let sum, carry = 0;
    let res = head;
    while (head) {
        sum = carry + (head ? head->data : 0);
        carry = (sum >= 10 ? 1 : 0);
        sum %= 10;
        head->data = sum;
        tmp = head;
        head = head->next;
        if (carry > 0)
            tmp->next = newNode(carry);
        return res;
    }
}

const addOneMain = head => {
    head = reverseLinkedList(head);
    head = addOne(head);
    return reverseLinkedList(head);
}
