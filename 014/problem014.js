//Problem 014
// https://projecteuler.net/problem=14

const odd = (n) => 3 * n + 1;
const even = (n) => n / 2;

let num = 0,
	maxLength = -Infinity;

for (let i = 1000000; i > 0; i--) {
	let n = i,
		chain = 0;

	while (n !== 1) {
		n = n % 2 === 0 ? even(n) : odd(n);
		chain++;
	}

	if (chain > maxLength) {
		num = i;
		maxLength = chain;
	}
}

console.log({ num, maxLength });
