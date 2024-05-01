// Special Pythagorean Triplet - Problem 009
// https://projecteuler.net/problem=9

/*
	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2
    
    For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
*/

function findPythagoreanTriplet(target: number): number {
	for (let a = 1; a < target; a++) {
		for (let b = 1; b < a; b++) {
			const c = Math.hypot(a, b);

			if (a + b + c === target) {
				return a * b * c;
			}
		}
	}

	throw Error("Triplet not found");
}

console.log(findPythagoreanTriplet(1000));
