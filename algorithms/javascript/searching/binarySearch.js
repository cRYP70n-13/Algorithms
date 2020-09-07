const binarySearch = (list, value) => {
    let l = 0;
    let r = list.length - 1;
    let mid;

    while (l <= r) {
        mid = Math.floor((l + r)/2);
        if (list[mid] == value) return mid;
        else if (list[mid] > value) r = mid - 1;
        else l = mid + 1;
    }
    return -1;
}

console.log(binarySearch([1, 2, 4, 5, 6, 33, 57], 8));
