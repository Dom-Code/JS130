/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
    - If any part of the problem is unclear, ask for clarification.
    - Do your functions or methods only return something or does it
     only have side effects?

PROBLEM STATEMENT:
Input a word
returns score for that word. 

A, E, I, O, U, L, N, R, S, T  => 	1
D, G                          => 	2
B, C, M, P 	                  =>    3
F, H, V, W, Y                 => 	4
K                             => 	5
J, X 	                      =>    8
Q, Z                          =>	10

RULES (make sure to check for things not explicitly stated):
    - empty word returns 0
    - white space retunrs 0
    - null returns 0
    - scores single words 
    - case insensitive

QUESTIONS: 

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:


------------------Data Structures and Algorithm--------------------
 Class: Scrabble
    - Static method
     - create object that holds letters as value and point value as key.

    - constructor 
        Expected Input: word
            - accept word.

    - method score: 
        EXPECTED INPUT:
        - create a total variable and assign to 0
        - if word length === 0 return 0
        - if word === null return 0
        - conver to lower case and iterate through word.
            - create a for in loop.
            - if letter from word is in the current value, add the key to total.
        EXPECTED OUTPUT: return total;

*/
//---------------------------Code with Intent------------------------

class Scrabble {
    static PointConversion = {
        1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        2: ['d', 'g'],
        3: ['b', 'c', 'm', 'p'],
        4: ['f', 'h', 'v', 'w', 'y'],
        5: ['k'],
        8: ['j', 'x'],
        10: ['q', 'z']
    }
    constructor(word) {
        this.word = word; 
    }
    static score(arg) {
        let temp = new Scrabble(arg);
        return temp.score()
    }
    score() {
        let total = 0;
        if (!this.word) return 0;

        this.word.toLowerCase().split('').forEach(letter => {
            for (let key in Scrabble.PointConversion) {
                if (Scrabble.PointConversion[key].includes(letter)) {
                    total += Number(key)
                }
            }
        })
        return total
    }

}

module.exports = Scrabble;
