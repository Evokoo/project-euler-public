// Consecutive prime sum - Problem 050
// https://projecteuler.net/problem=50

/*
	The prime 41, can be written as the sum of six consecutive primes:

	41 = 2 + 3 + 5 + 7 + 11 + 13
	This is the longest sum of consecutive primes that adds to a prime below one-hundred.

	The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

	Which prime, below one-million, can be written as the sum of the most consecutive primes?
*/

import Prime from "../000/Prime";

function largetSumPrime(limit: number): number {
	const primes: number[] = Prime.generatePrimes(2, limit);
	const largest: Record<string, number> = { number: 0, consecutive: 0 };

	for (let i = 0; i < primes.length; i++) {
		let sum = primes[i];
		let count = 1;

		for (let j = i + 1; j < primes.length; j++) {
			sum += primes[j];
			count++;

			if (sum > limit) {
				break;
			}

			if (Prime.isPrime(sum) && count > largest.consecutive) {
				largest.number = sum;
				largest.consecutive = count;
			}
		}
	}

	return largest.number;
}

console.log(largetSumPrime(1_000_000));
