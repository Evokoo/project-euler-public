// Counting rectangles - Problem 085
// https://projecteuler.net/problem=85

/*
 By counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles:
 Although there exists no rectangular grid that contains exactly two million rectangles, find the area of the grid with the nearest solution. 
*/

// Formula:
// (n(n + 1) * m(m + 1)) / 4 = rectangles

function findGridArea(target: number): number {
	const closest: Record<string, number> = { x: 0, y: 0, diff: Infinity };

	for (let a = 1; a < 10_000; a++) {
		for (let b = 1; b < 10_000; b++) {
			const rectangles: number = (a * (a + 1) * b * (b + 1)) / 4;
			const difference: number = Math.abs(target - rectangles);

			if (difference < closest.diff) {
				closest.x = a;
				closest.y = b;
				closest.diff = difference;
			}
		}
	}

	return closest.x * closest.y;
}

console.log(findGridArea(2_000_000));
