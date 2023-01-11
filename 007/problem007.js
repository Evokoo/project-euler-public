// Problem 007
// https://projecteuler.net/problem=7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10,001st prime number?

const isPrime = (n) => {
	let max = Math.ceil(Math.sqrt(n));

	for (let i = 2; i <= max; i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
};

let primeNumbers = [2],
	i = 3;

while (primeNumbers.length < 10001) {
	if (isPrime(i)) {
		primeNumbers.push(i);
	}
	i++;
}

console.log(primeNumbers[10000]);
