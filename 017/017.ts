// Number Letter Counts - Problem 017
// https://projecteuler.net/problem=17

/*
	If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
    If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
*/

const lookup: Record<number, string> = {
	0: "",
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
};

export function letterCount(limit: number) {
	let count: number = 0;

	for (let i = 1; i <= limit; i++) {
		const thousands: number = ~~(i / 1000);
		const hundreds: number = ~~(i / 100) % 10;
		const tens: number = ~~((i % 100) / 10) * 10;
		const ones: number = i % 10;

		if (thousands === 1) {
			count += lookup[thousands].length + 8;
		}
		if (hundreds >= 1) {
			count += lookup[hundreds].length + (i % 100 === 0 ? 7 : 10);
		}
		if (tens >= 20) {
			count += lookup[tens].length;
			count += lookup[ones].length;
		} else {
			count += lookup[tens + ones].length;
		}
	}

	return count;
}

console.log(letterCount(1000));
