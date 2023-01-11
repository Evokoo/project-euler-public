//Problem 006
// https://projecteuler.net/problem=6

// The sum of the squares of the first ten natural numbers is 385
// The square of the sum of the first ten natural numbers is 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sum = 0,
	squareSum = 0,
	limit = 100;

for (let i = 1; i <= limit; i++) {
	sum += i * i;
	squareSum += i;
}

let difference = Math.abs(sum - squareSum ** 2);
console.log(difference);
