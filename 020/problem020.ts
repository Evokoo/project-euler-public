// Problem 020
// https://projecteuler.net/problem=20

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

function factorial(n: bigint, output: bigint = 1n): bigint {
	if (n === 0n) {
		return output;
	} else {
		output *= n;
		return factorial(n - 1n, output);
	}
}

let input: bigint = 100n,
	n = factorial(input),
	sum = [...String(n)].reduce((acc, cur) => acc + +cur, 0);

console.log(sum);
