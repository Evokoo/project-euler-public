//Problem 004
//https://projecteuler.net/problem=4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (n) => {
	let str = String(n);

	for (let i = 0, j = str.length - 1; i < j; i++, j--) {
		if (str[i] !== str[j]) return false;
	}
	return true;
};

let palindrome = 0;

for (let i = 100; i <= 999; i++) {
	for (let j = 100; j <= 999; j++) {
		let product = i * j;

		if (isPalindrome(product)) {
			palindrome = Math.max(palindrome, product);
		}
	}
}

console.log(palindrome);
