// Totient Permutation - Problem 070
// https://projecteuler.net/problem=70

/*
Euler's Totient function, φ(n) [sometimes called the phi function], is used to
determine the number of positive numbers less than or equal to n which are relatively
prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and
relatively prime to nine, φ(9)=6. 

The number 1 is considered to be relatively prime to every positive number, so φ(1)=1.

Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.

Find the value of n, 1 < n < 10^7, for which φ(n) is a permutation of n and the ratio
n/φ(n) produces a minimum.
*/

import isPrime from "../000/isPrime";
import totientOfN from "../000/totientOfN";

function isPermutation(n1: number, n2: number): boolean {
	const s1 = [...String(n1)].sort((a, b) => a.localeCompare(b));
	const s2 = [...String(n2)].sort((a, b) => a.localeCompare(b));

	if (s1.length !== s2.length) {
		return false;
	} else {
		for (let i = 0; i < s1.length; i++) {
			if (s1[i] !== s2[i]) return false;
		}

		return true;
	}
}

export default function smallestTotientPermutation(limit: number): number {
	let nValue = 0;
	let minRatio = Infinity;

	for (let n = 2; n < limit; n++) {
		if (n % 2 === 0 || isPrime(n)) continue;

		const totient = totientOfN(n);
		const ratio = n / totient;

		if (ratio < minRatio && isPermutation(n, totient)) {
			nValue = n;
			minRatio = ratio;
		}
	}

	return nValue;
}
