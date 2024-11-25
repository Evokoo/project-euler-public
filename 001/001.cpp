// Multiples of 3 or 5 - Problem 001
// https://projecteuler.net/problem=1

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

#include "../000/solve.h"
#include <iostream>

int problem_001(size_t limit = 1000){
    int sum = 0;

    for(size_t i = 0; i < limit; i++){
        if(i % 5 == 0 || i % 3 == 0){
            sum += i;
        }
    };

    return sum;
}

int main(){
    print_solution(std::to_string(problem_001(1000)), "001");
}

