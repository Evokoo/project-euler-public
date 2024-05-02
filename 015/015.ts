// Lattice Paths - Problem 015
// https://projecteuler.net/problem=15

/*
	Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

	How many such routes are there through a 20×20 grid?
*/

function findGridPaths(size: number) {
	const pathMap: Map<string, number> = new Map();

	function travseGrid(x: number, y: number): number {
		if (x === size && y === size) return 1;

		let point: string = `${x},${y}`;
		let paths: number = 0;

		if (pathMap.has(point)) return pathMap.get(point)!;
		if (x < size) paths += travseGrid(x + 1, y);
		if (y < size) paths += travseGrid(x, y + 1);

		pathMap.set(point, paths);

		return paths;
	}

	return travseGrid(0, 0);
}

console.log(findGridPaths(2));
