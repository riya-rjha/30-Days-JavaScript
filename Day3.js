//Apply transform over each element of the array
let arr = [1, 2, 3];

function plusOne(n) {
    return n + 1;
}

function plusIndex(n, i) {
    return n + i;
}

function constant(n) {
    return 140;
}

//Using for loop
var map = (arr, func) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i]);
    }
    return newArr;
}

//Using forEach loop
var map2 = (arr, func) => {
    let newArr = [];
    arr.forEach((el, i) => {
        newArr[i] = func(el, i);
    });
    return newArr;
}

//Using forOf loop
var map3 = (arr, func) => {
    let newArr = [];
    let index = 0;
    for (const el of arr) {
        newArr[index] = func(el, index);
        index++;
    }
    return newArr;
}

const newArray = map(arr, plusOne);
console.log(newArray);

const newArray2 = map2(arr, plusIndex);
console.log(newArray2);

const newArray3 = map3(arr, constant);
console.log(newArray3);


//In-built method of mapping
arr.map((el, idx) => {
    arr[idx] = el + 5;
})
console.log(arr);
//Here the array changes as the map function is implemented incorrectly
//And the goal is to change the original array

//Unchanged original array
let newArr = arr.map((el, idx) =>
    el = el + idx
)
console.log(arr); //Unchanged (map function not in parenthesis)
console.log(newArr);


/* -------------- */


//Applpy filter to array 
let array = [0, 10, 20, 30];
function greaterThan10(n) {
    return n > 10;
}
function firstIndex(n, i) {
    return i === 0;
}
function squareI(n, i) {
    return Math.pow(i, 2);
}

var filter = (arr, fn) => {
    let newFilteredArr = [];
    arr.forEach((el, idx) => {
        if (fn(el, idx)) {
            newFilteredArr.push(el);
        }
    });
    return newFilteredArr;
}

const arrIII = [1, 2, 3];

var filterII = (arrIII, fn) => {
    let newFilteredArr = [];
    let idx = 0;
    for (let el of arrIII) {
        if (fn(el, idx)) {
            newFilteredArr[idx] = el;
            idx++;
        }
    }
    return newFilteredArr;
}

const newArrayI = filter(array, greaterThan10);
console.log(newArrayI);

const newArrayII = filterII(arrIII, firstIndex);
console.log(newArrayII);

const sqArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArrayIII = filter(sqArr, squareI);
console.log(newArrayIII);

const ansArr = [1, 2, 30];
const newArrFiltered = ansArr.filter((el)=>
    el%2===0
)
console.log(newArrFiltered);

