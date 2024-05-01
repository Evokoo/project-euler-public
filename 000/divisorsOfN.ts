export default function divisorsOfN(n: number): Set<number> {
	const divisors: Set<number> = new Set();

	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			divisors.add(i);
			divisors.add(n / i);
		}
	}

	return divisors;
}
