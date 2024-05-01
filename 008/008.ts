// Largest Product in a Series - Problem 008
// https://projecteuler.net/problem=8

/*
	The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
	Find the thirteen adjacent digits in the 1000-digit number (see input) that have the greatest product. What is the value of this product?
*/

import Arithmetic from "../000/Arithmetic";
import IO from "../000/IO";

function parseInput(): number[] {
	const data = IO.readFile("input").split("\r\n").join("");
	const digits = [...data].map(Number);
	return digits;
}

function largestProduct(sequenceLen: number): number {
	const digits: number[] = parseInput();

	let largest: number = 0;

	for (let i = 0; i < digits.length - sequenceLen; i++) {
		const sequence = digits.slice(i, i + sequenceLen);
		const zeroIndex = sequence.lastIndexOf(0);

		if (zeroIndex !== -1) {
			i += zeroIndex + 1;
		} else {
			const product = Arithmetic.product(sequence);

			if (product > largest) {
				largest = product;
			}
		}
	}

	return largest;
}

console.log(largestProduct(20));
