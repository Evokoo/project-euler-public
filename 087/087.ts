// Prime power triples - Problem 087
// https://projecteuler.net/problem=87

/*
The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

28 = 2^2 + 2^3 + 2^4
33 = 3^2 + 2^3 + 2^4
49 = 5^2 + 2^3 + 2^4
47 = 2^2 + 3^3 + 2^4

How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?
*/

import primeSieve from "../000/primeSieve";

function primePowerSums(limit: number) {
	const primes: number[] = primeSieve(2, ~~Math.sqrt(limit));
	const valid: Set<number> = new Set();

	for (let a = 0; a < primes.length; a++) {
		for (let b = 0; b < primes.length; b++) {
			for (let c = 0; c < primes.length; c++) {
				const A = primes[c] ** 2;
				const B = primes[b] ** 3;
				const C = primes[a] ** 4;
				const sum = A + B + C;

				if (sum > limit) {
					break;
				} else {
					valid.add(sum);
				}
			}
		}
	}

	return valid.size;
}

console.log(primePowerSums(50_000_000));
