// Roman Numerals - Problem 089
// https://projecteuler.net/problem=89

/*
For a number written in Roman numerals to be considered valid there are basic rules which must be followed. Even though the rules allow some numbers to be expressed in more than one way there is always a "best" way of writing a particular number.

For example, it would appear that there are at least six ways of writing the number sixteen:

IIIIIIIIIIIIIIII
VIIIIIIIIIII
VVIIIIII
XIIIIII
VVVI
XVI

However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, as it uses the least number of numerals.

roman.txt contains one thousand numbers written in valid, but not necessarily minimal, Roman numerals.
Find the number of characters saved by writing each of these in their minimal form.
*/

import IO from "../000/IO.js";

function simplifyNumeral(numeral: string): string {
	let output: string = numeral;

	// 9, 90, 900
	if (/VIIII/.test(output)) output = output.replace(/VIIII/, "IX");
	if (/LXXXX/.test(output)) output = output.replace(/LXXXX/, "XC");
	if (/DCCCC/.test(output)) output = output.replace(/DCCCC/, "CM");
	// 4, 40, 400
	if (/IIII/.test(output)) output = output.replace(/IIII/, "IV");
	if (/XXXX/.test(output)) output = output.replace(/XXXX/, "XL");
	if (/CCCC/.test(output)) output = output.replace(/CCCC/, "CD");
	// 10, 100, 1000
	if (/VV/.test(output)) output = output.replace(/VV/, "X");
	if (/LL/.test(output)) output = output.replace(/LL/, "C");
	if (/DD/.test(output)) output = output.replace(/DD/, "M");

	return numeral === output ? output : simplifyNumeral(output);
}

function savedCharacterCount(filename: string): number {
	const numerals = IO.readFile(filename).split("\r\n");
	const count = numerals.reduce((sum, numeral) => {
		return sum + (numeral.length - simplifyNumeral(numeral).length);
	}, 0);

	return count;
}

console.log(savedCharacterCount("roman"));
