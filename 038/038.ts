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

function isPandigital(n: number | string): boolean {
	const digits: Set<string> = new Set([...String(n)]);
	return digits.size === 9 && !digits.has("0");
}

function largestPandigitalMultiple() {
	let largest: number = 0;

	for (let i = 1; i < 10_000; i++) {
		let digits: string = "";

		for (let j = 1; true; j++) {
			digits += String(i * j);

			if (digits.length === 9 && isPandigital(digits)) {
				largest = Math.max(largest, Number(digits));
				break;
			} else if (digits.length > 9) {
				break;
			}
		}
	}

	return largest;
}

console.log(largestPandigitalMultiple());
