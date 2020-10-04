//check if letter is uppercase
const isUpperCase = str => str === str.toUpperCase();

//decipher the string
const ceaserCipher = (str, key) => {
	let decipher = '';

	//decipher each letter
	for (let i = 0; i < str.length; i++) {

		//if letter is uppercase then add uppercase letters
		if (isUpperCase(str[i])) {
			decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
		} else {
			//else add lowercase letters
			decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
		}
	}

	return decipher;
}

console.log(ceaserCipher("Otmane cRYP70N", 9));