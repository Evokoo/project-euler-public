/**
 * Utility helper class for Prime numbers
 */

export default class Prime {
	/**
	 * Check primality of a number
	 * @param {number} n - `number` to test
	 * @returns {boolean} Indication if a number is Prime
	 */
	static isPrime(n: number): boolean {
		let limit: number = Math.sqrt(n);

		for (let i = 2; i <= limit; i++) {
			if (n % i === 0) return false;
		}

		return n > 1;
	}

	/**
	 * @private
	 * Algorithim for generating prime numbers efficently
	 * @param {number} min - minimum of generated range
	 * @param {number} max - maximum of generated range
	 * @returns {Array<number>} Prime numbers within min and max range;
	 */
	private static eratosthenesSieve(min: number, max: number): number[] {
		if (min < 2) min = 2;

		const primes: boolean[] = new Array(max + 1).fill(true);

		primes[0] = false;
		primes[1] = false;

		for (let p = 2; p * p <= max; p++) {
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

	/**
	 * Generate Prime numbers between min and max values
	 * @param {number} min - minimum of generated range
	 * @param {number} max - maximum of generated range
	 * @returns {Array<number>} Prime numbers within min and max range;
	 */
	static generatePrimes(min: number, max: number): number[] {
		return this.eratosthenesSieve(min, max);
	}

	/**
	 * Get the nth prime number
	 * @param {number} n - nth prime to find
	 * @returns {number} nth prime
	 * @borrows {@link Prime.generatePrimes()}
	 */
	static nthPrime(n: number): number {
		let max = n * 2;
		let primes: number[] = [];

		while (primes.length < n) {
			primes = this.eratosthenesSieve(2, max);
			max *= 2;
		}

		return primes[n - 1];
	}

	/**
	 * Get prime factors of a `number`
	 * @param {number} n - `number` to find prime factors of
	 * @param {Set<number>} primeSet - Pre generated prime number set (Optional)
	 * @returns {Array<number>} Factors of n
	 * @borrows {@link Prime.isPrime()}
	 */
	static primeFactors(n: number, primeSet?: Set<number>): number[] {
		let factors: number[] = [];

		if (primeSet) {
			for (let prime of primeSet) {
				if (prime > n) break;
				if (n % prime === 0) {
					factors.push(prime);
				}
			}
		} else {
			for (let i = 2; i <= n / 2; i++) {
				if (n % i === 0 && this.isPrime(i)) {
					factors.push(i);
				}
			}
		}

		return factors;
	}

	/**
	 * Get prime factors of a `number` with their exponents
	 * @param {number} n - `number` to find prime factors of
	 * @returns {Map<number, number>} Factors of n with their exponents
	 */
	static primeFactorsWithExponents(n: number): Map<number, number> {
		const factors = new Map<number, number>();
		let count = 0;

		while (n % 2 === 0) {
			count++;
			n = n / 2;
		}

		if (count > 0) {
			factors.set(2, count);
		}

		for (let i = 3; i <= Math.sqrt(n); i += 2) {
			count = 0;

			while (n % i === 0) {
				count++;
				n = n / i;
			}

			if (count > 0) {
				factors.set(i, count);
			}
		}

		if (n > 2) {
			factors.set(n, 1);
		}

		return factors;
	}
}
