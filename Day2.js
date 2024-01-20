//Return a counter function which increments value at every call of function

const counter = (n) => {
    function increment() {
        return () => n++;
    }
    return increment();
}

const result = counter(10);
console.log(result());
console.log(result());
console.log(result());

//Creating classes & constructors and then accessing values
class Sum{
    constructor(a){
        this.a = a;
    }
    sum(b){
        // this.b = b;
        //Above line creates a property that can be used explicitly as it is for 'a'
        return this.a + b;
    }
}
const result2 = new Sum(5);
console.log(result2.sum(2));

