/*
 * @lc app=leetcode id=804 lang=javascript
 *
 * [804] Unique Morse Code Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
	const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

	const morseMap = new Map(
		'abcdefghijklmnopqrstuvwxyz'
			.split('')
			.slice()
			.map((val, idx) => [val, morse[idx]])
	);

	const convertToMorse = word => {
		let transformed = [];
		for (let i = 0; i < word.length; i++)
			transformed.push(morseMap.get(word[i]));

		return transformed.join('');
	}

	const wordsSet = new Set();

	for (let i = 0; i < words.length; i++)
		wordsSet.add(convertToMorse(words[i]));

	return wordsSet.size;
};
// @lc code=end
