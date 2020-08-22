const removeNode = node => {
    node.val = node.next.val;
    node.next = node.next.next;
}

// OR we can do it with another way
const removeNode = node => {
    Object.assign(node, node.next);
}
