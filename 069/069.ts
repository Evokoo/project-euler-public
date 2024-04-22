// Totient Maximum - Problem 069
// https://projecteuler.net/problem=69

/*
    See link for description
*/

import factorsOfN from "../000/factorsOfN";
import isPrime from "../000/isPrime";

function totientOfN(n: number) {
	if (isPrime(n)) {
		return n - 1;
	} else {
		const factors: number[] = factorsOfN(n);
		const primeFactors: number[] = factors.filter((factor) => isPrime(factor));

		let product = n;

		for (let i = 0; i < primeFactors.length; i++) {
			const p = primeFactors[i];
			product *= 1 - 1 / p;
		}

		return Math.floor(product);
	}
}
export default function maximumTotient(limit: number): {
	n: number;
	ratio: number;
} {
	let maxN = 0;
	let maxRatio = 0;

	for (let n = 2; n <= limit; n++) {
		const totient = totientOfN(n);
		const ratio = n / totient;

		if (ratio > maxRatio) {
			maxN = n;
			maxRatio = ratio;
		}
	}

	return { n: maxN, ratio: maxRatio };
}
