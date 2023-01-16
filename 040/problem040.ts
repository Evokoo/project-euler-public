//Champernowne's constant - Problem 040
// https://projecteuler.net/problem=40

/*
An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

let product: number = 1,
	index: number = 1,
	targetIndex: number = 10;

for (let i = 1; true; i++) {
	let digits: string[] = [...String(i)];

	for (let digit of digits) {
		if (index === targetIndex) {
			product *= Number(digit);
			targetIndex *= 10;
		}
		index++;
	}

	if (targetIndex > 100_000) break;
}

console.log(product);
