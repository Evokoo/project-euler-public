// Multiples of 3 or 5 - Problem 001
// https://projecteuler.net/problem=1

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function fizzBuzzSum(limit: number): number {
	let sum: number = 0;

	for (let i = 0; i < 1000; i++) {
		if (i % 15 === 0 || i % 5 === 0 || i % 3 === 0) {
			sum += i;
		}
	}

	return sum;
}

console.log(fizzBuzzSum(1000));
