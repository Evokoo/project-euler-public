// Largest Palindrome Product - Problem 004
// https://projecteuler.net/problem=4

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

import Misc from "../000/Misc";

function largestPalindromicNumber(min: number, max: number): number {
	let largest = 0;

	for (let i = min; i < max; i++) {
		for (let j = i + 1; j < max; j++) {
			const product = i * j;

			if (Misc.isPalindrome(product) && product > largest) {
				largest = product;
			}
		}
	}

	return largest;
}

console.log(largestPalindromicNumber(100, 1000));
