const mergeSort = list => {
    if (list.length < 2) return list;
    let mid = Math.floor(list.length / 2);
    let left = mergeSort(list.slice(0, mid));
    let right = mergeSort(list.slice(mid));
    return merge(left, right);
}
// compare the lists element by element and return the concatenated resultList
const merge = (sublist1, sublist2) => {
    let resultList = [];
    while (sublist1.length > 0 && sublist2.length > 0)
        resultList.push(sublist1[0] < sublist2[0] ? sublist1.shift() : sublist2.shift());
    return resultList.concat(sublist1.length ? sublist1 : sublist2);
}
const list = [6, 5, 3, 1, 8, 7, 2, 4, 2, 5, 1, 2, 3]
console.log(mergeSort(list))
