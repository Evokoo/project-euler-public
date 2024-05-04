// Lexicographic Permutations - Problem 24
// https://projecteuler.net/problem=24

/*
    A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

    012   021   102   120   201   210

    What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

import Misc from "../000/Misc";

function nthPermutation(input: number, n: number) {
	const permuations = Misc.getPermutations(input);
	const sortedPermutations = permuations.sort((a, b) => Number(a) - Number(b));
	return sortedPermutations[n - 1];
}

console.log(nthPermutation(1234567890, 1_000_000));
