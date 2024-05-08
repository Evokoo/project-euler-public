// Circular primes - Problem 035
// https://projecteuler.net/problem=35

/*
	The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

	There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

	How many circular primes are there below one million?
*/

import Misc from "../000/Misc";
import Prime from "../000/Prime";

function circularPrimeCount(limit: number): number {
	const primes: Set<number> = new Set(Prime.generatePrimes(2, 1_000_000));
	const circularPrimes: Set<number> = new Set();

	for (let n = 0; n < limit; n++) {
		if (!primes.has(n) || circularPrimes.has(n)) continue;

		const rotations = Misc.rotateInput<number>(n, "R") as number[];

		if (rotations.every((rotation) => primes.has(rotation))) {
			rotations.forEach((rotation) => circularPrimes.add(rotation));
		}
	}

	return circularPrimes.size;
}

console.log(circularPrimeCount(1_000_000));
