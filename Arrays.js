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

/**
 * Schedule repeated calls to a function every t ms and return a cancel function.
 * The first call executes immediately.
 * @param {Function} fn - function to invoke
 * @param {Array} args - arguments passed to fn
 * @param {number} t - interval in milliseconds
 * @returns {Function} cancelFn - clears the interval when invoked
 */
var cancellable = function (fn, args, t) {
    fn(...args);
    const intervalId = setInterval(() => {
        return fn(...args);
    }, t);
    const cancelFn = () => {
        clearInterval(intervalId);
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
/**
 * Determine whether an object has no own enumerable properties.
 * @param {Object} obj
 * @returns {boolean}
 */
var isEmpty = (obj) => {
    // O(1) check without allocating arrays
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

const stringIsThis = { "name": "RRJ", "field": "AIML" };
const stringIsNotThis = {};
console.log(isEmpty(stringIsThis));
console.log(isEmpty(stringIsNotThis));


//----------

//Chunk Array
/**
 * Split an array into chunks of a given size.
 * @param {Array} arr
 * @param {number} size
 * @returns {Array[]}
 */
var chunk = function (arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i = i + size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
};

const arr = [1, 9, 6, 3, 2];
let size = 3;
//Output : [[1,9,6],[3,2]]
console.log(chunk(arr, size));

//-------

//Array Prototype Last
/**
 * Return the last element of an array or -1 if empty.
 * @returns {*}
 */
Array.prototype.last = function(){
    if(this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
}

const ans = arr.last();
console.log(ans);