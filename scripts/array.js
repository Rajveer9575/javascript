let fruits = ["Apple","Orange","Pear"];

console.log(fruits.shift());

fruits.unshift('Apple');
console.log(fruits);

//   adding multiple elements in array 
fruits.push("Chickoo","Guava");
console.log(fruits);
fruits.unshift("Papaya","Strawberry");

for(let fruit of fruits) {
    console.log(fruit);
}

let arr = new Array("Apple","Pear","etc");
console.log(arr);
let arr1 = new Array(2);

/** multidimensional array */

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let num = ["I","go","home"];
num.splice(0,3,"Let's dance","right","now");
console.log(num);
