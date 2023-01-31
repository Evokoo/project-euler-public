export default function isPalindrome(input: string | number): boolean {
	let chars = [...String(input)];

	for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
		if (chars[i] !== chars[j]) return false;
	}

	return true;
}
