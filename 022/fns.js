import fs from "fs";
export function sortNames(names) {
    return names.sort((a, b) => a.localeCompare(b));
}
export function getNames(file) {
    const data = fs.readFileSync(file + ".txt", "utf-8");
    const names = data.match(/[A-Z]+/g);
    return sortNames(names);
}
export function scoreName(name) {
    const alphabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return [...name].reduce((acc, cur) => acc + alphabet.indexOf(cur), 0);
}
export function scoreList(names) {
    return [...names].reduce((acc, cur, i) => acc + scoreName(cur) * (i + 1), 0);
}
