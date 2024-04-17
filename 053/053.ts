// Combinatoric selections - Problem 053
// https://projecteuler.net/problem=53

/* see link for details */

import factorial from "../000/factorial";

function combinationCount(n: number, r: number): number {
	return factorial(n) / (factorial(r) * factorial(n - r));
}

export default function combinatoricCount(limit: number) {
	let count = 0;

	for (let n = 1; n <= 100; n++) {
		for (let r = 1; r <= n; r++) {
			if (combinationCount(n, r) > limit) {
				count++;
			}
		}
	}

	return count;
}

console.log(combinatoricCount(1_000_000));
