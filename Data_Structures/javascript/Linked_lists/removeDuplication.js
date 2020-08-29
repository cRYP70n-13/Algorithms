const removeDuplication = head => {
    let tmp = null;
    let ptr2 = null;
    let ptr1 = head;
    while (ptr1 && ptr1.next) {
        ptr2 = ptr1;
        while (ptr2.next) {
            if (ptr1.val == ptr2.val) {
                tmp = ptr1.next;
                ptr1.next = ptr2.next.next;
                delete(tmp);
            } else {
                ptr2 = ptr2.next;
            }
        }
        ptr1 = ptr1.next;
    }
}
