// Largest Product in a Grid - Problem 011
// https://projecteuler.net/problem=11

/*
	What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid (input)?
*/

import IO from "../000/IO";
import Arithmetic from "../000/Arithmetic";

type Point = { x: number; y: number };

function parseInput(): number[][] {
	const data = IO.readFile("input").split("\r\n");
	const digits = data.map((row) => row.split(" ").map(Number));
	return digits;
}
function getMaxPointProduct(point: Point, grid: number[][]) {
	const products: number[] = [];

	// Down
	if (point.y <= 16) {
		const cells = [
			[0, 0],
			[0, 1],
			[0, 2],
			[0, 3],
		].map(([x, y]) => grid[y + point.y][x + point.x]);

		products.push(Arithmetic.product(cells));
	}

	//Right
	if (point.x <= 16) {
		const cells = [
			[0, 0],
			[1, 0],
			[2, 0],
			[3, 0],
		].map(([x, y]) => grid[y + point.y][x + point.x]);

		products.push(Arithmetic.product(cells));
	}

	// Diagonally Right
	if (point.y <= 16 && point.x <= 16) {
		const cells = [
			[0, 0],
			[1, 1],
			[2, 2],
			[3, 3],
		].map(([x, y]) => grid[y + point.y][x + point.x]);

		products.push(Arithmetic.product(cells));
	}

	// Diagonally Left
	if (point.y <= 16 && point.x >= 4) {
		const cells = [
			[-0, 0],
			[-1, 1],
			[-2, 2],
			[-3, 3],
		].map(([x, y]) => grid[y + point.y][x + point.x]);

		products.push(Arithmetic.product(cells));
	}

	return Math.max(...products);
}
function getMaxGridProduct(): number {
	const grid: number[][] = parseInput();

	let maxProduct: number = 0;

	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid[0].length; x++) {
			const product = getMaxPointProduct({ x, y }, grid);

			if (product > maxProduct) {
				maxProduct = product;
			}
		}
	}

	return maxProduct;
}

getMaxGridProduct();
