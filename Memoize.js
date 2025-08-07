//Memoize Function
//It will never be called twice with same inputs
//Returns cache value

/**
 * Memoize a function by caching results for argument lists.
 * @template T
 * @param {Function} fn
 * @returns {Function}
 */
function memoize(fn) {
    let memo = {};
    return function (...args) {
        let stringArgs = JSON.stringify(args);//"[2,2]"
        if (stringArgs in memo) {
            return memo[stringArgs];//memoizedFn not called again
            //value of callCount remains unchanged for same value
        }
        let temp = fn(...args);
        memo[stringArgs] = temp;
        return temp;
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1

//Memoize - returns cached result
//helps in improving efficiency


//-------------

//Promises
//Adding two promises
/**
 * Add results of two promises, preserving async semantics.
 * @param {Promise<number>} promise1
 * @param {Promise<number>} promise2
 * @returns {Promise<number>}
 */
var addTwoPromises = async(promise1, promise2) => {
    return await promise1 + await promise2;
}

const ans = addTwoPromises(Promise.resolve(2), Promise.resolve(5));
ans.then(console.log); // .then chains the value of promise and waits for complete execution
//log statement might just print the promise current state even before complete execution