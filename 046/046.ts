// Goldbach's other conjecture - Problem 046
// https://projecteuler.net/problem=46

/*
	It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

	9 = 7 + 2×12
	15 = 7 + 2×22
	21 = 3 + 2×32
	25 = 7 + 2×32
	27 = 19 + 2×22
	33 = 31 + 2×12

	It turns out that the conjecture was false.

	What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

import Arithmetic from "../000/Arithmetic";
import Prime from "../000/Prime";

function findMinimalGoldbachViolation(limit: number) {
	const primeNumbers: Set<number> = new Set(Prime.generatePrimes(2, limit));
	const compositeNumbers: Set<number> = new Set();
	const squareNumbers: Set<number> = new Set();

	for (let i = 1; i < limit; i++) {
		if (Arithmetic.isOdd(i) && Arithmetic.isComposite(i)) {
			compositeNumbers.add(i);
		}
		if (i * i <= limit) {
			squareNumbers.add(i * i);
		}
	}

	for (let prime of primeNumbers) {
		for (let square of squareNumbers) {
			let sum = prime + 2 * square;

			if (sum > limit) {
				break;
			} else {
				compositeNumbers.delete(sum);
			}
		}
	}

	if (compositeNumbers.size === 0) {
		throw Error("Number not found, trying increasing limit");
	}

	return [...compositeNumbers][0];
}

console.log(findMinimalGoldbachViolation(10_000));
