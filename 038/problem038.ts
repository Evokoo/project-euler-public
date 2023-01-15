// Pandigital multiples - Problem 038
// https://projecteuler.net/problem=38

/*
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/


const pandigitalNumbers: Set<number> = new Set();
const number = 192;

export function getDigits(n:number): number[] {
    return [...String(n)].map(Number)
}


for(let i = 0; i < 1_000_000; i++){
for(let j = 1; j < 10; j++){
    const uniqueNumbers: Set<number> = new Set();

    let product: number = j * i,
        digits: number[] = getDigits(product);

    for(let digit of digits){
        if(uniqueNumbers.has(digit)){
            break;
        }else{
            uniqueNumbers.add(digit)
        }
    }
    
    if(uniqueNumbers.size === 9){
        pandigitalNumbers.add(i)
    }
}
}

console.log(pandigitalNumbers)