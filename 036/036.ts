// Double-base palindromes - Problem 036
// https://projecteuler.net/problem=36

/*
	The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

	Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

	(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

import Misc from "../000/Misc";

function palindromeSum(limit: number): number {
	let sum: number = 0;

	for (let n = 1; n < limit; n++) {
		if (Misc.isPalindrome(n) && Misc.isPalindrome(n.toString(2))) {
			sum += n;
		}
	}

	return sum;
}

console.log(palindromeSum(1_000_000));
