function interpolationSearch(sortedArray, seekIndex) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    const rangeDiff = sortedArray[rightIndex] - sortedArray[leftIndex];
    const indexDiff = rightIndex - leftIndex;
    const valueDiff = seekIndex - sortedArray[leftIndex];

    if (valueDiff < 0) {
      return -1;
    }

    if (!rangeDiff) {
      return sortedArray[leftIndex] === seekIndex ? leftIndex : -1;
    }

    const middleIndex =
      leftIndex + Math.floor((valueDiff * indexDiff) / rangeDiff);

    if (sortedArray[middleIndex] === seekIndex) {
      return middleIndex;
    }

    if (sortedArray[middleIndex] < seekIndex) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}
