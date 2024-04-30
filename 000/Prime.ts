export default class Prime {
	//Check if number is prime
	static isPrime(n: number): boolean {
		let limit: number = Math.sqrt(n);

		for (let i = 2; i <= limit; i++) {
			if (n % i === 0) return false;
		}

		return n > 1;
	}

	private static eratosthenesSieve(min: number, max: number): number[] {
		if (min < 2) min = 2;

		const primes: boolean[] = new Array(max + 1).fill(true);

		primes[0] = false;
		primes[1] = false;

		for (let p = 2; p * p <= Math.sqrt(max); p++) {
			if (!primes[p]) continue;

			for (let i = p * p; i <= max; i += p) {
				primes[i] = false;
			}
		}

		const output: number[] = [];

		for (let i = min; i <= max; i++) {
			if (primes[i]) output.push(i);
		}

		return output;
	}

	// Generator Prime numbers between min and max values
	static generatePrimes(min: number, max: number): number[] {
		return this.eratosthenesSieve(min, max);
	}

	// Get nth Prime number
	static nthPrime(n: number): number {
		let max = n * n;
		let primes: number[] = [];

		while (primes.length < n) {
			primes = this.eratosthenesSieve(2, max);
			max *= 2;
		}

		return primes[n - 1];
	}
}
