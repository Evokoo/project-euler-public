// Permuted multiples - Problem 52
// https://projecteuler.net/problem=52

/*
It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
*/

function getDigits(n: number): string {
	let digits: string = [...String(n)].sort().join("");
	return digits;
}

function checkStrings(strings: string[]): boolean {
	let referenceStr: string = strings[0];
	return strings.every((str) => str === referenceStr);
}

for (let i = 1; true; i++) {
	let strings: string[] = [2, 3, 4, 5, 6].map((n) => getDigits(n * i));

	if (checkStrings(strings)) {
		console.log(i);
		break;
	}
}
