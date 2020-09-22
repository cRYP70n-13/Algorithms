/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    // First of all we count the number of spaces
    const count = text.split("").reduce((acc, el) => {
		if (el ===" ")
			return acc + 1
		else
			return acc
	}, 0);

	// count words
    const words = text.split(" ").filter(el => el!== "");

    // handle case for one word
    if (words.length === 1) {
        let an = words[0];
        for (let i = 0; i < count; i++)
            an += ' '
        return an
    }

	// get spaces between words
    const spaceEqual = parseInt(count / (words.length - 1));
    let space = '';

	// get the number of space characters to be put between words
    for (let i = 0; i < spaceEqual; i++)
        space += ' ';

    let ans = words.join(space);

    if ((count % (words.length - 1)) !== 0)
        for(let i = 0; i < count % (words.length - 1); i++)
            ans += ' '

    return ans
};
