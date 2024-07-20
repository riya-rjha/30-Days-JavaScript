let products = [{ "x": 1 }, { "x": 0 }, { "x": -1 }]
//when key is same, no sorting takes place
console.log(products.sort());

//Use sort function by taking two variables at a time

// var fn = (no) => {
//     return no;
// }

// fn = (d) => d.x //returns the value for key
var fn = (key) => {
    return key.x; //value of 'x'
}
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};
console.log(sortBy(products, fn));

//Alternative Method
// return arr.slice().sort((a, b) => fn(a) - fn(b)); //creates a new array


//Promise Time Limit

//If function completes within given time limit, resolve the promise 
//If function exceeds given time limit, reject the promise

fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
}

var timeLimit = function (fn, t) {

    return async function (...args) {
        const originalFn = fn(...args);
        const timeLimited = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded!');
            }, t);
        });
        return Promise.race([originalFn, timeLimited]);
    }
};

inputs = [5]
t = 50
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms