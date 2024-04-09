// Prime permutations - Problem 049
// https://projecteuler.net/problem=49

/*
The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?
*/

import getPermutations from "../000/getPermutations";
import primeSieve from "../000/primeSieve";

function findSequence(): number {
	const validPrimes: Set<number> = new Set(primeSieve(1000, 9999));
	const seen: Set<number> = new Set();
	const validPrimeSets: Set<number>[] = [];

	for (let prime of validPrimes) {
		if (seen.has(prime)) continue;

		const digits = [...String(prime)].map(Number);
		const primeSet = new Set(
			getPermutations(digits)
				.map(Number)
				.filter((n) => validPrimes.has(n))
		);

		for (let n of primeSet) {
			seen.add(n);
		}

		if (primeSet.size >= 3) {
			validPrimeSets.push(primeSet);
		}
	}

	for (let primeSet of validPrimeSets) {
		if (primeSet.has(1487)) continue;

		for (let prime of primeSet) {
			for (let i = 1; i < 5000; i++) {
				const a = prime + i;
				const b = prime + i * 2;

				if (primeSet.has(a) && primeSet.has(b)) {
					return Number(String(prime) + String(a) + String(b));
				}
			}
		}
	}

	throw Error("Sequence not found");
}

console.log(findSequence());
