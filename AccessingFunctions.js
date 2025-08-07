//Return a counter function which increments value at every call of function

/**
 * Create a counter that increments on each invocation of the returned function.
 * @param {number} n - starting value
 * @returns {Function}
 */
const counter = (n) => {
    function increment() {
        return () => n++; // Callback function that stores reference
    }
    return increment();
}

const result = counter(10);
console.log(result());
console.log(result());
console.log(result());

//Creating classes & constructors and then accessing values
/**
 * Simple adder class to demonstrate instance properties and methods.
 */
class Sum {
    constructor(a) {
        this.a = a;
    }
    /**
     * @param {number} b
     * @returns {number}
     */
    sum(b) {
        // this.b = b;
        //Above line creates a property that can be used explicitly as it is for 'a'
        return this.a + b;
    }
}
const result2 = new Sum(5);
console.log(result2.sum(2));

//Using throw error functions
/**
 * Minimal matcher utility that supports toBe and notToBe assertions.
 * @param {*} val1
 */
const expect = (val1) => {
    return {
        toBe: (val2) => {
            if (val1 === val2) {
                return true;
            }
            else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (val2) => {
            if (val2 !== val1) {
                return true;
            }
            else {
                throw new Error("Equal");
            }
        }
    }
}

const resultAns = expect(5);
console.log(resultAns.notToBe('5'));

//Handling 3 functions within a counter function
/**
 * Create a counter API with increment, decrement, and reset.
 * @param {number} init
 * @returns {{increment: Function, decrement: Function, reset: Function}}
 */
const createCounter = (init) => {
    let counterVal = init;
    function increment() {
        return ++counterVal; //6
    }
    function decrement() {
        return --counterVal; //4
    }
    function reset() {
        return (counterVal = init); //5
    }
    return { increment, reset, decrement };
}

const answer = createCounter(5);
console.log(answer.increment());
console.log(answer.reset());
console.log(answer.decrement());


//Alternative method of accessing functions
/**
 * Alternative object-literal version of the counter API.
 * @param {number} init
 */
const createCounterAlternativeMethod = (init) => {
    let counterVal = init;
    return {
        increment: () => {
            return ++counterVal;
        },
        decrement: () => {
            return --counterVal;
        },
        reset: () => {
            return (counterVal = init);
        }
    }
}

const answerAlternative = createCounterAlternativeMethod(5);
console.log(answerAlternative.increment());
console.log(answerAlternative.reset());
console.log(answerAlternative.decrement());