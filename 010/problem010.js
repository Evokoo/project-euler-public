//Problem 010
// https://projecteuler.net/problem=10

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const isPrime = (n) => {
	let max = ~~Math.sqrt(n);

	for (let i = 2; i <= max; i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
};

let sum = 0;

for (let i = 1; i < 2_000_000; i++) {
	if (isPrime(i)) {
		sum += i;
	}
}

console.log(sum);
