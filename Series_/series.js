/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
    - If any part of the problem is unclear, ask for clarification.
    - Do your functions or methods only return something or does it
     only have side effects?

PROBLEM STATEMENT:
input: string of digits
output: all possible consecutive number series of a specified length in that string
    - returns an array of arrays

RULES (make sure to check for things not explicitly stated):
    - if we have a 5 digit string and we as for a 6 digit, throw an error. 
    -
 
EDGE CASES:

QUESTIONS: 
max digits? 
handle 0?

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:
string = 01234. looking for 3 digit series

[[012], [123], [234]]

look for 4 digit series

1234, 1234

------------------Data Structures and Algorithm--------------------
 Class: Series
    - constructor:
        EXPECTED INPUT: string of numbers
        - accept number and conver to an array

    - Method: slices
        EXPECTED INPUT: number of slices.
        - create a results array and assign to [];
        - if number of slices > this.string.length -> throw error
        - create a for loop (start at 0, max is this.number.length; increment by 1)
            -> push a slice of number where the first arg is the count and second is count + number of slice.
        -
        -
        -
        EXPECTED OUTPUT:
*/
//---------------------------Code with Intent------------------------

class Series {
    constructor(string) {
        this.number = string.split('').map(element => Number(element));

    }

    slices(length) {
        this.validate(length - 1)
        let results = [];

        for (let count = 0; count <= this.number.length - length; count += 1) {
            results.push(this.number.slice(count, count + length))
        }
        return results
    }

    validate(length) {
        if (length >= this.number.length) {
            throw new Error("Series length can't be greater than string length");
        }
    }
} 
module.exports = Series;

let number = new Series('01234');
console.log(number.slices(3))