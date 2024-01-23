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