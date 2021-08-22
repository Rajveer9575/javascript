let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] =  function ()  {

    return{
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
}

for(num of range){
    console.log(num);
}

let greet = 'Welcome to Indore';
let iterator = greet[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}

let arrayType = {
    0: "Hello",
    1: "World",
    length: 2
};

let at = Array.from(arrayType);
console.log(at.pop());


let at1 = Array.from(range);
console.log(at1)

