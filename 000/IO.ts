import fs from "fs";

/**
 * Utility class for interacting with local files.
 */
export default class IO {
	/**
	 * Read a local text file
	 * @param {string} filename - The name of the file to access
	 * @param {string} [directory = ""] - Change filepath (Optional)
	 * @returns {string} Contents of text file
	 */
	static readFile(filename: string, directory: string = "") {
		const data = fs.readFileSync(directory + filename + ".txt", "utf-8");
		return data;
	}

	/**
	 * Write a local text file
	 * @param {string} data - Content to write to file
	 * @param {string} filename - The name of the file to write
	 * @param {string} [directory = ""] - Change filepath (Optional)
	 * @returns {void} This function does not return
	 */
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
