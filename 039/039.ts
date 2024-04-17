// Integer right triangles - Problem 39
// https://projecteuler.net/problem=39

/*
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

function maxSolutionsForPerimeter() {
	const count: Map<number, number> = new Map();

	for (let target = 1; target <= 1000; target++) {
		for (let a = 1; a < target; a++) {
			for (let b = a + 1; b < target; b++) {
				const c = Math.sqrt(a ** 2 + b ** 2);

				if (a < b && b < c && Number.isInteger(c) && a + b + c === target) {
					count.set(target, (count.get(target) ?? 0) + 1);
				}
			}
		}
	}

	return [...count].sort((a, b) => b[1] - a[1])[0][0];
}

console.log(maxSolutionsForPerimeter());
