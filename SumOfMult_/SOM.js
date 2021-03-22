/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
    - If any part of the problem is unclear, ask for clarification.
    - Do your functions or methods only return something or does it
     only have side effects?

PROBLEM STATEMENT:
Write a program that: given a natural number and a set of numbers, 
    -> find the sum of all the multiples of the numbers in the set that 
    are less than the first number. 
        -> if set of numbers is not given, default 3 and 5. 


RULES (make sure to check for things not explicitly stated):
    -   
    -
    -
    -
    -
    -

EDGE CASES:
    -
    -
    -

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:
number is 20. the multiples of 3 or 5 from 0 - 20 is -> 3, 5, 6, 9, 10, 12, 15, 18
the sum of the multiple is 78. 

EXAMPLE:
7, 13, 17
to(20)

start at 0.
7, 13 and 17 are my multiples
stop at 20, not including it though. 

7, 13, 14,  17 


EXAMPLE:

------------------Data Structures and Algorithm--------------------
 Class: SumOfMultiples
    - constructor: 
        EXPECTED INPUT: list of numbers()
        - accept list (spread into an array). if non provided assign to [3, 5]

    - Method: to
        EXPECTED INPUT: max number(not included in results)
        -   declare a variable called multiples and assign to an empty array
        -   create a for loop (star at 0, max number is less than max) (count)
        -   create another for loop. that iterates through list of numbers. index
            -> if count % list[j] === 0
                    -> add count to multiples. 
        -return multiples
        -
        EXPECTED OUTPUT:
*/
//---------------------------Code with Intent------------------------

class SumOfMultiples {
    constructor(...list) {
        this.list = list.length === 0 ? [3, 5] : list
    } 
    static to(number) {
        let foo = new SumOfMultiples();
        return foo.to(number)
    }
    to(maxNumber) {
        let results = [];
        for (let count = 1; count < maxNumber; count += 1) {
            for (let multiple = 0; multiple <= this.list.length; multiple += 1) {
                if (count % this.list[multiple] === 0 && !(results.includes(count))) {
                    results.push(count)
                }
            }
        }
        if (results.length === 0) return 0;

        return results.reduce((a, b) => a + b)
    }
}

module.exports = SumOfMultiples;
