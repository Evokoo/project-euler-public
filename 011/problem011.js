//Problem 011
// https://projecteuler.net/problem=11

//What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid (input)?

import fs from "fs";

const getData = (file) => {
	const data = fs.readFileSync(file + ".txt", "utf-8");
	return data.split("\n").map((row) => row.trim().split(" ").map(Number));
};

const getProduct = (arr) => {
	return arr.reduce((acc, cur) => acc * cur, 1);
};

let grid = getData("input"),
	max = 0;

for (let i = 0; i < 20; i++) {
	for (let j = 0; j < 20; j++) {
		let y = i,
			x = j;

		let [r, d, dr, dl] = [0, 0, 0, 0];

		if (x <= 16) {
			let right = [
				[0, 0],
				[0, 1],
				[0, 2],
				[0, 3],
			].map(([ry, rx]) => grid[ry + y][rx + x]);

			r = getProduct(right);
		}

		if (x <= 16 && y <= 16) {
			let diagonalRight = [
				[0, 0],
				[1, 1],
				[2, 2],
				[3, 3],
			].map(([ry, rx]) => grid[ry + y][rx + x]);

			dr = getProduct(diagonalRight);
		}

		if (y <= 16) {
			let down = [
				[0, 0],
				[1, 0],
				[2, 0],
				[3, 0],
			].map(([ry, rx]) => grid[ry + y][rx + x]);

			d = getProduct(down);
		}

		if (x >= 4 && y <= 16) {
			let diagonalLeft = [
				[0, -0],
				[1, -1],
				[2, -2],
				[3, -3],
			].map(([ry, rx]) => grid[ry + y][rx + x]);

			dl = getProduct(diagonalLeft);
		}

		max = Math.max(max, r, d, dl, dr);
	}
}

console.log(max);
