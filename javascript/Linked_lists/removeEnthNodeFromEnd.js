const removeEnth = (head, n) => {
    function FindLen(node) {
        if (!node) return null;
        return len(node.next) + 1;
    }

    const len = FindLen(head);
    let index = len - n - 1;
    let it = head;
    while (index--) it = it.next;
    it.next = it.next.next;
    return head;
}
