// Number Spiral Diagonals - Problem 028
// https://projecteuler.net/problem=28

/*
	Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

	21 22 23 24 25
	20  7  8  9 10
	19  6  1  2 11
	18  5  4  3 12
	17 16 15 14 13

	It can be verified that the sum of the numbers on the diagonals is 101.

	What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

function spiralSum(size: number): number {
	let n: number = 1;
	let distance: number = 2;
	let total: number = n;

	while (n < size ** 2) {
		for (let i = 0; i < 4; i++) {
			n += distance;
			total += n;
		}

		distance += 2;
	}

	return total;
}

console.log(spiralSum(1001));
