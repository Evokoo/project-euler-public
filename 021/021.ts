// Amicable Numbers - Problem 021
// https://projecteuler.net/problem=21

/*
	Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
	If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

	For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

	Evaluate the sum of all the amicable numbers under 10000.
*/

import Arithmetic from "../000/Arithmetic";
import Divisors from "../000/Divisors";

function divisorSum(n: number): number {
	const divisors: number[] = Divisors.proper(n);
	const sum: number = Arithmetic.sum(divisors);

	return sum;
}

function amicableNumberSum(limit: number) {
	const amicableNumbers: Set<number> = new Set();

	let totalSum: number = 0;

	for (let a = 1; a <= limit; a++) {
		if (amicableNumbers.has(a)) {
			continue;
		} else {
			const b = divisorSum(a);

			if (divisorSum(b) === a && a !== b) {
				totalSum += b + a;
				amicableNumbers.add(a);
				amicableNumbers.add(b);
			}
		}
	}

	return totalSum;
}

amicableNumberSum(10000);
