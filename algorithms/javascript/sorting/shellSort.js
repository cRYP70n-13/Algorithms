const shellSort = arr => {
  let n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {

    for (let i = gap; i < n; i++) {

      let tmp = arr[i];
      let j = i;

      while (j >= gap && arr[j-gap] > tmp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = tmp;
    }
    gap = Math.floor(gap / 2);
  }
}

console.log(sorting([ 12, 34, 54, 2, 3]));
