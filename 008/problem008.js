//Problem 008
// https://projecteuler.net/problem=8

//The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
//Find the thirteen adjacent digits in the 1000-digit number (see input) that have the greatest product. What is the value of this product?

import fs from "fs";

const getData = (file) => {
	const data = fs.readFileSync(file + ".txt", "utf-8");
	return data.match(/\d/g).map(Number);
};

const getProduct = (num) => {
	return num.reduce((acc, cur) => acc * cur, 1);
};

let numbers = getData("input"),
	max = 0;

for (let i = 0; i < 1000 - 13; i++) {
	let sequence = numbers.slice(i, i + 13),
		product = getProduct(sequence);

	max = Math.max(product, max);
}

console.log(max);
