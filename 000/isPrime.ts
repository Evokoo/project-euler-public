export default function isPrime(n: number): boolean {
	let max: number = Math.sqrt(n);

	for (let i = 2; i <= max; i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
}
