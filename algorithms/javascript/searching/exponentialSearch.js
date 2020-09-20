const BinarySearch = (arr, start, end, x) => {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x)
            return true;
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}

const exponentialSearch = (arr, x) => {
    if (arr[0] === x)
        return 0;
    let i = 0;
    while (i < arr.length && arr[i] != x)
        i *= 2;

    return BinarySearch(arr, i/2, Math.min(i, arr.length, x));
}

console.log(exponentialSearch([2, 3, 4, 10, 40], 10));
