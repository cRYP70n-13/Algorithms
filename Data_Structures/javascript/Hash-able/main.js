class HashTable {
	constructor() {
		// This will creat an array of 100 bucket
		this.size = 10000;
		this.bucket = Array(10000).fill(null).map(() => []);
	}

	hash(key) {
		let hash = 0;
		for (const char of key) 
			hash += char.charCodeAt(0);

		return hash % this.size;
	}

	set(key, value) {
		const hashedKey = this.hash(key);
		const bucketArray = this.bucket[hashedKey];
		const storedElement = bucketArray.find((e) =>  e.key === key );

		if (storedElement) {
			storedElement.val = value;
		} else {
			bucketArray.push({
				key,
				val: value
			});
		}
		
	}

	get(key) {
		const hashedKey = this.hash(key);
		const bucketArray = this.bucket[hashedKey];
		const storedElement = bucketArray.find((e) => e.key === key);

		return storedElement;
	}

	showInfo() {
		for (const key in this.bucket) {
			if (this.bucket[key] !== null)
				console.log(key, this.bucket[key]);
		}
	}
}


// Okay let's test this shit
const word = 'Otmane Kimdil';

const findDuplicate = str => {
	const table = new HashTable();

	for (const char of str) {
		if (table.get(char))
			return char;
		table.set(char, 1);
	}
}

console.log(findDuplicate(word));