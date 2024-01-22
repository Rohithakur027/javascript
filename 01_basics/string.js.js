const name = "rohit" 

const rank = 1

// console.log( name + rank + "value" ); not a good practice 

console.log(`my name is ${name} and my rank is ${rank} `);

console.log(name.charAt(0));
console.log(name[0])

const name1 = new String('rohit-thakur-01')

console.log(name1.indexOf('h'));



console.log(name1.length);


console.log(name1.__proto__);
console.log(name.__proto__);


const newString = name1.substring(0,4)

console.log(newString)

const newString1 = name1.slice(-4,10)

console.log(newString1)


const name2 = "  purnam  "

console.log(name2);
console.log(name2.trim());

const url = "https://rohit%20thakur.com"

console.log(url.replace('%20' , '-'));


console.log(url.includes('thau'));

// converting into array

console.log(name1.split('-'));










