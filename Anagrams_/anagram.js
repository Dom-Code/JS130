/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
    - If any part of the problem is unclear, ask for clarification.
    - Do your functions or methods only return something or does it
     only have side effects?

PROBLEM STATEMENT:
    Write a program that takes a word and a list of possible anagrams.
        -> it selects the correct sublist that contains the anagrams
        of the word.

    Input: word, and list of words (first input is a string, second is an array of strings)

    Anagram: hae the same number of letters and he same exact letters as
    each other. 

    output: a array of anagrams. or an empty array. 

RULES (make sure to check for things not explicitly stated):
    -  letters cannot be reused. 


EDGE CASES:
    -
    -
    -

QUESTIONS: uppercase? numbers? all list arguments will have at least 1 element? 

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE: given: 'listen',  [ "enlists", "google", "inlets", and "banana", ]

the program returns a list containing 'inlets'.

EXAMPLE:



EXAMPLE:

------------------Data Structures and Algorithm--------------------
 Class: Anagram
    - constructor: 
        EXPECTED INPUT: word
        - accept word -> convert to lowercase and sort.

    - Method: match
        EXPECTED INPUT: array of strings
        - iterate through argument.
            -> sort and lowercase each word and compare to inputword. 
        -   if the they are the same, push word to results. 
        - return results 
        -
        EXPECTED OUTPUT: array of matthing strings
*/
//---------------------------Code with Intent------------------------

class Anagram {
    constructor(word) {
        this.word = word;
    }
    match(array) {
        let results = [];
        array.forEach(element => {
            if (this.word.toLowerCase() !== element.toLowerCase()) {
                if (this.word.toLowerCase().split('').sort().join('') === element.toLowerCase().split('').sort().join('')) {
                    results.push(element)
                }
            }
        })
        return results
    }
}

module.exports = Anagram;

let word = new Anagram('corn')
console.log(word.match(['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park'])) //['maters', 'stream']