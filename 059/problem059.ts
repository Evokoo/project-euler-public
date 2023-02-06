// XOR decryption - Problem 059
// https://projecteuler.net/problem=59

/*
Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.

For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.

Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.

Your task has been made easy, as the encryption key consists of three lower case characters. Using cipher.txt, a file containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.
*/

import readTextFile from "../000/readTextFile.js";

function getPermutationsByLength(arr: string[] | number[], size: number) {
	const permutations: any[][] = [],
		len = arr.length;

	for (let i = 0; i < Math.pow(len, size); i++) {
		let combination = [],
			n: number = i;

		for (let j = 0; j < size; j++) {
			combination.push(arr[n % len]);
			n = ~~(n / len);
		}

		permutations.push(combination);
	}

	return permutations;
}

function getAsciiSum(message: string): number {
	return [...message].reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
}

const cipher: number[] = readTextFile("cipher").split(",").map(Number);
const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const passwords: string[][] = getPermutationsByLength(alphabet, 3);

let decryptedMessage: string = "";

for (let password of passwords) {
	let message: string = "";

	for (let i = 0; i < cipher.length; i++) {
		let passVal: number = password[i % 3].charCodeAt(0),
			charVal: number = cipher[i];

		message += String.fromCharCode(passVal ^ charVal);
	}

	if (/Euler's/gi.test(message)) {
		decryptedMessage = message;
	}
}

console.log(getAsciiSum(decryptedMessage));
