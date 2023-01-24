// Largest exponential
// Problem 99

/*
Comparing two numbers written in index form like 211 and 37 is not difficult, as any calculator would confirm that 211 = 2048 < 37 = 2187.
However, confirming that 632382518061 > 519432525806 would be much more difficult, as both numbers contain over three million digits.
Using base_exp.txt which contains one thousand lines with a base/exponent pair on each line, determine which line number has the greatest numerical value.
*/

import readTextFile from "../000/readTextFile.js";

interface dataEntry {
	index: number;
	base: number;
	exponent: number;
}

function parseData(file: string): dataEntry[] {
	let lines: string[] = readTextFile(file).split("\n"),
		data: dataEntry[] = lines.map((line, index) => {
			let [base, exponent] = line.split(",").map(Number);
			return { index, base, exponent };
		});

	return data;
}

function getValue(base: number, exponent: number): number {
	return base ** exponent;
}

let lines: dataEntry[] = parseData("base_exp"),
	current: dataEntry = lines.shift();

while (lines.length) {
	let next: dataEntry = lines.shift(),
		smallExp: number = Math.min(next.exponent, current.exponent),
		a: number = getValue(current.base, current.exponent / smallExp),
		b: number = getValue(next.base, next.exponent / smallExp);

	current = a > b ? current : next;
}

console.log(current);
