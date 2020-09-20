const combsort = arr => {
  const is_array_sorted = arr => {
    let sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        break;
      }
    }
    return sorted;
  }

  let iteration_count = 0;
  let gap = arr.length - 2;
  let decrease_factor = 1.25;

  // Repeat iterations Until array is not sorted
  while (!is_array_sorted(arr))
  {
    // If not first gap  Calculate gap
    if (iteration_count > 0)
      gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

    // Set front and back elements and increment to a gap
    let front = 0;
    let back = gap;
    while (back <= arr.length - 1)
    {
      // Swap the elements if they are not ordered

      if (arr[front] > arr[back])
      {
        let temp = arr[front];
        arr[front] = arr[back];
        arr[back] = temp;
      }

      // Increment and re-run swapping

      front += 1;
      back += 1;
    }
    iteration_count += 1;
  }
  return arr;
}

let arr = [3, 0, 2, 5, -1, 4, 1];
console.log("Original Array Elements");
console.log(arr);
console.log("Sorted Array Elements");
console.log(combsort(arr));
