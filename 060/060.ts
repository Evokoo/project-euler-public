// Prime Pair Sets - Problem 060
// https://projecteuler.net/problem=60

/*
The primes 3,7,109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 
7 and 109, 7109 both 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.
*/

import isPrime from "../000/isPrime";

function findSum(setSize: number): number {
	const primes: Set<number> = new Set();

	for (let i = 2; true; i++) {
		if (!isPrime(i)) continue;
		else primes.add(i);

		const primeSet = [i];

		for (let j = 2; j < 10_000; j++) {
			if (!primes.has(j) || !isPrime(j)) continue;

			const isValid = primeSet.every((n) => {
				const n1 = Number(String(n) + String(j));
				const n2 = Number(String(j) + String(n));

				if (
					(primes.has(n1) || isPrime(n1)) &&
					(primes.has(n2) || isPrime(n2))
				) {
					primes.add(n1);
					primes.add(n2);

					return true;
				} else {
					return false;
				}
			});

			if (isValid) {
				primeSet.push(j);
			}
		}

		if (primeSet.length === setSize) {
			console.log;
			return primeSet.reduce((acc, cur) => acc + cur, 0);
		}
	}

	throw Error("Sum not found");
}

console.log(findSum(5));
