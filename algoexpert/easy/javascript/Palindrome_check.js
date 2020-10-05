const checkPalindrome = str => {
	return str === str.split('').reverse().join('');
}

// We can do it in another way
const palindrome = str => {
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right])
			return false;
		left++;
		right--;
	}
	return true;
}
console.log(palindrome('abcbas'));