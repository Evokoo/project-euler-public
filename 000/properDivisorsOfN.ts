export default function properDivisorsOfN(n: number): number[] {
	let properDivisors: number[] = [1];

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			properDivisors.push(i);

			if (i !== n / i) {
				properDivisors.push(n / i);
			}
		}
	}

	return properDivisors.sort((a, b) => a - b);
}
