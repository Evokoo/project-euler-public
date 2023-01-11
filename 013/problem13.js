// Problem 13
// https://projecteuler.net/problem=13

// Work out the first ten digits of the sum of the following one-hundred 50-digit numbers. (see input.txt)

import fs from "fs";

const getData = (file) => {
	const data = fs.readFileSync(file + ".txt", "utf-8");
	return data.split("\n").map((num) => [...num.trim()].map(Number));
};

let numbers = getData("input"),
	sum = [],
	carry = 0;

for (let i = 49; i > -1; i--) {
	let colSum = carry;

	for (let j = 0; j < 100; j++) {
		colSum += numbers[j][i];
	}

	if (i > 0) {
		let ones = colSum % 10;
		carry = +String(colSum).slice(0, -1);
		sum.unshift(ones);
	} else {
		sum.unshift(colSum);
	}
}

let result = sum.join("").slice(0, 10);
console.log(result);
