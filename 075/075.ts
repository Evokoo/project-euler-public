// Singular Integer Right Triangles - Problem 075
// https://projecteuler.net/problem=75

/*
It turns out that 12cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.

    12cm : (3,4,5)
    24cm : (6,8,10)
    30cm : (5,12,13)
    36cm : (9,12,15)
    40cm : (8,15,17)
    48cm : (12,16,20) 

In contrast, some lengths of wire, like 20cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120cm it is possible to form exactly three different integer sided right angle triangles.

    120cm : (30,40,50),(20,48,52),(24,45,51) 

Given that L is the length of the wire, for how many values of L <= 1,500,000can exactly one integer sided right angle triangle be formed?
*/

import gcd from "../000/gcd";

export default function singluarIntegerRightTriangles(limit: number) {
	const validLengths: Map<number, number> = new Map();
	const loopLimit = Math.sqrt(limit / 2);

	let count = 0;

	for (let m = 2; m <= loopLimit; m++) {
		const mSq = m ** 2;

		for (let n = 1; n < m; n++) {
			if ((m + n) % 2 === 1 && gcd(m, n) === 1) {
				const nSq = n ** 2;

				const a = mSq - nSq;
				const b = 2 * m * n;
				const c = mSq + nSq;

				for (let k = 1; true; k++) {
					const perimeter = k * (a + b + c);

					if (perimeter > limit) {
						break;
					} else {
						const numCount = validLengths.get(perimeter) || 0;
						validLengths.set(perimeter, numCount + 1);

						if (numCount === 0) count++;
						else if (numCount === 1) count--;
					}
				}
			}
		}
	}

	return count;
}
