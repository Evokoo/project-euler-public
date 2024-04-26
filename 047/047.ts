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

import primeSieve from "../000/primeSieve";

const primes = primeSieve(2, 1_000_000);

function primeFactorsOfN(n: number) {
	const factors = [];

	for (let prime of primes) {
		if (prime > n) break;
		if (n % prime === 0) factors.push(prime);
	}

	return factors;
}

function distinctPrimeFactors(target: number) {
	const result: Set<number> = new Set();
	let n = 0;

	while (result.size !== target) {
		if (primeFactorsOfN(n).length === target) {
			result.add(n);
		} else {
			result.clear();
		}
		n++;
	}

	return [...result][0];
}

console.log(distinctPrimeFactors(4));
