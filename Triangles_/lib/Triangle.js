/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
    - If any part of the problem is unclear, ask for clarification.
    - Do your functions or methods only return something or does it
     only have side effects?

PROBLEM STATEMENT:
Write a program that will determine whether triangle is a equilateral, isocsceles, or scalene

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Valid Triangle: 
    - all sides greater than 0
    - sum of any 2 sides must be greater than or equal to the length of the third side.


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



EXAMPLE:



EXAMPLE:

------------------Data Structures and Algorithm--------------------
 Class: Triangle
    - constructor: 
        EXPECTED INPUT:(3 sides)
        -   accept 3 sides
        -   raise exception if not a valid triangle


    - Method: kind
        - use spread syntax.
        - assign first, second, third to array. 
        - if first === second && second === third, return equilateral
        - if first === second || second === third || third === first return isosceles.
        = else return scalene
        EXPECTED OUTPUT: returns a string representation of type of triangle

    static isInValid(3 sides)
    if array.some(any === 0) return true
    if side1 + side2 <= side3 || side2 + side3 <= side 1 || side1 + side 3 <= side 2
*/
//---------------------------Code with Intent------------------------

class Triangle {
    constructor(...sides) {
        this.sides = [...sides]
        if(Triangle.isInvalid(this.sides)) {
            throw new Error('Invalid sides')
        }
    }
    kind() {
        let [side1, side2, side3] = this.sides
        if (side1 === side2 && side2 === side3) return 'equilateral'
        if (side1 === side2 || side2 === side3 || side1 === side3) return 'isosceles'
        return 'scalene'

    }

    static isInvalid(array) {
        let [first, second, third] = array;

        if (array.some(number => {
            return number <= 0;
        })) {
            return true
        } else if (first + second < third || first + third < second || second + third < first) {
            return true
        }
    }
}
module.exports = Triangle;

// let smallTriangle = new Triangle(3, 2, 3);

// console.log(smallTriangle.kind())