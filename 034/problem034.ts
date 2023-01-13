// Digit Factorials - Problem 34
// https://projecteuler.net/problem=34

/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.
*/

const factorials: Map<number, number> = new Map();
let sum: number = 0;

export function getFactorial(n: number, output: number = 1): number {
	if (n === 0) {
		return 1;
	} else {
		output *= n;
	}

	return n === 1 ? output : getFactorial(n - 1, output);
}

export function factorialSum(n: number): number {
	let digits: number[] = [...String(n)].map(Number),
		sum: number = digits.reduce((acc, cur) => acc + factorials.get(cur), 0);

	return sum;
}

for (let i = 0; i < 10; i++) {
	let factorial = getFactorial(i);
	factorials.set(i, factorial);
}

for (let i = 3; i < 5_000_000; i++) {
	if (factorialSum(i) === i) {
		sum += i;
	}
}

console.log(sum);
