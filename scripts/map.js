let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true, 'bool1');

console.table(map.get(1), map.get('1'), map.size);

/** Map can also use objects as keys */
let john = { name: "John"};

let visitsCountMap = new Map();

visitsCountMap.set(john, 310 );
console.log(visitsCountMap.get(john))

let me = {name: "Rajveer"};
let you = { name: "Ben"};

let visitsCountObj = {};
visitsCountObj[me] = 123;
//visitsCountObj[you] = 234;

console.log(visitsCountObj);