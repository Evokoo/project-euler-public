// Path Sum: Three Ways - Problem 082
// https://projecteuler.net/problem=82

/*
The minimal path sum in the 5 by 5 matrix below, by starting in any cell in the left column and finishing in any cell in the right column, and only moving up, down, and right, is indicated in red and bold; the sum is equal to 994.

131 673 234 103  18
201  96 342 965 150
630 803 746 422 111
537 699 497 121 956
805 732 524  37 331

Find the minimal path sum from the left column to the right column in matrix.txt, a 31K text file containing an 80 by 80 matrix.
 */

//Imports
import readTextFile from "../000/readTextFile";

//Types
type Point = { x: number; y: number };
type Path = Point & { total: number };
type Matrix = number[][];

function getMatrix(filename: string): number[][] {
	const input = readTextFile(filename);
	return input.split("\n").map((row) => row.split(",").map(Number));
}
function getNeighbours(point: Point, size: number) {
	const neighbours: Point[] = [];

	for (let [nx, ny] of [
		[0, -1],
		[0, 1],
		[1, 0],
	]) {
		const [x, y] = [point.x + nx, point.y + ny];

		if (x < 0 || x > size || y < 0 || y > size) {
			continue;
		} else {
			neighbours.push({ x, y });
		}
	}

	return neighbours;
}
function getPathSum(start: Point, minSum: number, matrix: Matrix) {
	const size: number = matrix.length - 1;
	const queue: Path[] = [
		{
			x: start.x,
			y: start.y,
			total: matrix[start.y][start.x],
		},
	];
	const seen: Set<string> = new Set();

	while (queue.length) {
		const current: Path = queue.shift()!;
		const coord: string = `${current.x},${current.y}`;

		if (seen.has(coord)) {
			continue;
		} else {
			seen.add(coord);
		}

		if (current.total > minSum) {
			return Infinity;
		}

		if (current.x === size) {
			return current.total;
		} else {
			for (let { x, y } of getNeighbours(
				{ x: current.x, y: current.y },
				size
			)) {
				queue.push({
					x,
					y,
					total: current.total + matrix[y][x],
				});
			}
		}

		queue.sort((a, b) => a.total - b.total);
	}

	throw Error("Something went wrong");
}
function findMinimalSumPath(filename: string) {
	const matrix: number[][] = getMatrix(filename);

	let minTotal: number = Infinity;

	for (let y = 0; y < matrix.length; y++) {
		const pathSum = getPathSum({ x: 0, y }, minTotal, matrix);
		minTotal = Math.min(pathSum, minTotal);
	}

	return minTotal;
}

console.log(findMinimalSumPath("matrix"));
