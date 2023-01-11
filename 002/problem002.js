// Problem 002
// https://projecteuler.net/problem=2

let sum = 0;

const fib = (n, memo = {}) => {
	if (memo[n]) return memo[n];
	if (n <= 2) return 1;

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

	if (memo[n] >= 4000000) {
		return sum;
	} else if (memo[n] % 2 === 0) {
		sum += memo[n];
	}

	return memo[n];
};

console.log(fib(1000));
