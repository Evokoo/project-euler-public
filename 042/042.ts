// Coded triangle numbers - Problem 042
// https://projecteuler.net/problem=42

/*
	The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

	1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

	By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.
*/

import IO from "../000/IO";
import Misc from "../000/Misc";
import PolygonalNumber from "../000/PolygonalNumber";

function scoreWord(word: string): number {
	return [...word].reduce((sum, char) => sum + Misc.alphabetScore(char), 0);
}

function countTriangleWords(filename: string) {
	const words: string[] = IO.readFile(filename).match(/\w+/g) || [];
	const triangleNumbers: Set<number> = new Set(
		PolygonalNumber.generateRange(1, 100, 3)
	);

	let count: number = 0;

	for (let word of words) {
		const score: number = scoreWord(word);

		if (triangleNumbers.has(score)) {
			count++;
		}
	}

	return count;
}

console.log(countTriangleWords("words"));
