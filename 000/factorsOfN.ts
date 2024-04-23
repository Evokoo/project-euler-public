export default function factorsOfN(n: number): number[] {
	const factors: number[] = [];

	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			factors.push(i);
			if (i !== Math.sqrt(n)) {
				factors.push(n / i);
			}
		}
	}

	factors.sort((a, b) => a - b);

	return factors;
}
