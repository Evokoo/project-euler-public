// Sub-string divisibility - Problem 043
// https://projecteuler.net/problem=43

/*
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17

Find the sum of all 0 to 9 pandigital numbers with this property.
*/

import getPermutations from "../000/getPermutations";

function isSubStringDivisible(number: number | string) {
	const divisors = [2, 3, 5, 7, 11, 13, 17];
	const n = String(number);

	for (let i = 1; i < n.length - 2; i++) {
		const num = Number(n.slice(i, i + 3));
		const divisor = divisors.shift()!;

		if (num % divisor !== 0) return false;
	}

	return true;
}
function pandigitalSum() {
	const numbers: Set<string> = new Set(
		getPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
	);

	let sum = 0;

	for (let number of numbers) {
		if (number[0] === "0") continue;
		if (isSubStringDivisible(number)) {
			sum += +number;
		}
	}

	return sum;
}

console.log(pandigitalSum());
