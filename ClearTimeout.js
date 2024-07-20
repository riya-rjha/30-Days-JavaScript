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
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

var cancellable = function (fn, args, t) {
    const cancelFn = () => {
        clearTimeout(timer);
    }
    // const timer = setTimeout(fn(...args), t); -> Not correct
    //As in this the function is passed as first argument & execution does not take place after
    //specified time period

    const timer = setTimeout(() => {
        fn(...args);
    }, t);
    return cancelFn;
};

/*
 * Alternative Solution : 
 * var cancellable = function(fn, args, t){
 *      const timer = setTimeout(()=>{
 *          fn(...args);
 *      }, t);
 *      return ()=> clearTimeout(timer);
 * }
 */

const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)

