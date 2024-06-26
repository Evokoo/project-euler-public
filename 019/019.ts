// Counting Sundays - Problem 019
// https://projecteuler.net/problem=19

/*
	You are given the following information, but you may prefer to do some research for yourself.
	- 1 Jan 1900 was a Monday.
	- Thirty days has September, April, June and November. All the rest have thirty-one, Saving February alone, Which has twenty-eight, rain or shine. And on leap years, twenty-nine.
	- A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

	How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

function countSundays(startYear: number, endYear: number) {
	let date: Date = new Date(`${startYear}-01-01`);
	let count: number = 0;

	while (date.getFullYear() !== endYear) {
		date.setMonth(date.getMonth() + 1);

		if (date.getDay() === 0) {
			count++;
		}
	}

	return count;
}

console.log(countSundays(1901, 2001));
