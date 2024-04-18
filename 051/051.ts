// Prime Digit Replacements - Problem 051
// https://projecteuler.net/problem=51

/*
By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.
*/

import isPrime from "../000/isPrime";
import primeSieve from "../000/primeSieve";

function getDigitCount(n: number) {
	const count = Array(10).fill(0);
	const digits = [...String(n)];

	for (let digit of digits) {
		count[+digit]++;
	}

	return count;
}

export default function smallestPrimeDigitReplacment(
	familySize: number,
	maxPrime: number = 1_000_000
) {
	const primes = primeSieve(2, maxPrime);

	for (let prime of primes) {
		const primeStr = String(prime);

		for (let [digit, count] of getDigitCount(prime).entries()) {
			if (count >= 2) {
				const pattern = RegExp(String(digit), "g");
				let primeCount = 0;

				for (let n = 0; n < 10; n++) {
					const variation = +primeStr.replace(pattern, String(n));

					if (variation >= prime && isPrime(variation)) {
						primeCount++;
					}
				}

				if (primeCount === familySize) {
					return prime;
				}
			}
		}
	}

	throw Error("Prime number not found");
}

// console.log(smallestPrimeDigitReplacment(8));
