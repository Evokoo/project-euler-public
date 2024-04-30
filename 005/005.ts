// Smallest Multiple- Problem 005
// https://projecteuler.net/problem=5

/*
	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple(maxDivisor: number): number {
	count: for (
		let n = maxDivisor;
		n < Number.MAX_SAFE_INTEGER;
		n += maxDivisor
	) {
		for (let i = maxDivisor - 1; i > 1; i--) {
			if (n % i !== 0) continue count;
		}

		return n;
	}

	throw Error("Result not found");
}

console.log(smallestMultiple(20));
