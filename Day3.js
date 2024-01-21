//Apply transform over each element of the array
let arr = [1, 2, 3];

function plusOne(n) {
    return n + 1;
}

function plusIndex(n, i){
    return n+i;
}

function constant(n){
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
    arr.forEach((el,i) => {
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
let newArr = arr.map((el, idx)=>
    el = el + idx
)
console.log(arr); //Unchanged (map function not in parenthesis)
console.log(newArr);