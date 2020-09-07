const min = (a, b) => a < b ? a : b;

const jumpSearch = (arr, x, n) => {

    // Find the block size to jump with
    let step = Math.sqrt(n);

    // Finding the block where element is
    // present (if it is present)
    let prev = 0;
    while (arr[min(step, n) - 1] < x) {
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n) return -1;
    }

    while (arr[prev] < x) {
        prev++;

        if (prev === min(step, n)) return -1;
    }

    if (arr[prev] === x) return prev;

    return -1;
}

console.log(jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 610, 16));
