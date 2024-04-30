//Miscellaneous methds
export default class Misc {
	// Check if string or number is a plaindrome
	static isPalindrome(
		input: string | number,
		caseInsenstive: boolean = true
	): boolean {
		let chars: string[] = [...String(input)];

		for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
			const charA: string = caseInsenstive ? chars[i].toLowerCase() : chars[i];
			const charB: string = caseInsenstive ? chars[j].toLowerCase() : chars[j];

			if (charA !== charB) return false;
		}

		return true;
	}
}
