// Powerful digit sum - Problem 056
// https://projecteuler.net/problem=56

/*
A googol (10100) is a massive number: one followed by one-hundred zeros; 100100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, ab, where a, b < 100, what is the maximum digital sum?
*/

import Arithmetic from "../000/Arithmetic";

function powerfulDigitSum(limit: bigint): number {
	let maxSum: number = 0;

	for (let a = 1n; a < limit; a++) {
		for (let b = 2n; b < limit; b++) {
			const digits = [...String(a ** b)].map(Number);
			const sum = Arithmetic.sum(digits);

			maxSum = Math.max(sum, maxSum);
		}
	}

	return maxSum;
}

powerfulDigitSum(100n);
