// Powerful digit sum - Problem 056
// https://projecteuler.net/problem=56

/*
A googol (10100) is a massive number: one followed by one-hundred zeros; 100100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, ab, where a, b < 100, what is the maximum digital sum?
*/

let maxSum: number = 0;

function sumDigits(n: bigint): number {
	let digits = [...String(n)].map(Number),
		sum = digits.reduce((acc, cur) => acc + cur, 0);

	return sum;
}

for (let a = 1n; a < 100; a++) {
	for (let b = 2n; b < 100; b++) {
		let digitSum: number = sumDigits(a ** b);
		maxSum = Math.max(digitSum, maxSum);
	}
}

console.log(maxSum);
