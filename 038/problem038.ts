// Pandigital multiples - Problem 038
// https://projecteuler.net/problem=38

/*
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

export function isPandigital(digits: Set<number>): boolean {
	let number = Array.from(digits)
		.sort((a, b) => a - b)
		.join("");

	return number === "123456789";
}

export function concatNumber(digits: Set<number>): number {
	let number = "";
	digits.forEach((digit) => (number += digit));
	return Number(number);
}

let maxNumber = 0;

for (let i = 2; i < 10_000; i++) {
	const uniqueNumbers: Set<number> = new Set();

	for (let j = 1; j <= 10; j++) {
		let product: number = j * i,
			digits: number[] = [...String(product)].map(Number),
			pandigital = true;

		for (let digit of digits) {
			if (uniqueNumbers.has(digit) || digit === 0) {
				pandigital = false;
				break;
			} else {
				uniqueNumbers.add(digit);
			}
		}
		if (!pandigital) break;
	}

	if (isPandigital(uniqueNumbers)) {
		maxNumber = Math.max(concatNumber(uniqueNumbers), maxNumber);
	}
}

console.log(maxNumber);
