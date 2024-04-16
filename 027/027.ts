// Quadratic Primes - Problem 027
// https://projecteuler.net/problem=27

// See link for description

import isPrime from "../000/isPrime";
import primeSieve from "../000/primeSieve";

function coefficientsProduct(limit: number) {
	const primes: number[] = primeSieve(2, limit);
	const max = { a: 0, b: 0, count: 0 };

	for (let a = -999; a < 1000; a += 2) {
		for (let b of primes) {
			let n = 0;

			do {
				n++;
			} while (isPrime(n ** 2 + a * n + b));

			if (n > max.count) {
				max.a = a;
				max.b = b;
				max.count = n;
			}
		}
	}

	return max.a * max.b;
}

console.log(coefficientsProduct(1000));
