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

/** one step from the end */
num.splice(-1,0, 3,4);
console.log(num);

let alpha = ['t','e','s','t'];
console.log(alpha.slice(1,3));

let alpha1 = [];
alpha1 = alpha1.concat(num,alpha);
console.log(alpha1);

let alpha2 = [1,2];

let  arrayLike = {
    0:"something",
    1: "else",
    [Symbol.isConcatSpreadable]:true,
    length:2
};

console.log(alpha2.concat(arrayLike));

/** iterate forEach method */

// alpha1.forEach((item,index,alpha1)=>{
//   console.log(`${item} is at index ${index} in ${alpha1}`)
// });


const addFruits = () => {
    let clone = Object.assign([],fruits);
        boxvalue = document.getElementById('box').value;
        clone.push(boxvalue);
        console.log(clone);
};

const getFruits = ()=> {
    fruits.forEach((item,index,fruits) => {
        console.log(`${item} is at index ${index} in ${fruits}`);
    });
};

const deleteFruits = () => {
    let clone = Object.assign([],fruits);
    clone.pop();
    console.log(clone);
};

addFruits();

//getFruits();


