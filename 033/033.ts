// Digit cancelling fractions - problem 033
// https://projecteuler.net/problem=33

/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

import gcd from "../000/gcd";

function getDigits(n: number): number[] {
	return [...String(n)].map(Number);
}
function getProduct(arr: number[]): number {
	return arr.reduce((acc, cur) => acc * cur, 1);
}
function findLowestDenominator(): number {
	const numerators = [];
	const denominators = [];

	for (let a = 10; a < 100; a++) {
		for (let b = 10; b < 100; b++) {
			const aDigits = getDigits(a);
			const bDigits = getDigits(b);

			let rawDecimal = a / b;
			let simplifedDecimal = 0;

			if (rawDecimal >= 1 || (a % 10 === 0 && b % 10 === 0)) {
				continue;
			} else if (aDigits[0] === bDigits[1]) {
				simplifedDecimal = aDigits[1] / bDigits[0];
			} else if (aDigits[1] === bDigits[0]) {
				simplifedDecimal = aDigits[0] / bDigits[1];
			}

			if (rawDecimal === simplifedDecimal) {
				numerators.push(a);
				denominators.push(b);
			}
		}
	}

	const numeratorProduct = getProduct(numerators);
	const denominatorProduct = getProduct(denominators);

	return denominatorProduct / gcd(numeratorProduct, denominatorProduct);
}

console.log(findLowestDenominator());
