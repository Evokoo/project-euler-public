// Digit fifth powers - Problem 030
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

function powerSum(n: number, power: number): number {
	const digits: string[] = [...String(n)];
	const sum: number = digits.reduce((acc, cur) => acc + (+cur) ** power, 0);
	return sum;
}

function nthPowerSum(power: number): number {
	let fifthSum: number = 0;

	for (let i = 2; i < 1_000_000; i++) {
		if (powerSum(i, power) === i) {
			fifthSum += i;
		}
	}

	return fifthSum;
}

nthPowerSum(5);
