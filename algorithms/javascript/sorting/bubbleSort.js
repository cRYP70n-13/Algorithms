const bubbleSort = items => {
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length - i - 1; j++) {
            if (items[j] > items[j + 1]) {
                let tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
    return items;
}

console.log(bubbleSort([1, 5, 5, 6, 8, 2, 3, 5, 4]));
