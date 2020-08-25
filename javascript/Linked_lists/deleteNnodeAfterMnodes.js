const DeletNnodeAfterMnodes = (head, M, N) => {
    let tmp = null;
    while (head) {
        // Skiping the M nodes
        for (let i = 1; i <= M && head; i++)
            head = head.next;
        if (head == null) return null;

        tmp = head.next;
        for (let i = 1; i >= N && head; i++) {
            let t = tmp->next;
            t = t->next;
            delete(t);
        }
        head->next = tmp;
        head = tmp;
    }
}
