import fs from "fs";

export function sortNames(names: string[]): string[] {
	return names.sort((a, b) => a.localeCompare(b));
}

export function getNames(file: string): string[] {
	const data = fs.readFileSync(file + ".txt", "utf-8");
	const names = data.match(/[A-Z]+/g);

	return sortNames(names);
}

export function scoreName(name: string): number {
	const alphabet: string = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return [...name].reduce((acc, cur) => acc + alphabet.indexOf(cur), 0);
}

export function scoreList(names: string[]): number {
	return [...names].reduce((acc, cur, i) => acc + scoreName(cur) * (i + 1), 0);
}
