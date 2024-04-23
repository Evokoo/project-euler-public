// Totient Maximum - Problem 069
// https://projecteuler.net/problem=69

/*
    See link for description
*/

import totientOfN from "../000/totientOfN";

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
