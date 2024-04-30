import fs from "fs";

// Read and write methods for text files.
export default class IO {
	// Read text file
	static readFile(filename: string, directory: string = "") {
		const data = fs.readFileSync(directory + filename + ".txt", "utf-8");
		return data;
	}

	// Write text file
	static writeFile(data: string, filename: string, directory: string = "") {
		fs.writeFile(directory + filename + ".txt", data, (err) => {
			if (err) {
				console.error("Error writing file:", err);
			} else {
				console.log("File written successfully!");
			}
		});
	}
}
