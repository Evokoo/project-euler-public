// Spiral Primes - Problem 058
// https://projecteuler.net/problem=58

/*
Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

    37 36 35 34 33 32 31
    38 17 16 15 14 13 30
    39 18  5  4  3 12 29
    40 19  6  1  2 11 28
    41 20  7  8  9 10 27
    42 21 22 23 24 25 26
    43 44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 
8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ~= 62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. 
If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10% ?
*/

import isPrime from "../000/isPrime";

function spiralLengthByRatio(target: number) {
	const values = { totalCount: 1, primeCount: 0, sideLength: 1 };

	for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
		const br = (2 * i + 1) ** 2;
		const bl = (2 * i + 1) ** 2 - 2 * i;
		const tl = (2 * i + 1) ** 2 - 4 * i;
		const tr = (2 * i + 1) ** 2 - 6 * i;

		for (let n of [br, bl, tl, tr]) {
			if (isPrime(n)) {
				values.primeCount++;
			}

			values.totalCount++;
		}

		if ((values.primeCount * 100) / values.totalCount < target) {
			return values.sideLength + 2;
		}

		values.sideLength += 2;
	}

	throw Error("Something went wrong?");
}

console.log(spiralLengthByRatio(10));
