// Diophantine Equation - Problem 066
// https://projecteuler.net/problem=66

/*
    See link for description
*/

function solve(d: number, x: number, y: number): number {
	return x ** 2 - d * y ** 2;
}

let maxX = 0;

D: for (let d = 2; d <= 100; d++) {
	if (Number.isInteger(Math.sqrt(d))) continue;

	for (let y = 1; true; y++) {
		const limitX = d * y ** 2 + 1;

		for (let x = 1; x < limitX; x++) {
			console.log({ d, x, y });

			const solution = solve(d, x, y);

			if (solution === 1) {
				maxX = Math.max(x, maxX);
				continue D;
			}
		}
	}
}

console.log(maxX);
