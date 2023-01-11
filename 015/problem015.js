// Problem 015
// https://projecteuler.net/problem=15

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

let posMap = new Map();

const checkSubTree = (n, x, y) => {
	if (x === n && y === n) return 1;

	let index = `${y},${x}`,
		paths = 0;

	if (posMap.has(index)) return posMap.get(index);
	if (x < n) paths += checkSubTree(n, x + 1, y);
	if (y < n) paths += checkSubTree(n, x, y + 1);

	posMap.set(index, paths);

	return paths;
};

console.log(checkSubTree(20, 0, 0));
