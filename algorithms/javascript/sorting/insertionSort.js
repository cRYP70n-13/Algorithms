const insertionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j > -1 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
selectionSort(inputArr);
console.log(inputArr);
