/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
    - If any part of the problem is unclear, ask for clarification.
    - Do your functions or methods only return something or does it
     only have side effects?

PROBLEM STATEMENT:
generate lyrics for 99 bottles. 
input: number.
output: return lyric with number in placed in lyric. 
- lyric will contain current number and 1 below.

RULES (make sure to check for things not explicitly stated):
    - if 2 arguments. start at 1st and keep going till you reach second arg.
    - 1 and 0 has a differnet return 
    - wholeSong() returns 99 - 0


-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:


------------------Data Structures and Algorithm--------------------
 Class: Beer Song

    - static multipleBottles
    - static singleBottle
    - static noBottles
    - Method: verse()
        -> declare song and assign to empty string. 
        EXPECTED INPUT: start, end
        if (!end) {
            return MultipleBottles(start)
        } 

        create a for loop -> start, end, -= 1; 
        -> song += multiple(count)

    - Method bottles(number)
        let verse = '';
        if number === 0 {
            return verse with no bottles
        } if number === 1 {
            return verse with singleBottle
        } else {
            return verse with number. 
        }

    - Method singleBottles

    - 
*/
//---------------------------Code with Intent------------------------

class BeerSong {
    static MULTIPLEBOTTLES = 'bottles';
    static SINGLEBOTTLE = 'bottle';

    static verse(number) {
        let song = '';
        return this.bottles(number);
    }

    static verses(start, end) {
        let song = '';
        if (end === undefined) {
            return this.bottles(start);
        } 
        for (let count = start; count >= end; count -= 1) {
            if (count !== end) {
                song += this.bottles(count) + '\n'
            } else {
                song += this.bottles(count)
            }

        }
        return song
    }


    static bottles(number) {
        if (number === 2) {
            return number + " bottles of beer on the wall, " + number + " bottles of beer.\n" +
            "Take one down and pass it around, 1 bottle of beer " +
            "on the wall.\n"
        } if (number === 1) {
            return  "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take it down and pass it around, no more bottles " +
            "of beer on the wall.\n";
        } if (number === 0) {
            return "No more bottles of beer on the wall, no more " +
            "bottles of beer.\nGo to the store and buy some " +
            "more, 99 bottles of beer on the wall.\n";
        } 
        return number + " bottles of beer on the wall, " + number + " bottles of beer.\n" +
        "Take one down and pass it around, " + (number - 1) + " bottles of beer " +
        "on the wall.\n"
    }
    static lyrics() {
        let song = ''
        for (let count = 99; count >= 0; count -= 1) {
            if (count !== 0) {
                song += this.bottles(count) + '\n';
            } else {
                song += this.bottles(count)
            }
        }
        return song;
    }
}

module.exports = BeerSong;

