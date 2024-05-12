// Distinct primes factors - Problem 047
// https://projecteuler.net/problem=47

/*
	The first two consecutive numbers to have two distinct prime factors are:

	14 = 2 × 7
	15 = 3 × 5

	The first three consecutive numbers to have three distinct prime factors are:

	644 = 2² × 7 × 23
	645 = 3 × 5 × 43
	646 = 2 × 17 × 19.

	Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
*/

import Prime from "../000/Prime";

function distinctPrimeFactors(target: number) {
	const result: Set<number> = new Set();
	const primes: Set<number> = new Set(Prime.generatePrimes(2, 1_000_000));

	for (let n = 0; result.size !== target; n++) {
		const primeFactors: number[] = Prime.primeFactors(n, primes);

		if (primeFactors.length === target) {
			result.add(n);
		} else {
			result.clear();
		}
	}

	return [...result][0];
}

console.log(distinctPrimeFactors(4));
