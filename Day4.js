//Array Reduced Transformation
let nums = [1, 2, 3, 4];
let init = 100;

const fn = (accum, curr) => {
    return accum + curr * curr;
}

var reduce = function (nums, fn, init) {
    let val = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            val += fn(init, nums[i]);
        }
        else{
            val=fn(val, nums[i]);
        }
    }
    if (nums.length === 0) {
        return init;
    }
    return val;
};

var reduceAlt = function (nums, fn, init) {
    let res = init;
    for (const el of nums) {
        res = fn(res, el);
    }
    return res;
}

const ans = reduce(nums, fn, init);
console.log(ans);

const ansAlt = reduceAlt(nums, fn, init);
console.log(ansAlt);


// ----------
//Function Composition

const functions = [x => x + 1, x => 2 * x];

var compose = function (functions) {

    return function (x) {
        if(functions.length === 0){
            return x;
        }
        for(let i=functions.length - 1; i>=0; i--){
            x = functions[i](x);
        }
        return x;
    }
};

const answer = compose(functions);
console.log(answer(4));

//Return number of parameters of function
const param = (...args) => {
    return args.length;
}

console.log(param({},0,"Riya"));