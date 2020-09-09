// helper function to get the last nth digit of a number
const getDigit = (num, nth) => {
    // get last nth digit of a number
    let ret = 0;
    while(nth--){
        ret = num % 10
        num = Math.floor((num - ret) / 10)
    }
    return ret
}

// radixSort
const radixSort = list => {
    let max = Math.floor(Math.log10(Math.max.apply(Math,list)));
    // get the length of digits of the max value in this array
    let digitBuckets = [];
    let idx = 0;

    for (let i = 0; i < max + 1; i++) {

        // rebuild the digit buckets according to this digit
        digitBuckets = []
        for (let j = 0; j < list.length; j++){
            let digit = getDigit(list[j], i + 1);

            digitBuckets[digit] = digitBuckets[digit] || [];
            digitBuckets[digit].push(list[j]);
        }

        // rebuild the list according to this digit
        idx = 0
        for (let t = 0; t < digitBuckets.length; t++){
            if (digitBuckets[t] && digitBuckets[t].length > 0) {
                for(j = 0; j < digitBuckets[t].length; j++)
                    list[idx++] = digitBuckets[t][j];
            }
        }
    }
    return list;
}

console.log(radixSort([31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2]));
