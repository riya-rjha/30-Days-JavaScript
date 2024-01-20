//Return a counter function which increments value at every call of function

const counter = (n) => {
    function increment() {
        return () => n++;
    }
    return increment();
}

const result = counter(10);
console.log(result());
console.log(result());
console.log(result());

//Creating classes & constructors and then accessing values
class Sum {
    constructor(a) {
        this.a = a;
    }
    sum(b) {
        // this.b = b;
        //Above line creates a property that can be used explicitly as it is for 'a'
        return this.a + b;
    }
}
const result2 = new Sum(5);
console.log(result2.sum(2));

//Using throw error functions
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