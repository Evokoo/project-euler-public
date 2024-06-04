// Anagramic Squares - Problem 098
// https://projecteuler.net/problem=98

/*
By replacing each of the letters in the word CARE with 1,2,9 and 6 respectively, we form a square number: 1296 = 36^2
.What is remarkable is that, by using the same digital substitutions, the anagram, RACE, also forms a square number: 9216 = 96 ^ 2. We shall call CARE (and RACE) a square anagram word pair and specify further that leading zeroes are not permitted, neither may a different letter have the same digital value as another letter.

Using words.txt a text file containing nearly two-thousand common English words, find all the square anagram word pairs (a palindromic word is NOT considered to be an anagram of itself).

What is the largest square number formed by any member of such a pair?
*/

import IO from "../000/IO";

function sortedString(input: string | number): string{
    input = typeof input === "string" ? input : String(input);
    return [...input].sort().join("");
}
function isAnagram(a: string | number, b:string | number): boolean{
    return sortedString(a) === sortedString(b);
}
function anagramWords(filename: string): Map<string,string[]>{
    const words: string[] = IO.readFile(filename).match(/[A-Z]+/g) || [];
    const map: Map<string, string[]> = new Map();
    const seen: Set<string> = new Set();

    for(let a of words){
        for(let b of words){
            if(a === b || a.length !== b.length || !isAnagram(a,b) || seen.has(a)) continue;
            map.set(a, ([...(map.get(a) ?? []), b]));
            seen.add(b);
        }
    }

    return map;
}
function anagramSquares(): Map<string, number[]>{
    const map: Map<string, number[]> = new Map();

    for(let i = 1; i ** 2 < 1_000_000_000; i++){
        const sqr = i ** 2
        const pattern = sortedString(sqr);
        map.set(pattern, [...(map.get(pattern) || []), sqr]);
    }

    return map;
}
function largestAnagramicSquare(filename: string){
    const wordAnagrams: Map<string, string[]> = anagramWords(filename);
    const squareAnagrams: Map<string, number[]> = anagramSquares();

    let largest = 0;

    for(let [base,permutations] of [...wordAnagrams]){
        patterns: for(let [pattern, squares] of [...squareAnagrams]){
            if(pattern.length !== base.length) continue;

            const characters: Map<string, string> = new Map();
            const digits: string = String([...squares].shift()!)

            for(let i = 0; i < base.length; i++){
                const char = base[i];
                const digit = digits[i];

                if(characters.has(digit)){
                    continue patterns;
                }else{
                    characters.set(digit, char);
                }
            }

            let combinations = squares.map(n => String(n).replace(/./g, ($) => characters.get($) ?? "_"));
            let valueIndex = combinations.findIndex(word => permutations.includes(word));

            if(valueIndex >= 0){
                largest = Math.max(largest, squares[valueIndex]);
            }
        }
    }

    return largest;
}

console.log(largestAnagramicSquare("words"))
