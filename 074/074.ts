// Digit factorial chains - Problem 074
// https://projecteuler.net/problem=74

/*
The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

1! + 4! + 5! = 1 + 24 + 120 = 145

Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

169 → 363601 → 1454 → 169
871 → 45361 → 871
872 → 45362 → 872

It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

69 → 363600 → 1454 → 169 → 363601 (→ 1454)
78 → 45360 → 871 → 45361 (→ 871)
540 → 145 (→ 145)

Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

How many chains, with a starting number below one million, contain exactly sixty non-repeating terms?
*/

import factorial from "../000/factorial";

function generateFactorials(limit: number): Map<number, number> {
	const factorials: Map<number, number> = new Map();

	for (let i = 0; i < limit; i++) {
		if (i === 0) factorials.set(i, 1);
		else factorials.set(i, factorial(i));
	}

	return factorials;
}

function findDigitFactorialChains(limit: number): number {
	const factorials = generateFactorials(10);
	const validNumbers: Set<number> = new Set();

	function factorialSum(n: number): number {
		return [...String(n)].reduce((acc, cur) => acc + factorials.get(+cur)!, 0);
	}

	for (let i = 1; i < 1_000_000; i++) {
		let terms: Set<number> = new Set([i]),
			n: number = factorialSum(i);

		while (!terms.has(n)) {
			terms.add(n);
			n = factorialSum(n);
		}

		if (terms.size === limit) {
			validNumbers.add(i);
		}
	}

	return validNumbers.size;
}

findDigitFactorialChains(60);
