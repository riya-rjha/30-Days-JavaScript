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
    return arr.sort((a,b)=>fn(a)-fn(b));
};
console.log(sortBy(products, fn));

//Alternative Method
return arr.slice().sort((a, b) => fn(a) - fn(b)); //creates a new array