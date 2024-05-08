// Digit Factorials - Problem 34
// https://projecteuler.net/problem=34

/*
	145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

	Find the sum of all numbers which are equal to the sum of the factorial of their digits.

	Note: As 1! = 1 and 2! = 2 are not sums they are not included.
*/

import factorial from "../000/factorial";

function getBaseFactorials(): Map<number, number> {
	const factorials: Map<number, number> = new Map();

	for (let i = 0; i < 10; i++) {
		factorials.set(i, factorial(i));
	}

	return factorials;
}

function factorialSum(): number {
	const factorials: Map<number, number> = getBaseFactorials();

	let totalSum = 0;

	for (let n = 3; n < 10_000_000; n++) {
		const digits: number[] = [...String(n)].map(Number);
		let digitSum = 0;

		for (let digit of digits) {
			digitSum += factorials.get(digit)!;

			if (digitSum > n) break;
		}

		if (digitSum === n) {
			totalSum += n;
		}
	}

	return totalSum;
}

console.log(factorialSum());
