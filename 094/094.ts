// Almost Equilateral Triangles - Problem 094
// https://projecteuler.net/problem=94

/*
It is easily proved that no equilateral triangle exists with integral length sides and integral area. However, the almost equilateral triangle 5-5-6 has an area of 12 square units.

We shall define an almost equilateral triangle to be a triangle for which two sides are equal and the third differs by no more than one unit.

Find the sum of the perimeters of all almost equilateral triangles with integral side lengths and area and whose perimeters do not exceed one billion (1,000,000,000)
*/

import Decimal from "decimal.js";

function isAlmostEquilateral(a: number, b: number): boolean {
	const side = new Decimal(a);
	const base = new Decimal(b);
	const height = Decimal.sqrt(side.pow(2).minus(base.div(2).pow(2)));
	const area = new Decimal(0.5).mul(base).mul(height);

	return area.isInteger();
}

function almostEquilateralPerimeterTotal(limit: number = 1_000_000_000) {
	const seqeunce = [
		5, 17, 65, 241, 901, 3361, 12545, 46817, 174725, 652081, 2433601, 9082321,
		33895685, 126500417, 472105985, 1761923521, 6575588101, 24540428881,
		91586127425, 341804080817, 1275630195845, 4760716702561, 17767236614401,
	];

	let totalPerimeter = 0;

	for (let n of seqeunce) {
		const above = n * 3 + 1;
		const below = n * 3 - 1;

		if (above <= limit && isAlmostEquilateral(n, n + 1)) {
			// console.log([n, n + 1]);
			totalPerimeter += above;
		}

		if (below <= limit && isAlmostEquilateral(n, n - 1)) {
			// console.log([n, n - 1]);
			totalPerimeter += below;
		}
	}

	return totalPerimeter;
}

console.log(almostEquilateralPerimeterTotal());
