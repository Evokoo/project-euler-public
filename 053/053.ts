// Combinatoric selections - Problem 053
// https://projecteuler.net/problem=53

/* see link for details */

import Factorial from "../000/factorial";

function combinationCount(n: number, r: number): number {
	return (
		Factorial<number>(n) / (Factorial<number>(r) * Factorial<number>(n - r))
	);
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
