// Powerful digit counts - Problem 063
// https://projecteuler.net/problem=63

/*
    The 5-digit number, 16807=7^5, is also a fifth power. Similarly, the 9-digit number, 134217728=8^9, is a ninth power.
    How many n-digit positive integers exist which are also an nth power?
*/

function powerfulDigitCount() {
	let count = 0;

	for (let a = 1; a < 10; a++) {
		let exponent = 1;
		let power = a ** exponent;

		while (String(power).length === exponent) {
			count++;
			exponent++;
			power = a ** exponent;
		}
	}

	return count;
}

console.log(powerfulDigitCount());
