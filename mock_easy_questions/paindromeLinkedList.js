const palindromeLinkedList = head => {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        if (arr[low] === arr[high]){
            low++;
            high--;
        } else {
            return false;
        }
    }
    return true;
}
