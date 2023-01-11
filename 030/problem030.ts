// Problem 030 - Digit fifth powers
// https://projecteuler.net/problem=30

/*
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/

const fifthPowers: Set<number> = new Set();

export function isPowerSum(n: number, power: number): boolean {
	let digits: string[] = [...String(n)];
	return digits.reduce((acc, cur) => acc + (+cur) ** power, 0) === n;
}

for (let i = 10; i < 200_000; i++) {
	if (isPowerSum(i, 5)) {
		fifthPowers.add(i);
	}
}

let sum: number = 0;

fifthPowers.forEach((n: number) => (sum += n));
console.log(sum);
