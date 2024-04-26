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
type Path = { pos: Point; total: number; path: string[] };
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
function findPath(filename: string = "example") {
	const matrix: Matrix = getMatrix(filename);
	const size: number = matrix.length - 1;
	const start: Point = { x: 0, y: 0 };
	const end: Point = { x: size, y: size };

	return DFS(start, end, matrix, size);
}
function DFS(start: Point, end: Point, matrix: Matrix, size: number) {
	const queue: Path[] = [
		{
			pos: start,
			total: matrix[start.y][start.y],
			path: [`${start.x},${start.y}`],
		},
	];
	const seen: Set<string> = new Set();

	while (queue.length) {
		const current = queue.shift()!;
		const coord = `${current.pos.x},${current.pos.y}`;

		if (current.pos.x === end.x && current.pos.y === end.y) {
			return current.total;
		}

		if (seen.has(coord)) {
			continue;
		} else {
			seen.add(coord);
		}

		for (let neighbour of getNeighbours(current.pos, size)) {
			queue.push({
				pos: { x: neighbour.x, y: neighbour.y },
				total: current.total + matrix[neighbour.y][neighbour.x],
				path: [...current.path, `${neighbour.x},${neighbour.y}`],
			});
		}

		queue.sort((a, b) => a.total - b.total);
	}
}

findPath("matrix");
