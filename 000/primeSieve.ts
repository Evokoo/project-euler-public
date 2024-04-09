export default function primeSieve(min: number, max: number): number[] {
	const primes: boolean[] = new Array(max + 1).fill(true);
	primes[0] = primes[1] = false;

	for (let p = 2; p * p <= max; p++) {
		if (primes[p]) {
			for (let i = p * p; i <= max; i += p) {
				primes[i] = false;
			}
		}
	}

	const result: number[] = [];
	for (let i = min; i <= max; i++) {
		if (primes[i]) {
			result.push(i);
		}
	}

	return result;
}
