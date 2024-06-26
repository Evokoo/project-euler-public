// Pentagon numbers - Problem 044
// https://projecteuler.net/problem=44

/*
	Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:

	1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

	It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.

	Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?
*/

import PolygonalNumber from "../000/PolygonalNumber";

function pentagonalPair() {
	for (let i = 1; true; i++) {
		const a: number = PolygonalNumber.pentagonal(i);
		for (let j = 1; j < i; j++) {
			const b: number = PolygonalNumber.pentagonal(j);
			const sum: number = a + b;
			const diff: number = Math.abs(a - b);

			if (
				PolygonalNumber.isPentagonal(sum) &&
				PolygonalNumber.isPentagonal(diff)
			) {
				return diff;
			}
		}
	}
}

console.log(pentagonalPair());
