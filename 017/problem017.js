// Problem 017
// https://projecteuler.net/problem=17

// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

const tens = {
	0: "",
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
	2: "twenty",
	3: "thirty",
	4: "forty",
	5: "fifty",
	6: "sixty",
	7: "seventy",
	8: "eighty",
	9: "ninety",
};

const ones = {
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
};

let sum = 0,
	limit = 1001;

for (let i = 0; i <= limit; i++) {
	let digits = [...String(i)],
		words = "";

	if (digits.length === 1) {
		words += ones[digits[0]];
	}

	if (digits.length === 2) {
		if (digits[0] === "1") {
			words += tens[digits.join("")];
		} else {
			words += tens[digits[0]] + ones[digits[1]];
		}
	}

	if (digits.length === 3) {
		words += ones[digits[0]] + "hundred";

		if (digits[1] !== "0" || digits[2] !== "0") {
			if (digits[1] === "1") {
				words += "and" + tens[digits.slice(1).join("")];
			} else {
				words += "and" + tens[digits[1]] + ones[digits[2]];
			}
		}
	}

	if (digits.length === 4) {
		words += ones[digits[0]] + "thousand";

		if (digits[1] !== "0" || digits[2] !== "0" || digits[3] !== "0") {
			if (digits[1] !== "0") {
				words += ones[digits[0]] + "hundred";
			}
			if (digits[2] === "1") {
				words += "and" + tens[digits.slice(2).join("")];
			} else {
				words += "and" + tens[digits[2]] + ones[digits[3]];
			}
		}
	}

	console.log(words);
	sum += words.length;
}

console.log(sum);
