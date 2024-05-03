// Names Scores - Problem 022
// https://projecteuler.net/problem=22

/*
    Using names.txt begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

    For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

    What is the total of all the name scores in the file?
*/

import IO from "../000/IO";

function getNames(filename: string): string[] {
	const names = IO.readFile(filename).match(/\w+/g) || [];
	return names.sort((a, b) => a.localeCompare(b));
}
function scoreName(name: string, index: number): number {
	const alphabet: string = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const score: number = [...name].reduce((a, b) => a + alphabet.indexOf(b), 0);
	return score * (index + 1);
}
function totalNameScore(filename: string) {
	return getNames(filename).reduce((sum, n, i) => sum + scoreName(n, i), 0);
}

console.log(totalNameScore("names"));
