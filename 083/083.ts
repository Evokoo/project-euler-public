// Path Sum: Three Ways - Problem 083
// https://projecteuler.net/problem=83

/*
The minimal path sum in the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by moving left, right, up, and down, is indicated in bold red and is equal to 2297.

131 673 234 103  18
201  96 342 965 150
630 803 746 422 111
537 699 497 121 956
805 732 524  37 331

Find the minimal path sum from the top left to the bottom right by moving left, right, up, and down in matrix.txt, a 31K text file containing an 80 by 80 matrix.
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
		[-1, 0],
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
