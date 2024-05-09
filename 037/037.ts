// Truncatable primes - Problem 037
// https://projecteuler.net/problem=37

/*
	The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

	Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

	NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes
*/

import Prime from "../000/Prime";

function isTruncatablePrime(n: number, primes: Set<number>): boolean {
	const digits: string = String(n);
	const rtl: string[] = [...digits];
	const ltr: string[] = [...digits];

	for (let i = 0; i < digits.length; i++) {
		const a = Number(rtl.join(""));
		const b = Number(ltr.join(""));

		if (primes.has(a) && primes.has(b)) {
			rtl.shift();
			ltr.pop();
		} else {
			return false;
		}
	}

	return true;
}

function truncatablePrimeSum() {
	const primes: Set<number> = new Set(Prime.generatePrimes(2, 1_000_000));
	const validPrimes: Set<number> = new Set();

	let sum = 0;

	for (let n = 0; validPrimes.size !== 11; n++) {
		if (n > 8 && primes.has(n) && isTruncatablePrime(n, primes)) {
			sum += n;
			validPrimes.add(n);
		}
	}

	return sum;
}

console.log(truncatablePrimeSum());
