export default function factorsOfN(n: number): number[] {
	const factors: Set<number> = new Set();

	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			factors.add(i);
			factors.add(n / i);
		}
	}

	return [...factors].sort((a, b) => a - b);
}
