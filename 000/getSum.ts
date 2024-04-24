export default function getSum(
	arr: number[],
	initialValue: number = 0
): number {
	return arr.reduce((acc, cur) => acc + cur, initialValue);
}
