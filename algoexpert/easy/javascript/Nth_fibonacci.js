const Nth_fibonacci = n => {
	if (n == 1) return 0;
	if (n == 2) return 1;
	return Nth_fibonacci(n - 1) + Nth_fibonacci(n - 2);
}


console.log(Nth_fibonacci(6));