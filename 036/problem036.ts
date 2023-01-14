// Double-base palindromes - Problem 036
// https://projecteuler.net/problem=36

/*
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

export function stripLeadZero(bin: string): string {
	return bin.replace(/^0+/, "");
}

export function isPalindrome(n: number): boolean {
	let digits: string[] = [...String(n)];
	let bin: string[] = [...stripLeadZero(n.toString(2))];

	for (let i = 0, j = digits.length - 1; i < j; i++, j--) {
		if (digits[i] !== digits[j]) return false;
	}

	for (let i = 0, j = bin.length - 1; i < j; i++, j--) {
		if (bin[i] !== bin[j]) return false;
	}

	return true;
}

let sum: number = 0;

for (let i = 0; i < 1_000_000; i++) {
	if (isPalindrome(i)) sum += i;
}

console.log(sum);
