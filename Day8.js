//Interval Cancellation

const result = [];

const fn = (x) => x * 2;
const args = [4], t = 35, cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) });
}

//Step 1 : Call the function fn anyhow
//Step 2 : Call again after every t miliseconds
//Step 3 : Until cancelFn is called after cancelTimeMS

var cancellable = function (fn, args, t) {
    fn(...args);
    const newFN = setInterval(() => {
        return fn(...args); 
    }, t);
    const cancelFn = () => {
        clearInterval(newFN);
    }
    return cancelFn;
};

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result);
    /* [
    *     {"time":0,"returned":8},
    *     {"time":35,"returned":8},
    *     {"time":70,"returned":8},
    *     {"time":105,"returned":8},
    *     {"time":140,"returned":8},
    *     {"time":175,"returned":8}
    *   ]
    */
}, cancelTimeMs + t + 15);

// -------------

//Is Object Empty Check
var isEmpty = (obj) => {

    /*
    
    Approach 1
    checks only for arrays

    return obj.length === 0;

    Approach 2
    TC -O(n)

    return JSON.stringify(obj).length<=2;

    Approach 3
    TC - O(1)
    Optimized Solution

    return Object.keys(obj).length === 0;

    */

    //Approach 4
    //TC - O(1)
    //Optimized Solution
    for (i in obj) {
        //if there exists any element
        return false;
    }
    return true;
}

const stringIsThis = { "name": "RRJ", "field": "AIML" };
const stringIsNotThis = {};
console.log(isEmpty(stringIsThis));
console.log(isEmpty(stringIsNotThis));