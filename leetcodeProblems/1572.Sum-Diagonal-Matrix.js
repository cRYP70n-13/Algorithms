const sumDiagonal = mat => {
	let total = 0;
	const n = mat.length;
	for (let i = 0; i < n; i++) {
		total += mat[i][i];
		if (n - i - 1 != i)
			total += mat[n - i - 1][i];
	}
	return total;
}

console.log(sumDiagonal([[1,2,3], [4,5,6], [7,8,9]]));
