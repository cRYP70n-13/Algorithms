// To be honest this is wired problem but anyway let's do it
const ProductSum = (arr, coef = 1) => {
	let sum = 0;
	for (let i of arr) {
		if (!Array.isArray(i))
			sum += i;
		else
			sum += ProductSum(i, coef + 1)
	}
	return sum * coef;
}

// console.log(ProductSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
console.log(ProductSum([-9, 6, [5, 3, 2], 1, 13, [9, 8]]));
// console.log(ProductSum([13, 9, [8, -3, 1], 4, 0, [6, [9, 15], 3]]));