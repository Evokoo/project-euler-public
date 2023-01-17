import fs from "fs";

export default function readTextFile(file: string): string {
	const data = fs.readFileSync(file + ".txt", "utf-8");
	return data;
}
