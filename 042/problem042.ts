// Coded triangle numbers - Problem 042
// https://projecteuler.net/problem=42

/*
The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.
*/

import readTextFile from "../000/readTextFile.js";

export function getTriangleNumbers(longestWord: number = 1): Set<number> {
	const triangleNumbers: Set<number> = new Set();
	let maxValue: number = longestWord * 26;

	//Max word value is 364 (26 * 14)
	for (let i = 1; true; i++) {
		let triangleNum: number = 0.5 * i * (i + 1);

		if (triangleNum > maxValue) {
			break;
		} else {
			triangleNumbers.add(triangleNum);
		}
	}

	return triangleNumbers;
}
export function getASCIIValue(letter: string): number {
	return "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter);
}
export function getWordValue(word: string): number {
	return [...word].reduce((acc, cur) => acc + getASCIIValue(cur), 0);
}

const data: string = readTextFile("words");
const words: string[] = data.match(/[A-Z]+/g);
const triangleNumbers: Set<number> = getTriangleNumbers(14);

let triangleWords = words.filter((word) => {
	let wordValue: number = getWordValue(word);
	return triangleNumbers.has(wordValue);
});

console.log(triangleWords.length);
