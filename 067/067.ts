// Maximum Path Sum II - Problem 067
// https://projecteuler.net/problem=67

/*
By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3
  7 4
 2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.
*/

import readTextFile from "../000/readTextFile";

function getTriangle() {
	const rows: string[] = readTextFile("triangle").split("\n");
	const triangle: number[][] = rows.map((row) => row.split(" ").map(Number));

	return triangle;
}
function maxPathSum() {
	const traingle = getTriangle();
	let sums = traingle.pop()!;

	while (traingle.length) {
		const current = traingle.pop()!.map((n, i) => {
			return Math.max(...[n + sums[i], n + sums[i + 1]]);
		});

		sums = current;
	}

	return sums[0];
}

console.log(maxPathSum());
