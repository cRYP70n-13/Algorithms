const checkPalindrome = str => {
	return str === str.split('').reverse().join('');
}

console.log(checkPalindrome('abcba'));