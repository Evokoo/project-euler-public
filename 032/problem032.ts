// Pandigital products - Problem 032
// https://projecteuler.net/problem=32

/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

const products: Map<number, string> = new Map();

for (let i = 1; i < 100; i++) {
	for (let j = 1; j < 2000; j++) {
		let multiplicand: number = i,
			multiplier: number = j,
			product: number = i * j,
			digits: string = [...`${multiplicand}${multiplier}${product}`]
				.sort()
				.join("");

		if (digits === "123456789") {
			products.set(product, `${multiplicand} x ${multiplier}`);
		}
	}
}

let sum: number = 0;

products.forEach((_, key: number) => (sum += key));

console.log(products, sum);
