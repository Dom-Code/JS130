/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
    - If any part of the problem is unclear, ask for clarification.
    - Do your functions or methods only return something or does it
     only have side effects?

PROBLEM STATEMENT: Write a program that can calculate
the distance between two DNA strands. (Hamming Distance)

The hamming distance is defined for sequences of 
equal length.
- if lengths are uneven, get distance over the 
shorter length. 


RULES (make sure to check for things not explicitly stated):
    -

EDGE CASES:
    -

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:
   let dna = new DNA('GGACTGA');
    expect(dna.hammingDistance('GGACTGA')).toBe(0);


EXAMPLE:
    let dna = new DNA('AAACTAGGGG');
    expect(dna.hammingDistance('AGGCTAGCGGTAGGAC')).toBe(3);


EXAMPLE:

------------------Data Structures and Algorithm--------------------
 Class: DNA
    - constructor: 
        EXPECTED INPUT: 1st seqence
        - accept first sequence
        - 
        EXPECTED OUTPUT:

    - Method: hammingDistance
        EXPECTED INPUT: 2nd sequence
        - declare a distance variable and assign to 0
        - declare variable firstCopy and assign to copy of firstSequence converted to array
        - declare variable secondCopy and assign to copy of secondSequence converted to array
        - declare maxLength an assign to firstCopy.length;
        - if secondCopy < firstCopy -> assign max length to secondCopy.length
        
            if secondCopy length < first Copy length
                -> set maxLength to second copyLength
                create a for loop(start at 0, limit at maxLength) 
                    -> if indexed element of first is not equal to indexed element of second
                        -> add 1 to distance
            if firstCopy.length is > secondCopy.length
                -> create if statement 
                    -> indexed element of second is not equal to indexed element of first
                        -> add 1 to distance
            - return distance
        EXPECTED OUTPUT:
*/
//---------------------------Code with Intent------------------------

class DNA {
    constructor(string) {
        this.firstSequence = string;
    }

    hammingDistance(string) {
        let distance = 0;
        let firstCopy = this.firstSequence.slice().split('');
        let secondCopy = string.slice().split('')
        let maxLength = firstCopy.length;
        
        let shortest = this.firstSequence.length < string.length ? this.firstSequence : string;

        if (secondCopy.length < firstCopy.length) {
            maxLength = secondCopy.length;
            for (let index = 0; index < maxLength; index += 1) {
                if (secondCopy[index] !== firstCopy[index]) {
                    distance += 1
                    console.log(secondCopy[index])
                }
            }
        } else {
            for (let index = 0; index < maxLength; index += 1) {
                if (firstCopy[index] !== secondCopy[index]) {
                    distance += 1;
                }
            }
        }
        return distance
    }
}

module.exports = DNA;
