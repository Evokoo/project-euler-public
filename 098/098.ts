// Anagramic Squares - Problem 098
// https://projecteuler.net/problem=98

/*
By replacing each of the letters in the word CARE with 1,2,9 and 6 respectively, we form a square number: 1296 = 36^2
.What is remarkable is that, by using the same digital substitutions, the anagram, RACE, also forms a square number: 9216 = 96 ^ 2. We shall call CARE (and RACE) a square anagram word pair and specify further that leading zeroes are not permitted, neither may a different letter have the same digital value as another letter.

Using words.txt a text file containing nearly two-thousand common English words, find all the square anagram word pairs (a palindromic word is NOT considered to be an anagram of itself).

What is the largest square number formed by any member of such a pair?
*/

import IO from "../000/IO";

function isAnagram(a: string | number, b:string | number): boolean{
    function sortedString(word: string){
        return [...word].sort().join("");
    }

    a = typeof a === "string" ? a : String(a);
    b = typeof b === "string" ? b : String(b);

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
function anagramSquares(): Map<number, number[]>{
    const map: Map<number, number[]> = new Map();

    for(let i = 1; i ** 2 < 1_000_000; i++){
        const aSqr = i ** 2;
        const limit = 10 ** String(aSqr).length;

        for(let j = 1; j ** 2 <= limit; j++){
            const bSqr = j ** 2;

            if(!map.has(bSqr) && aSqr !== bSqr && isAnagram(aSqr, bSqr)){
                map.set(aSqr, [...(map.get(aSqr) || []), bSqr]);
            }
        }
    }


    return map;
}

function largestAnagramicSquare(filename: string){
    const wordAnagrams: Map<string, string[]> = anagramWords(filename);
    const squareAnagrams: Map<number, number[]> = anagramSquares();

    let largest = 0;

    for(let [keyword, words] of [...wordAnagrams]){
        

        for(let [keysquare, squares] of [...squareAnagrams]){
            if(String(keysquare).length !== keyword.length) continue;

            const characters: Record<string, number> = {};
            const digits = String(keysquare);

            for(let i = 0; i < digits.length; i++){
                characters[keyword[i]] = +digits[i];
            }

            let match = words.find((word) => squares.includes(+[...word].map(c => characters[c] ?? "_").join("")));

            if(match){
                largest = Math.max(largest, keysquare);
            }  
        }
    }

    console.log(squareAnagrams.get(largest));
}

largestAnagramicSquare("words");