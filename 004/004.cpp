// Largest Palindrome Product - Problem 004
// https://projecteuler.net/problem=4

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

#include <iostream>
#include <string>

bool is_palindrome(int n){
    std::string digits = std::to_string(n);

    for(size_t i = 0, j = digits.size() - 1; i < j; i++, j--){
        char digit_a = digits[i];
        char digit_b = digits[j];

        if(digit_a != digit_b){
            return false;
        }
    }

    return true;
}

int problem_004(){
    int largest_plaindrome = 0;

    for(int i = 100; i < 1000; i++){
        for(int j = 100; j < 1000; j++){
            int product = i * j;

            if(is_palindrome(product) && product > largest_plaindrome){
                largest_plaindrome = product;
            }
        }
    }

    return largest_plaindrome;
}

int main(){
    std::cout << "Project Euler Problem 004" << std::endl;
    std::cout << "Solution: " << std::to_string(problem_004()) << std::endl;
    return 0;
}