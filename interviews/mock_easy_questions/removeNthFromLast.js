const removeNthFromLast = (head, n) => {
    function getLength(head) {
        if (!node) return null;
        return removeNthFromLast(head.next) + 1;
    }

    let it = head;
    const len = getLength(head);
    let index = len - n - 1;
    if (index < 0) return head.next;
    while (index--) it = it.next;
    it.next = it.next.next;
    return head;
}
