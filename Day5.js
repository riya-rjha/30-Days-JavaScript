//Memoize Function
//It will never be called twice with same inputs
//Returns cache value

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