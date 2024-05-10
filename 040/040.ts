// Champernowne's constant - Problem 040
// https://projecteuler.net/problem=40

/*
	An irrational decimal fraction is created by concatenating the positive integers:

	0.123456789101112131415161718192021...

	It can be seen that the 12th digit of the fractional part is 1.

	If dn represents the nth digit of the fractional part, find the value of the following expression.

	d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

function champernowneConstant() {
	let product = 1;
	let totalDigits = 0;
	let targetIndex = 1;

	for (let i = 0; totalDigits <= 1_000_000; i++) {
		const digits: number[] = [...String(i)].map(Number);

		for (let digit of digits) {
			if (totalDigits === targetIndex) {
				product *= digit;
				targetIndex *= 10;
			}

			totalDigits++;
		}
	}

	return product;
}

console.log(champernowneConstant());
