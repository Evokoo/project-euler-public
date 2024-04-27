export default function partitionFunction(length: number): number[] {
	const partitions = Array.from({ length: length + 1 }, () => 0);

	partitions[0] = 1;

	for (let i = 1; i <= length; i++) {
		for (let j = i; j <= length; j++) {
			partitions[j] += partitions[j - i];
		}
	}

	return partitions;
}
