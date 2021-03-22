/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
    - If any part of the problem is unclear, ask for clarification.
    - Do your functions or methods only return something or does it
     only have side effects?

PROBLEM STATEMENT:
Convert number to roman numerals

I stands for 1
V stands for 5
X stands for 10
L stands for 50
C stands for 100
D stands for 500
M stands for 1,000 


RULES (make sure to check for things not explicitly stated):
    - max number 3000.
    - each digit is expressed seperatly from left to right
    - numbers with 0 are skipped. 
    -

EDGE CASES:
    - 4 => IV
    - 9 => IX
    - 

ASSUMPTIONS: inputs will only be numbers between 1 and 3000. 
QUESTIONS: Do i need to validate numbers? 

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

53



------------------Data Structures and Algorithm--------------------
 Class: romanNumerals
    - Static Property: 
        - object with number roman numeral conversions.
    - constructor: 
        EXPECTED INPUT: number
        - accept number. 
        -
    - Method: toRoman()
        - declare the results variable and set to empty string
        - get values and keys of conversions
        - iterate through values with for each.
        - while this.number >= value
            -> subtract value from this.number
            -> add key at value location to results 
        EXPECTED OUTPUT:
*/
//---------------------------Code with Intent------------------------

class RomanNumerals {
    static Conversions = {
        M: 1000,
       CM: 900,
        D: 500,
       CD: 400,
        C: 100,
       XC: 90,
        L: 50,
       XL: 40,
        X: 10,
       IX: 9,
        V: 5,
       IV: 4,
        I: 1
     }

    constructor(number) {
        this.number = number; 
    }
    toRoman() {
        let results = '';
        let values = Object.values(RomanNumerals.Conversions)
        let keys = Object.keys(RomanNumerals.Conversions)
        values.forEach(value => {
            while (this.number >= value) {
                results += keys[values.indexOf(value)];
                this.number -= value;
            }
        })
        return results
    }
}

module.exports = RomanNumerals;


