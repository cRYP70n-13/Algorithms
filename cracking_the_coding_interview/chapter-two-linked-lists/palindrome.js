const checkPalindrom = head => {
    let arr = [head.val];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let low = 0;
    let high = arr.length -1;
    while (low < high) {
        if (arr[low] === arr[high]) {
            high--;
            low++;
        } else {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrom([-129, -129]));
