/**
 * Factory that returns a function producing "Hello World!" when invoked.
 * @returns {Function}
 */
var createHelloWorld = function() {
    return function(){
        return ("Hello World!");
    }
}

const f = createHelloWorld();
f();

console.log(f()); //Hello World printed in terminal

//Factory of Functions
/**
 * Create a function that sums with a pre-supplied addend.
 * @param {number} a
 * @returns {(b:number)=>number}
 */
const functionWithinFunction = function(a){
    return function sum(b) {
        return (a+b);
    }
}

const sumCalc = functionWithinFunction(5);
sumCalc(5);

console.log(sumCalc(5));