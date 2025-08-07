let arrOfObj = [
    { "Name": "Robert", "Gender": 'M', "Age": 20 },
    { "Name": "Aliana", "Gender": 'F', "Age": 34 },
    { "Name": "Illeana", "Gender": 'F', "Age": 46 },
    { "Name": "Alex", "Gender": 'M', "Age": 30 }
]

/**
 * For each object in the array, log its keys and values as arrays.
 * @param {Array<Object>} source
 */
const convertToArrofArr = (source) => {
    source.map(obj => {
        const ansKey = [];
        for (let key in obj) {
            ansKey.push(key);
        }
        console.log(ansKey);
    });

    source.map(obj => {
        const ansVal = [];
        for (let key in obj) {
            ansVal.push(obj[key]);
        }
        console.log(ansVal);
    });

}

convertToArrofArr(arrOfObj);
