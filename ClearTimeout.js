//Timeout Cancellation

const fn = (x) => x * 5;
const result = [];
const args = [2], t = 20, cancelTimeMs = 50;
const start = performance.now(); //gives time at which opertion started

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start); //time between start & end of op in milisecs
    result.push({ "time": diff, "returned": fn(...argsArr) });
}

// Initially, the execution of the function fn should be delayed by t milliseconds.
// If cancelFn is invoked before t milliseconds elapses, it should cancel the delayed execution of fn.

/**
 * Delay invoking a function by t milliseconds and return a cancel function.
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t - timeout in milliseconds
 * @returns {Function} cancelFn
 */
var cancellable = function (fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args);
    }, t);
    return () => clearTimeout(timer);
};

const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)

