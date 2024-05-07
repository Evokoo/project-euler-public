// Pandigital products - Problem 032
// https://projecteuler.net/problem=32

/*
	We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

	The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

	Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

	HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

function pandigitalSum() {
	const products: Map<number, string> = new Map();

	let sum: number = 0;

	for (let a = 1; a < 100; a++) {
		for (let b = 1; b < 2000; b++) {
			const c: number = a * b,
				digits: string = [...`${a}${b}${c}`].sort().join("");

			if (digits === "123456789" && !products.has(c)) {
				sum += c;
				products.set(c, `${a} x ${b} = ${c}`);
			}
		}
	}

	return sum;
}

console.log(pandigitalSum());
