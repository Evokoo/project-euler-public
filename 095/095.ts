// Amicable chains - Problem 095
// https://projecteuler.net/problem=95

/*
The proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.

Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.

Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

Since this chain returns to its starting point, it is called an amicable chain.

Find the smallest member of the longest amicable chain with no element exceeding one million.
*/

import getSum from "../000/getSum";
import isPrime from "../000/isPrime";

const cache: Map<number, number[]> = new Map();

export function getDivisors(n: number) {
	if (cache.has(n)) {
		return cache.get(n)!;
	}

	let properDivisors: Set<number> = new Set([1]);

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i !== 0) {
			continue;
		} else {
			for (let divisor of cache.get(i) ?? []) {
				properDivisors.add(divisor);
			}
			properDivisors.add(i);
			properDivisors.add(n / i);
		}
	}

	const divisorArray = [...properDivisors].sort((a, b) => a - b);

	cache.set(n, divisorArray);

	return divisorArray;
}
export function amicableChainMinValue(limit: number): number {
	const chains: Set<number>[] = [];
	const seen: Set<number> = new Set();

	for (let n = 2; n < limit; n++) {
		if (isPrime(n) || seen.has(n)) continue;

		const chain: Set<number> = new Set([n]);
		let current = n;

		while (true) {
			const divisors = getDivisors(current);
			const nSum = getSum(divisors);

			if (nSum === n) {
				for (let value of chain) {
					seen.add(value);
				}

				if (chain.size > 2) {
					chains.push(chain);
				}

				break;
			} else if (isPrime(nSum) || nSum > 1_000_000 || chain.has(nSum)) {
				break;
			} else {
				chain.add(nSum);
				current = nSum;
			}
		}
	}

	const longestChain = [...chains].sort((a, b) => b.size - a.size)[0];
	return Math.min(...[...longestChain]);
}
