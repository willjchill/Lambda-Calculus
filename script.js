// recreating boolean algebra from lambda calculus
// we'll use functional programming to represent lambda calculus in js :P 

// If true, select for the first parameter which will represent "TRUE"
const T = (x, y) => x;  

// If false, select for the second parameter which will represent "FALSE"
const F = (x, y) => y; 

// Create a NOT operator using the aforementioned lambda calculus
const NOT = (b) => (b(F, T)); 

// function that outputs proper true or false based on function stored in declaration 
// the output is a readable string that should make sense to the reader
// (T - true), (F - false), (X - invalid input) 
function getBoolean(b) {
    if(b == T) {
        return "T";
    }
    else if(b == F) {
        return "F";
    }
    else {
        return "X";
    }
}


// Empirical demonstration of NOT 
console.log("!T = ", getBoolean(NOT(T))); // should output FALSE (F)
console.log("!F = ", getBoolean(NOT(F))); // should output TRUE (T) 


