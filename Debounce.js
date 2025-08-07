//Creating Debounce Function
//ClearTimeout if function is invoked during delayed time execution
//Execute function if invoked after delayed time execution

/**
 * Returns a debounced version of fn that delays invoking until t ms have elapsed
 * since the last call.
 * @param {Function} fn
 * @param {number} t - delay in milliseconds
 */
var debounce = (fn, t) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    }
}


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms


//Resolve all promises in the same order
//If there arises an error, reject the promise

/**
 * Await all promises from an array of functions returning promises, preserving order.
 * Rejects immediately if any promise rejects.
 * @param {Array<Function>} functions
 * @returns {Promise<Array>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        const resultArr = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, i) => {
            fn()
                .then((val) => {
                    resultArr[i] = val;
                    count++;
                    if (count === functions.length) {
                        resolve(resultArr);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    })
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]



//Array Wrapper 
/**
 * Wrapper around an array to customize addition and string conversion.
 */
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    valueOf() {
        let sum = 0;
        for (let i = 0; i < this.nums.length; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
    toString() {
        let str = "[";
        for (let i = 0; i < this.nums.length; i++) {
            str += this.nums[i];
            if (i !== this.nums.length - 1) {
                str += ',';
            }
        }
        str += ']';
        return str;
    }
}



const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

