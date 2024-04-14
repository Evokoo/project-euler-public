// Path Sum: Two Ways - Problem 081
// https://projecteuler.net/problem=81

/*
In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.

131 673 234 103  18
201  96 342 965 150
630 803 746 422 111
537 699 497 121 956
805 732 524  37 331

Find the minimal path sum from the top left to the bottom right by only moving right and down in matrix.txt, a 31K text file containing an 80 by 80 matrix.
 */

//Imports
import readTextFile from "../000/readTextFile";

//Types
type Path = { x: number; y: number; total: number };

function getMatrix(filename: string): number[][] {
	const input = readTextFile(filename);
	return input.split("\n").map((row) => row.split(",").map(Number));
}
function minimalSumPath(filename: string) {
	const matrix: number[][] = getMatrix(filename);
	const size: number = matrix.length - 1;
	const queue: Path[] = [{ x: 0, y: 0, total: matrix[0][0] }];
	const seen: Set<string> = new Set();

	while (queue.length) {
		const current: Path = queue.shift()!;
		const coord: string = `${current.x},${current.y}`;

		if (seen.has(coord)) {
			continue;
		} else {
			seen.add(coord);
		}

		if (current.x === size && current.y === size) {
			return current.total;
		} else {
			if (current.y + 1 <= size) {
				const value = matrix[current.y + 1][current.x];
				queue.push({
					x: current.x,
					y: current.y + 1,
					total: current.total + value,
				});
			}

			if (current.x + 1 <= size) {
				const value = matrix[current.y][current.x + 1];
				queue.push({
					x: current.x + 1,
					y: current.y,
					total: current.total + value,
				});
			}
		}

		queue.sort((a, b) => a.total - b.total);
	}

	throw Error("Something went wrong");
}

console.log(minimalSumPath("matrix"));
