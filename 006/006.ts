// Sum Square Difference - Problem 006
// https://projecteuler.net/problem=6

/*
	The sum of the squares of the first ten natural numbers is 385
	The square of the sum of the first ten natural numbers is 3025
	Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640
	Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

import Arithmetic from "../000/Arithmetic";

function sequentialSquareSum(len: number) {
	return (len * (len + 1) * (2 * len + 1)) / 6;
}
function squareDifference(start: number, end: number) {
	return Math.abs(
		Arithmetic.sequentialSum(start, end) ** 2 - sequentialSquareSum(end)
	);
}

console.log(squareDifference(1, 100));
