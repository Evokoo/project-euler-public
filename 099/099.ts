// Largest exponential - Problem 099
// https://projecteuler.net/problem=99

/*
Comparing two numbers written in index form like 2^11 and 3^7 is not difficult, as any calculator would confirm that 2^11 = 2048 < 3^7 = 2187.
However, confirming that 632382^518061 > 5194325^25806 would be much more difficult, as both numbers contain over three million digits.
Using base_exp.txt which contains one thousand lines with a base/exponent pair on each line, determine which line number has the greatest numerical value.
*/

import IO from "../000/IO";

type Row = {index: number, base:number, expo: number};

function largetEponential(filename: string): number{
	const rows: Row[] = IO.readFile(filename).split("\n").map((row,i) =>{
		const [base, expo]: number[] = row.split(",").map(Number);
		return {index: i + 1, base, expo}
	})

	let largest: Row = rows.shift()!;

	while (rows.length) {
		const next: Row = rows.shift()!
		const smallExp: number = Math.min(next.expo, largest.expo);
		const a: number = largest.base ** (largest.expo / smallExp);
		const b: number = next.base ** (next.expo / smallExp);

		largest = a > b ? largest : next;
	}

	return largest.index;
}

largetEponential("base_exp");
