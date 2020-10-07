const countNode = head => {
    let count = 0;
    while (head) {
        count++;
        head = head.next;
    }
    return count;
}

const deleteMidNode = head => {
    let it = head;
    if (head == null)
        return null;
    if (head.next == null)
    {
        delete(head);
        return null;
    }
    let mid = countNode(head) / 2;
    while (mid-- > 1) {
        head = head.next;
    }
    head.next = head.next.next;
    return it;
}
