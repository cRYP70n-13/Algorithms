const convertBinaryNumber = head => {
    let num = ''
    while (head){
        num += head.val;
        head = head.next;
    }
    return parseInt(num, 2);
}
