// Large Sum - Problem 013
// https://projecteuler.net/problem=13

/*
	Work out the first ten digits of the sum of the following one-hundred 50-digit numbers. (see input.txt)
*/

import Arithmetic from "../000/Arithmetic";
import IO from "../000/IO";

export function nDigitOfLargeSum(
	numbers: string[],
	n: number,
	solution: number
) {
	switch (solution) {
		case 1:
			// Solution 1 - String Addition
			return Arithmetic.stringAddition(numbers).slice(0, n);
		case 2:
			// Solution 2 - BigInt
			const sum: bigint = numbers.reduce((acc, cur) => acc + BigInt(cur), 0n);
			return String(sum).slice(0, n);
	}
}

const numbers: string[] = IO.readFile("input").split("\r\n");
console.log(nDigitOfLargeSum(numbers, 10, 1));
