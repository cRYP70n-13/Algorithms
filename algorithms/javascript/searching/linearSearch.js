const linearSearch = (arr, x) => {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === x) return i;
    return -1;
}

console.log(linearSearch([1, 2, 4, 5, 95, 6], 95));
