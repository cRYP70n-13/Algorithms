const nthTolast = (head, n) => {
    if (head == null)
        return null;
    let index = nthTolast(head.next, n) + 1;
    if (index == n)
        return head.data;
    return index;
}
