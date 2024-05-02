// Maximum Path Sum I - Problem 018
// https://projecteuler.net/problem=18

/*
	By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

		   3
		  7 4
		 2 4 6
		8 5 9 3

	That is, 3 + 7 + 4 + 9 = 23.

	Find the maximum total from top to bottom of the input triangle
*/

import IO from "../000/IO";

function getTriangle(): number[][] {
	const rows: string[] = IO.readFile("input").split("\n");
	const triangle: number[][] = rows.map((row) => row.split(" ").map(Number));

	return triangle;
}
function maxPathSum(): number {
	const triangle: number[][] = getTriangle();

	let sum: number[] = triangle.pop()!;

	while (triangle.length) {
		const current = triangle.pop()!.map((value, index) => {
			return Math.max(...[value + sum[index], value + sum[index + 1]]);
		});

		sum = current;
	}

	return sum[0];
}

console.log(maxPathSum());
