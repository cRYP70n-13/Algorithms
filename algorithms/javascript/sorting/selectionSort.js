const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
         if (min_idx != i) {
             // Swapping the elements
             let tmp = arr[i];
             arr[i] = arr[min_idx];
             arr[min_idx] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort([5, 2, 4, 6, 1, 3]));
