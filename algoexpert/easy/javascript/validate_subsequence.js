/** 
 * [5, 1, 22, 25, 6, -1, 8, 10]
 * [1, 6, -1, 10]
 */

const validateSubSequence = (arr, subseq) => {
	let j = 0;
	for (let i = 0; i < arr.length; i++)
		if (subseq[j] === arr[i]) j++;
	return j === subseq.length;
}

console.log(validateSubSequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));