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

function sumFactorials(n: number): number {
	const factorials: Record<string, number> = {
		"0": 1,
		"1": 1,
		"2": 2,
		"3": 6,
		"4": 24,
		"5": 120,
		"6": 720,
		"7": 5_040,
		"8": 40_320,
		"9": 362_880,
	};

	let digits: string[] = [...String(n)],
		sum: number = digits.reduce((acc, cur) => acc + factorials[cur], 0);

	return sum;
}

const validNumbers: Set<number> = new Set();

for (let i = 1; i < 1_000_000; i++) {
	let terms: Set<number> = new Set([i]),
		n: number = sumFactorials(i);

	while (!terms.has(n)) {
		terms.add(n);
		n = sumFactorials(n);
	}

	if (terms.size === 60) {
		validNumbers.add(i);
	}
}

console.log(validNumbers);
